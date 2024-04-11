import { useEffect, useMemo, useState } from "react";
import { useGetProductByIdQuery } from "../../api.routes";
import { CartObjectType } from "../../types/shopTypes";
import Loading from "../loading";
import { ProductType } from "../../types/productTypes";
import { removeFromCart, updateCartItem } from "../../utils/localStorage";
import { useAppDispatch } from "../../redux/hooks";
import { updateCartPrices } from "../../redux/slice/cartSlice";

export default function CartProductCard({
  productId,
  quantity,
}: CartObjectType) {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState<number>(quantity);
  const { data, isLoading, isSuccess } = useGetProductByIdQuery({
    product_id: productId,
  });

  const [showCard, setShowCard] = useState<boolean>(true);
  const [productData, setProductData] = useState<Partial<ProductType>>({
    image_url: "",
    name: "",
    quantity: 0,
    price: 0,
  });

  useMemo(() => {
    if (isSuccess) {
      setProductData({
        image_url: data[0].image_url,
        name: data[0].name,
        quantity: data[0].quantity,
        price: data[0].price,
      });
    }
  }, [data, isSuccess]);

  useEffect(() => {
    dispatch(
      updateCartPrices({ productId, price: (productData.price || 0) * count })
    );
  }, [count, dispatch, productData.price, productId]);

  const Divider = () => {
    return (
      <div
        className={
          (showCard ? "block " : "hidden ") +
          "bg-ash h-[2px] rounded-full w-full flex "
        }
      ></div>
    );
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isSuccess ? (
        <>
          <div
            className={
              (showCard ? "flex " : "hidden ") +
              " md:gap-6 justify-between flex-row-reverse md:flex-row font-agrandir"
            }
          >
            <div
              className="bg-no-repeat md:min-w-52 min-w-28 md:h-52 h-28 bg-center rounded-md bg-cover"
              style={{
                backgroundImage: `url(${productData.image_url})`,
              }}
            ></div>
            <div className="flex flex-col justify-between content-end  w-full">
              <div className="flex flex-col md:text-base text-[0.75rem] gap-2 ">
                <div className=" flex gap-2">
                  <span>Product name:</span>
                  <span>
                    <b className="font-agrandir_bold">{productData?.name}</b>
                  </span>
                </div>
                <div className=" flex gap-2">
                  <span>Quantity left:</span>
                  <span className="font-agrandir_bold">
                    {productData?.quantity}
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:text-base text-[0.75rem] gap-2 my-2 md:-m-2">
                <div className="flex gap-2">
                  <span className="text-left md:text-right w-20">
                    per Unit price:
                  </span>
                  <span className="font-agrandir_grandheavy text-ash">
                    N{productData?.price}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-left md:text-right w-20">Units:</span>
                  <div className="flex gap-2 lg:gap-4 ">
                    <button
                      className="text-[1rem] lg:text-[1.5rem] bg-ash/50 rounded-full leading-none w-4 lg:w-6 h-4 lg:h-6 flex justify-center"
                      onClick={() => {
                        if (count < (productData?.quantity || 0) + 1) {
                          updateCartItem(productId, count + 1);
                          setCount(count + 1);
                        }
                      }}
                    >
                      <span className="my-auto flex pt-[0.1rem] leading-none">
                        +
                      </span>
                    </button>
                    <span className="font-agrandir_grandheavy text-ash">
                      {count}
                    </span>
                    <button
                      className="text-[1rem] lg:text-[1.5rem] bg-ash/50 rounded-full leading-none w-4 lg:w-6 h-4 lg:h-6 flex justify-center"
                      onClick={() => {
                        if (count > 1) {
                          updateCartItem(productId, count - 1);
                          setCount(count - 1);
                        }
                      }}
                    >
                      <span className="my-auto flex leading-none">-</span>
                    </button>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="text-left md:text-right w-20">
                    Total Amount:
                  </span>
                  <span className="font-agrandir_grandheavy text-green">
                    N{(productData?.price || 0) * count}
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col gap-2">
              <button className="flex bg-green text-white rounded-sm text-[0.875rem] py-2">
                <span className="my-auto mx-auto">Checkout</span>
              </button>
              <button
                onClick={() => {
                  setShowCard(false);
                  dispatch(updateCartPrices({ productId, price: 0 }));
                  removeFromCart(productId);
                }}
                className="flex border-2 border-light_green text-light_green rounded-sm text-[0.875rem] py-2 whitespace-nowrap"
              >
                <span className="my-auto mx-6">Remove from Cart</span>
              </button>
            </div>
          </div>
          <Divider />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
