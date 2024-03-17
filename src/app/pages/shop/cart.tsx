import default_product_pic from "../../assets/image/mock_product.jpg";

export default function CartPage() {
  const Divider = () => {
    return <div className="bg-ash h-[2px] rounded-full w-full flex "></div>;
  };

  return (
    <>
      <div className="flex w-full px-10 py-4 bg-green text-white font-agrandir_bold text-[1.2rem]">
        <span className="my-auto">Summary/Checkout</span>
      </div>
      <section className="px-10 py-6 flex">
        <div className="flex flex-col gap-4 border-light_green border-2 w-full rounded-xl px-8 py-4 shadow-lg">
          <span className="my-auto font-agrandir_bold text-[1.2rem]">
            Summary
          </span>
          <Divider />
          <div className="flex gap-6 font-agrandir">
            <div
              className="bg-no-repeat min-w-52 h-52 rounded-md bg-cover"
              style={{
                backgroundImage: `url(${default_product_pic})`,
              }}
            ></div>
            <div className="flex flex-col justify-between w-full">
              <div className="flex flex-col gap-2">
                <div className=" flex gap-2">
                  <span>You have ordered:</span>
                  <span>
                    <b className="font-agrandir_bold">2 units</b> of{" "}
                    <b className="font-agrandir_bold">Iphone 13 Mini pouch.</b>
                  </span>
                </div>
                <div className=" flex gap-2">
                  <span>To be delivered to:</span>
                  <span className="font-agrandir_bold">Old site, UNTH.</span>
                </div>
                <div className=" flex gap-2">
                  <span>Expected day of delivery:</span>
                  <span className="font-agrandir_bold">3 February, 2024.</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 -m-2">
                <div className="flex gap-2">
                  <span className="text-right w-28">per Unit price:</span>
                  <span className="font-agrandir_grandheavy text-ash">
                    N3000
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-right w-28">Units:</span>
                  <span className="font-agrandir_grandheavy text-ash">2</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-right w-28">Total Amount:</span>
                  <span className="font-agrandir_grandheavy text-green">
                    N6 000
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="flex bg-green text-white rounded-sm text-[0.875rem] py-2">
                <span className="my-auto mx-10">Checkout</span>
              </button>
              <button className="flex border-2 border-light_green text-light_green rounded-sm text-[0.875rem] py-2 whitespace-nowrap">
                <span className="my-auto mx-6">Edit/Save Cart</span>
              </button>
            </div>
          </div>
          <Divider />
          {/* copy use map later */}
          <div className="flex gap-6 font-agrandir">
            <div
              className="bg-no-repeat min-w-52 h-52 rounded-md bg-cover"
              style={{
                backgroundImage: `url(${default_product_pic})`,
              }}
            ></div>
            <div className="flex flex-col justify-between w-full">
              <div className="flex flex-col gap-2">
                <div className=" flex gap-2">
                  <span>You have ordered:</span>
                  <span>
                    <b className="font-agrandir_bold">2 units</b> of{" "}
                    <b className="font-agrandir_bold">Iphone 13 Mini pouch.</b>
                  </span>
                </div>
                <div className=" flex gap-2">
                  <span>To be delivered to:</span>
                  <span className="font-agrandir_bold">Old site, UNTH.</span>
                </div>
                <div className=" flex gap-2">
                  <span>Expected day of delivery:</span>
                  <span className="font-agrandir_bold">3 February, 2024.</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 -m-2">
                <div className="flex gap-2">
                  <span className="text-right w-28">per Unit price:</span>
                  <span className="font-agrandir_grandheavy text-ash">
                    N3000
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-right w-28">Units:</span>
                  <span className="font-agrandir_grandheavy text-ash">2</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-right w-28">Total Amount:</span>
                  <span className="font-agrandir_grandheavy text-green">
                    N6 000
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="flex bg-green text-white rounded-sm text-[0.875rem] py-2">
                <span className="my-auto mx-10">Checkout</span>
              </button>
              <button className="flex border-2 border-light_green text-light_green rounded-sm text-[0.875rem] py-2 whitespace-nowrap">
                <span className="my-auto mx-6">Edit/Save Cart</span>
              </button>
            </div>
          </div>
          <Divider />
          {/* copy end */}
          <div className="flex justify-between font-agrandir">
            <div className="flex gap-2 my-auto">
              <span className="font-agrandir_bold my-auto">Total:</span>
              <span className="font-agrandir_grandheavy text-green text-[1.5rem] my-auto">
                N12 000
              </span>
            </div>
            <button className="flex bg-green text-white rounded-sm text-[0.875rem] py-2">
              <span className="my-auto mx-10">Checkout All</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
