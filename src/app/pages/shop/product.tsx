import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MiniProductCard from "../../components/cards/miniProductCard";

export default function ProductPage() {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state;

  function Divide() {
    return <div className="flex h-[0.1rem] w-fill bg-black"></div>;
  }

  return (
    <section className="flex flex-col md:px-12 p-4">
      <span className="flex mx-auto md:p-2 p-1 md:gap-1 gap-0.5 flex-nowrap md:text-base text-[0.5rem]">
        <button onClick={() => navigate(-1)} className="font-agrandir">
          {"< Back /"}
        </button>
        <span className="font-agrandir">
          {product.category || "Phone & PC"} /
        </span>
        <span className="font-agrandir_bold">{product.name}</span>
      </span>
      <div className="shadow-lg shadow-dark_ash/50 flex flex-col rounded-md font-agrandir_bold md:gap-12 gap-4 mb-10 md:p-8 p-4">
        <div className="flex md:flex-row flex-col md:gap-4 gap-2 ">
          <div className="flex md:gap-2 gap-1 md:h-[30rem] h-44">
            <div className="flex w-1/2 md:w-full flex-col gap-1 md:gap-2">
              <div
                style={{
                  backgroundImage: "url(" + product.image_url + ")",
                }}
                className={`md:w-80 h-full bg-center bg-no-repeat bg-cover bg-origin-border`}
              ></div>
            </div>
            <div className="flex w-1/2 md:w-full flex-col gap-2">
              <div
                style={{
                  backgroundImage: "url(" + product.image_url + ")",
                }}
                className={`md:w-80 h-full bg-no-repeat bg-cover bg-origin-border`}
              ></div>
              <div
                style={{
                  backgroundImage: "url(" + product.image_url + ")",
                }}
                className={`md:w-80 h-full bg-no-repeat bg-cover bg-origin-border`}
              ></div>
            </div>
          </div>
          <div className="flex flex-col gap-1 md:gap-4">
            <span className="flex md:text-[1.5rem] text-[1rem] font-agrandir_grandheavy font-bold">
              {product.name}
            </span>
            <span className="flex md:text-[2rem] text-[1.2rem] font-agrandir_grandheavy font-bold text-green">
              N{product.price}
            </span>
            <ul className="flex list-disc text-ash px-2 md:px-8 gap-4 md:gap-12 md:text-base text-[0.75rem] font-agrandir">
              <li>{product.location}.</li>
              <li>Posted 4hrs ago.</li>
            </ul>
            <div className="flex flex-col font-agrandir md:text-[1.2rem] text-[0.875rem] text-ash">
              <h4 className="text-black">Description</h4>
              <p>{product.description}</p>
              {/* <span>
                Color: <b>Black</b>
              </span>
              <span>Condition: ?</span>
              <span>ID: ?</span> */}
            </div>
            <div className="flex justify-between font-agrandir">
              <div className="flex md:text-base text-[0.75rem] gap-2 md:gap-4">
                <span>Quantity:</span>
                <div className="flex gap-2 md:gap-4 ">
                  <button
                    className="text-[1rem] md:text-[1.5rem] bg-ash/50 rounded-full leading-none w-4 md:w-6 h-4 md:h-6 flex justify-center"
                    onClick={() => setCount(count + 1)}
                  >
                    <span className="my-auto flex pt-[0.1rem] leading-none">
                      +
                    </span>
                  </button>
                  <span>{count}</span>
                  <button
                    className="text-[1rem] md:text-[1.5rem] bg-ash/50 rounded-full leading-none w-4 md:w-6 h-4 md:h-6 flex justify-center"
                    onClick={() => {
                      if (count > 1) setCount(count - 1);
                    }}
                  >
                    <span className="my-auto flex leading-none">-</span>
                  </button>
                </div>
              </div>
              <span className="rounded-full text-[0.875rem] md:text-[1.2rem] p-1 md:p-2 bg-ash/50">
                <FaHeart color="#FF6161" />
              </span>
            </div>
            <div className="flex gap-2 md:gap-4 mx-auto">
              <button className="px-2 md:px-4 md:py-2 py-1 md:text-base text-[0.75rem] text-white font-agrandir_bold rounded bg-light_green w-28 md:w-32">
                Buy Now
              </button>
              <button className="px-2 md:px-4 md:py-2 py-1 md:text-base text-[0.75rem] text-light_green font-agrandir_bold rounded border border-2 border-light_green w-28 md:w-32 ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-8">
          <div className="flex flex-col border border-green rounded-md gap-2 p-2 w-full">
            <span className="text-green md:text-base text-[0.75rem]">
              About Vendor
            </span>
            <Divide />
            <div className="flex md:flex-col gap-4 md:gap-0.5">
              <img
                className="md:w-36 w-28"
                src={product.vendor.image}
                alt={product.vendor.store_name}
              />
              <div className="">
                <span className="text-green md:text-base text-[0.75rem]">
                  {product.vendor.store_name}
                </span>
                <div className="flex flex-col font-agrandir md:text-base text-[0.75rem]">
                  <span>
                    <span>Rating:</span>
                    <span>5</span>
                  </span>
                  <span>
                    <span>Reviews:</span>
                    <span>38</span>
                  </span>
                </div>
                <Link
                  className="font-agrandir text-green md:text-base text-[0.75rem]"
                  to={"#"}
                >
                  Full Profile {">>"}
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-green rounded-md gap-2 p-2">
            <span className="text-green md:text-base text-[0.75rem]">
              Related Products
            </span>
            <Divide />
            <div className="flex gap-2 overflow-x-scroll">
              {Array(4)
                .fill({
                  name: "iPhone XR Generic Black pouch",
                  location: "Old UNTH, Enugu.",
                })
                .map((item, index) => {
                  return (
                    <MiniProductCard
                      key={index}
                      name={item.name}
                      location={item.location}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
