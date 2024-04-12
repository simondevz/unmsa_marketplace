import { useEffect, useMemo, useRef, useState } from "react";
import { Form, useLocation, useNavigate, useParams } from "react-router-dom";
import { ProductType } from "../../types/productTypes";
import {
  useCreateProductMutation,
  useLazyGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../api.routes";
import { ClipLoader } from "react-spinners";
import { useAppSelector } from "../../redux/hooks";

export default function EditProductPage() {
  const location = useLocation();
  const pathname = location.pathname;
  const pageType = pathname.includes("/create") ? "Create" : "Edit";
  const params = useParams();

  const productId: string = params.productId || "";
  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const categories = useAppSelector((state) => state.shop.categories);

  const userId = useAppSelector((state) => state.auth._id);
  const [getProductFn, getProductRes] = useLazyGetProductByIdQuery();
  const [
    updateProductFn,
    //  updateProductRes
  ] = useUpdateProductMutation();

  const [errorMsg, setErrorMsg] = useState<string>("");
  const [creatProductFn, { isLoading, isSuccess }] = useCreateProductMutation();
  const [productData, setProductData] = useState<Partial<ProductType>>({
    name: "",
    price: 0.0,
    category: "",
    image: null,
    description: "",
    quantity: 0,
  });

  // get product for editing if product id exists
  useEffect(() => {
    if (productId) getProductFn({ product_id: productId });
  }, [getProductFn, productId]);

  // update productData object
  useMemo(() => {
    if (getProductRes.isSuccess) {
      setProductData({
        name: getProductRes.data[0].name,
        price: Number(getProductRes?.data?.[0]?.price),
        image_url: getProductRes?.data?.[0]?.image_url,
        description: getProductRes?.data?.[0]?.description,
        quantity: getProductRes?.data?.[0]?.quantity,
        category: getProductRes?.data?.[0]?.category,
      });
    }

    if (getProductRes.isError) {
      setErrorMsg("Could not fetch product details");
    }
  }, [getProductRes.data, getProductRes.isError, getProductRes.isSuccess]);

  // todo: handle redirection after creating product
  useEffect(() => {
    if (isSuccess) navigate(`/profile/${userId}`);
  });

  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductData({
      ...productData,
      image: event.target.files?.[0],
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userId) throw new Error("Please Log in");

    // Error checks
    if (!productData?.name) {
      setErrorMsg("Please add a Product Name");
      return;
    }

    if (!productData?.description) {
      setErrorMsg("Please add a Description");
      return;
    }

    if (!productData?.image && !productData?.image_url) {
      setErrorMsg("Please add an Image");
      return;
    }

    if (!productData?.price) {
      setErrorMsg("Please add a price for your Product");
      return;
    }

    if (!productData?.category) {
      setErrorMsg("Please add a category for your Product");
      return;
    }

    if (pageType === "Create") {
      const formData = new FormData();
      formData.append("name", productData.name as string);
      formData.append("description", productData.description as string);
      formData.append("price", String(productData.price));
      formData.append("image", productData.image);
      formData.append("category", String(productData.category));
      formData.append("quantity", String(productData.quantity));
      creatProductFn(formData);
    } else {
      updateProductFn({
        id: productId,
        updateBody: {
          name: productData.name,
          price: productData.price,
          description: productData.description,
          quantity: productData.quantity,
          category: productData.category,
        },
      });
    }
  };

  console.log(productData);

  const Divider = () => {
    return <div className="bg-ash h-[2px] rounded-full w-full flex "></div>;
  };

  return (
    <>
      <div className="flex w-full px-10 py-4 bg-green text-white font-agrandir_bold text-[1.2rem]">
        <span className="my-auto">{pageType} Product</span>
      </div>
      <section className="md:px-10 md:py-6 flex">
        <div className="flex flex-col gap-2 md:gap-4 md:border-light_green md:border-2 w-full rounded-xl p-4 md:p-8 shadow-lg">
          <span className="my-auto font-agrandir text-green md:text-[1.2rem]">
            {pageType} Product
          </span>
          <Divider />

          <Form
            onSubmit={handleSubmit}
            className="flex md:flex-row flex-col-reverse gap-4 md:gap-10 p-2 md:p-8 w-full font-agrandir shadow-lg rounded-md"
          >
            <div className={errorMsg ? "flex md:hidden " : "hidden "}>
              <span className="flex mx-auto text-[0.5rem] md:text-[0.75rem] text-light_red">
                {errorMsg}
              </span>
            </div>
            <div className="flex flex-col w-full gap-2 md:gap-4">
              <div className="flex flex-col gap-2 md:gap-4">
                <label htmlFor="name" className="flex flex-col">
                  <span className="md:text-[1.2rem]">Product name</span>
                </label>
                <div className="max-w-[30rem]">
                  <input
                    name="name"
                    id="name"
                    type={"text"}
                    className="md:px-4 px-2 py-2 border-2 w-full flex border-dark_ash_2 text-[0.75rem] md:text-base rounded-md bg-milky_white"
                    onChange={(event) => {
                      setProductData({
                        ...productData,
                        name: event.target.value,
                      });
                    }}
                    value={productData.name}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="price" className="flex flex-col">
                  <span className="md:text-[1.2rem]">Price (NGN)</span>
                </label>
                <div className="max-w-[30rem]">
                  <input
                    name="price"
                    id="price"
                    type={"number"}
                    value={`${productData.price}`}
                    onChange={(event) => {
                      setProductData({
                        ...productData,
                        price: Number(event.target.value),
                      });
                    }}
                    className="md:px-4 px-2 py-2 border-2 w-full flex border-dark_ash_2 text-[0.75rem] md:text-base rounded-md bg-milky_white"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="category" className="flex flex-col">
                  <span className="md:text-[1.2rem]">Product Category</span>
                </label>
                <div className="max-w-[30rem]">
                  <select
                    name="category"
                    id="category"
                    onChange={(event) => {
                      setProductData({
                        ...productData,
                        category: event.target.value,
                      });
                    }}
                    className="md:px-4 px-2 py-2 border-2 w-full flex border-dark_ash_2 text-[0.75rem] md:text-base rounded-md bg-milky_white"
                  >
                    <option
                      value={""}
                      disabled
                      selected={productData.category === ""}
                    >
                      Pick a Category
                    </option>
                    {categories.map((category, index) => {
                      return (
                        <option
                          value={category}
                          key={index}
                          selected={productData.category === category}
                        >
                          {category}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="quantity" className="flex flex-col">
                  <span className="md:text-[1.2rem]">
                    Number in stock (0-1000)
                  </span>
                </label>
                <div className="max-w-[30rem] flex gap-2 md:gap-4">
                  <input
                    type={"range"}
                    min={0}
                    max={1000}
                    color="#18661B"
                    name="quantity"
                    id="quantity"
                    value={productData.quantity}
                    onChange={(event) => {
                      setProductData({
                        ...productData,
                        quantity: Number(event.target.value),
                      });
                    }}
                    className="w-full h-[5px] my-auto"
                  />
                  <span>{productData.quantity}</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="description" className="flex flex-col">
                  <span className="md:text-[1.2rem]">Description</span>
                </label>
                <div className="max-w-[30rem]">
                  <textarea
                    name="description"
                    id="description"
                    value={productData.description}
                    onChange={(event) => {
                      setProductData({
                        ...productData,
                        description: event.target.value,
                      });
                    }}
                    className="md:px-4 px-2 py-2 border-2 w-full flex border-dark_ash_2 text-[0.75rem] md:text-base rounded-md bg-milky_white"
                  />
                </div>
                <div className={errorMsg ? "hidden md:flex " : "hidden "}>
                  <span className="flex mx-auto text-[0.5rem] md:text-[0.75rem] text-light_red">
                    {errorMsg}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 md:gap-4">
              <div>
                <label
                  htmlFor="image"
                  className="flex justify-around bg-ash_2 rounded-sm md:w-80 w-full md:h-72 h-40"
                >
                  {productData.image || productData.image_url ? (
                    <img
                      src={
                        productData?.image
                          ? URL.createObjectURL(productData?.image)
                          : productData?.image_url
                      }
                      alt="product preview"
                    />
                  ) : (
                    <span className="flex font-agrandir_bold md:text-[0.875rem] text-[0.5rem] text-center w-36 my-auto">
                      Upload a product image 200*200px
                    </span>
                  )}
                </label>
                <input
                  name="image"
                  id="image"
                  type={"file"}
                  accept="image/*"
                  // multiple
                  onChange={uploadImage}
                  alt="product-image"
                  className="hidden"
                />
              </div>

              <div className="hidden md:flex flex-col gap-4">
                <span>Select more details</span>
                <div className="flex gap-4">
                  <label>
                    <span className="font-agrandir_bold">Color:</span>
                  </label>
                  <div>
                    <input />
                  </div>
                </div>

                <div className="flex gap-4">
                  <label>
                    <span className="font-agrandir_bold">Size:</span>
                  </label>
                  <div>
                    <input />
                  </div>
                </div>
                <span className="text-green">Add...</span>
              </div>
            </div>
            {/* Mistakenly placed my button wrongly before styling, so this fix is to prevent restyling */}
            <button className="hidden" ref={submitButtonRef}></button>
          </Form>
          <span className="flex w-full px-4 md:px-16 bg-light_orange rounded-xl py-2 md:py-4 font-agrandir_bold text-dark_orange text-[0.5rem] md:text-[0.875rem]">
            While you have reviewed our policies, you are advised to upload only
            products that are readily available in stock for delivery and remove
            those that are not. Infringing such policy may attract a penalty of
            suspension or disqualification form the market place. To review our
            policies, click here.
          </span>
          <div className="flex w-full flex-row-reverse">
            <button
              onClick={() => submitButtonRef?.current?.click()}
              className="flex bg-orange text-white font-agrandir_bold md:text-base md:text-[0.875rem] md:p-2 p-1 rounded-md text-[0.5rem]"
            >
              <ClipLoader color="#fff" size={"1rem"} loading={isLoading} />
              <span
                className={
                  (isLoading ? "hidden " : "flex ") + " my-[0.25rem] mx-8"
                }
              >
                Save {pageType === "Create" ? "Product" : "Changes"}
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
