import { useRef, useState } from "react";
import { Form, useLocation } from "react-router-dom";
import { ProductType } from "../../types/productTypes";
import { useCreateProductMutation } from "../../api.routes";
import { ClipLoader } from "react-spinners";

export default function EditProductPage() {
  const location = useLocation();
  const pathname = location.pathname;
  const pageType = pathname.includes("/create") ? "Create" : "Edit";

  const submitButtonRef = useRef<HTMLButtonElement>(null);
  const [creatProductFn, { data, isLoading }] = useCreateProductMutation();
  const [productData, setProductData] = useState<Partial<ProductType>>({
    name: "",
    price: 0.0,
    image: null,
    description: "",
    quantity: 0,
  });

  // todo: handle redirection after creating product

  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductData({
      ...productData,
      image: event.target.files?.[0],
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(); // todo: handle errors
    formData.append("name", productData.name as string);
    formData.append("description", productData.description as string);
    formData.append("image", productData.image);
    formData.append("price", String(productData.price));
    formData.append("quantity", String(productData.quantity));
    creatProductFn(formData);
  };

  const Divider = () => {
    return <div className="bg-ash h-[2px] rounded-full w-full flex "></div>;
  };
  console.log(data);

  return (
    <>
      <div className="flex w-full px-10 py-4 bg-green text-white font-agrandir_bold text-[1.2rem]">
        <span className="my-auto">{pageType} Product</span>
      </div>
      <section className="px-10 py-6 flex">
        <div className="flex flex-col gap-4 border-light_green border-2 w-full rounded-xl p-8 shadow-lg">
          <span className="my-auto font-agrandir text-green text-[1.2rem]">
            {pageType} Product
          </span>
          <Divider />

          <Form
            onSubmit={handleSubmit}
            className="flex gap-10 p-8 w-full font-agrandir shadow-lg rounded-md"
          >
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-col gap-4">
                <label htmlFor="name" className="flex flex-col">
                  <span className="text-[1.2rem]">Product name</span>
                </label>
                <div className="max-w-[30rem]">
                  <input
                    name="name"
                    id="name"
                    type={"text"}
                    className="px-4 py-2 border-2 w-full flex border-dark_ash_2 rounded-md bg-milky_white"
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
                  <span className="text-[1.2rem]">Price (NGN)</span>
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
                    className="px-4 py-2 border-2 w-full flex border-dark_ash_2 rounded-md bg-milky_white"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="quantity" className="flex flex-col">
                  <span className="text-[1.2rem]">
                    Number in stock (0-1000)
                  </span>
                </label>
                <div className="max-w-[30rem] flex gap-4">
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
                  <span className="text-[1.2rem]">Description</span>
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
                    className="px-4 py-2 border-2 w-full flex border-dark_ash_2 rounded-md bg-milky_white"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="image"
                  className="flex justify-around bg-ash_2 rounded-sm w-80 h-72"
                >
                  {productData.image ? (
                    <img
                      src={URL.createObjectURL(productData?.image)}
                      alt="product preview"
                    />
                  ) : (
                    <span className="flex font-agrandir_bold text-[0.875rem] text-center w-36 my-auto">
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

              <div className="flex flex-col gap-4">
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
          <span className="flex w-full px-16 bg-light_orange rounded-xl py-4 font-agrandir_bold text-dark_orange text-[0.875rem]">
            While you have reviewed our policies, you are advised to upload only
            products that are readily available in stock for delivery and remove
            those that are not. Infringing such policy may attract a penalty of
            suspension or disqualification form the market place. To review our
            policies, click here.
          </span>
          <div className="flex w-full flex-row-reverse">
            <button
              onClick={() => submitButtonRef?.current?.click()}
              className="flex bg-orange text-white font-agrandir_bold md:text-base text-[0.875rem] md:p-2 p-1 rounded-md text-[0.75rem]"
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
