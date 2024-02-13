import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import profile_pic from "../assets/image/default_profile_pic.png";
import MiniProductCard from "../components/miniProductCard";

export default function ProductPage() {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  function Divide() {
    return <div className="flex h-[0.1rem] w-fill bg-black"></div>;
  }

  return (
    <section className="flex flex-col px-12">
      <span className="flex mx-auto p-2 gap-1">
        <button onClick={() => navigate(-1)} className="font-agrandir">
          {"< Back /"}
        </button>
        <span className="font-agrandir">Phone & PC /</span>
        <span className="font-agrandir_bold">
          iPhone XR Generic black pouch
        </span>
      </span>
      <div className="shadow-lg shadow-dark_ash/50 flex flex-col rounded-md font-agrandir_bold gap-12 mb-10 p-8">
        <div className="flex gap-4 ">
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <div
                className={`w-80 h-full bg-no-repeat bg-cover bg-origin-border bg-[url("https://s3-alpha-sig.figma.com/img/8ddf/9a14/fcf5e27fbce40a84d847549220a52d9a?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k0ki3RcvTWDzavqat6dwyzPW7lKx9NYFYhKqAhb4fQYmQVOMKp7D-1fM~EbP4IrOQkAhSoTcMIM2GGHyztZCMZqzzo44ag7aqT3gavDZVKvVL0mJuuSfahvumk3sg~PNjT7G4XK6GzHTLlu7wYtGPXVBuSg~M1xZFUNSQKClbFx3CQbBAaWB2vC8j5Z7AnstBXNhd-0V6~TZRWAFHWoZqnZGiyan8Glq6mVtW30XC-OSCwSoYFXTB6Mqc79yompvxcmon~ctOsYomiw~yvx1Xiqev0h3l-XwCgLLxYwjYC4AATTNqa7s2l07yLcwSQAhaVhtcNMaMnQ9QZgkR0HsTw__")]`}
              ></div>
            </div>
            <div className="flex flex-col gap-2">
              <div
                className={`w-80 h-full bg-no-repeat bg-cover bg-origin-border bg-[url("https://s3-alpha-sig.figma.com/img/8ddf/9a14/fcf5e27fbce40a84d847549220a52d9a?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k0ki3RcvTWDzavqat6dwyzPW7lKx9NYFYhKqAhb4fQYmQVOMKp7D-1fM~EbP4IrOQkAhSoTcMIM2GGHyztZCMZqzzo44ag7aqT3gavDZVKvVL0mJuuSfahvumk3sg~PNjT7G4XK6GzHTLlu7wYtGPXVBuSg~M1xZFUNSQKClbFx3CQbBAaWB2vC8j5Z7AnstBXNhd-0V6~TZRWAFHWoZqnZGiyan8Glq6mVtW30XC-OSCwSoYFXTB6Mqc79yompvxcmon~ctOsYomiw~yvx1Xiqev0h3l-XwCgLLxYwjYC4AATTNqa7s2l07yLcwSQAhaVhtcNMaMnQ9QZgkR0HsTw__")]`}
              ></div>
              <div
                className={`w-80 h-full bg-no-repeat bg-cover bg-origin-border bg-[url("https://s3-alpha-sig.figma.com/img/8ddf/9a14/fcf5e27fbce40a84d847549220a52d9a?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k0ki3RcvTWDzavqat6dwyzPW7lKx9NYFYhKqAhb4fQYmQVOMKp7D-1fM~EbP4IrOQkAhSoTcMIM2GGHyztZCMZqzzo44ag7aqT3gavDZVKvVL0mJuuSfahvumk3sg~PNjT7G4XK6GzHTLlu7wYtGPXVBuSg~M1xZFUNSQKClbFx3CQbBAaWB2vC8j5Z7AnstBXNhd-0V6~TZRWAFHWoZqnZGiyan8Glq6mVtW30XC-OSCwSoYFXTB6Mqc79yompvxcmon~ctOsYomiw~yvx1Xiqev0h3l-XwCgLLxYwjYC4AATTNqa7s2l07yLcwSQAhaVhtcNMaMnQ9QZgkR0HsTw__")]`}
              ></div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="flex text-[1.5rem] font-agrandir_grandheavy font-bold">
              iPhone XR Generic Black pouch
            </span>
            <span className="flex text-[2rem] font-agrandir_grandheavy font-bold text-green">
              N3 000
            </span>
            <ul className="flex list-disc text-ash px-8 gap-12 font-agrandir">
              <li>Old UNTH, Enugu.</li>
              <li>Posted 4hrs ago.</li>
            </ul>
            <div className="flex flex-col font-agrandir text-[1.2rem] text-ash">
              <h4 className="text-black">Description</h4>
              <p>
                iphone black pouch iphone black pouch iphone black pouch iphone
                black pouch iphone black pouch iphone black pouch iphone black
                pouch
              </p>
              <span>
                Color: <b>Black</b>
              </span>
              <span>Condition: ?</span>
              <span>ID: ?</span>
            </div>
            <div className="flex justify-between font-agrandir">
              <div className="flex gap-4">
                <span>Quantity:</span>
                <div className="flex gap-4 ">
                  <button
                    className="text-[1.5rem] bg-ash/50 rounded-full leading-none w-6 h-6 flex justify-center"
                    onClick={() => setCount(count + 1)}
                  >
                    <span className="my-auto flex pt-[0.1rem] leading-none">
                      +
                    </span>
                  </button>
                  <span>{count}</span>
                  <button
                    className="text-[1.5rem] bg-ash/50 rounded-full leading-none w-6 h-6 flex justify-center"
                    onClick={() => {
                      if (count > 1) setCount(count - 1);
                    }}
                  >
                    <span className="my-auto flex leading-none">-</span>
                  </button>
                </div>
              </div>
              <span className="rounded-full text-[1.2rem] p-2 bg-ash/50">
                <FaHeart color="#FF6161" />
              </span>
            </div>
            <div className="flex gap-4 mx-auto">
              <button className="px-4 py-2 text-white font-agrandir_bold rounded bg-light_green w-32">
                Buy Now
              </button>
              <button className="px-4 py-2 text-light_green font-agrandir_bold rounded border border-2 border-light_green w-32 ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col border border-green rounded-md gap-2 p-2 w-full">
            <span className="text-green">About Vendor</span>
            <Divide />
            <div className="flex flex-col">
              <img className="w-36" src={profile_pic} alt="Mahley Ventures" />
              <span className="text-green">Mahley Ventures</span>
              <div className="flex flex-col font-agrandir">
                <span>
                  <span>Rating:</span>
                  <span>5</span>
                </span>
                <span>
                  <span>Reviews:</span>
                  <span>38</span>
                </span>
              </div>
              <Link className="font-agrandir text-green" to={"#"}>
                Full Profile {">>"}
              </Link>
            </div>
          </div>
          <div className="flex flex-col border border-green rounded-md gap-2 p-2">
            <span className="text-green">Related Products</span>
            <Divide />
            <div className="flex gap-2">
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
