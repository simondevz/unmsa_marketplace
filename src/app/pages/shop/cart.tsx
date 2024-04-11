import { useEffect, useState } from "react";
import { CartObjectType } from "../../types/shopTypes";
import CartProductCard from "../../components/cards/cartProductCard";
import { getCart } from "../../utils/localStorage";
import { useAppSelector } from "../../redux/hooks";

export default function CartPage() {
  const pricesObj = useAppSelector((state) => state.cart.prices);
  const [cart, setCart] = useState<CartObjectType[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const pricesList = Object.values(pricesObj);
    let sum = 0;
    for (let index = 0; index < pricesList.length; index++) {
      sum += pricesList[index];
    }
    setTotal(sum);
  }, [pricesObj]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const Divider = () => {
    return <div className="bg-ash h-[2px] rounded-full w-full flex "></div>;
  };

  return (
    <>
      <div className="flex w-full px-10 py-4 bg-green text-white font-agrandir_bold text-[1.2rem]">
        <span className="my-auto">Cart</span>
      </div>
      <section className="md:px-10 md:py-6 flex">
        <div className="flex flex-col gap-4 md:border-light_green md:border-2 w-full rounded-xl px-4 md:px-8 py-2 md:py-4 shadow-lg">
          <span className="my-auto font-agrandir_bold md:text-[1.2rem]">
            Cart
          </span>
          <Divider />
          {cart.map((item, index) => {
            return (
              <>
                <CartProductCard
                  key={index}
                  productId={item.productId}
                  quantity={item.quantity}
                />
              </>
            );
          })}
          <div className="flex justify-between font-agrandir">
            <div className="flex gap-2 my-auto">
              <span className="font-agrandir_bold md:text-base text-[0.875rem] my-auto">
                Total:
              </span>
              <span className="font-agrandir_grandheavy text-green text-[0.875rem] md:text-[1.5rem] my-auto">
                N{total}
              </span>
            </div>
            <button className="flex bg-green text-white rounded-sm md:text-[0.875rem] text-[0.75rem] py-2">
              <span className="my-auto md:mx-10 mx-4">Checkout All</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
