import { useState } from "react";
import default_image_url from "../../assets/image/default_profile_pic.png";
import ProductRow from "../../components/productRow";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [current_tab, setCurrent_tab] = useState<string>("tab_1");
  const navigate = useNavigate();

  const Divider = () => {
    return <div className="bg-ash h-[2px] rounded-full w-full flex "></div>;
  };

  return (
    <>
      <div className="flex w-full px-10 py-4 bg-green text-white font-agrandir_bold text-[1.2rem]">
        <span className="my-auto">Vendor's Profile</span>
      </div>
      <section className="px-10 py-6 flex">
        <div className="flex flex-col gap-4 border-light_green border-2 w-full rounded-xl p-8 shadow-lg">
          <div className="flex gap-6 justify-between w-full">
            <div>
              <div
                className="bg-no-repeat bg-cover h-52 w-52 flex rounded-sm"
                style={{
                  backgroundImage: "url(" + default_image_url + ")",
                }}
              ></div>
            </div>
            <div className="flex w-full flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <span className="w-28 flex font-agrandir_bold text-green">
                    Brand Name:
                  </span>
                  <span className="flex font-agrandir">Mahley</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-28 flex font-agrandir_bold text-green">
                    Owner:
                  </span>
                  <span className="flex font-agrandir">Emmanuel Emmanuel</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-28 flex font-agrandir_bold text-green">
                    Location:
                  </span>
                  <span className="flex font-agrandir">
                    Old site, UNTH, Enugu.
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="w-28 flex font-agrandir_bold text-green">
                    Gender:
                  </span>
                  <span className="flex font-agrandir">M</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-28 flex font-agrandir_bold text-green">
                    Department:
                  </span>
                  <span className="flex font-agrandir">Medicine</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-28 flex font-agrandir_bold text-green">
                    Level:
                  </span>
                  <span className="flex font-agrandir">500</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-28 flex font-agrandir_bold text-green">
                    Contact Info:
                  </span>
                  <span className="flex font-agrandir">
                    08000000000, mahley@email.com
                  </span>
                </div>
              </div>
              <div className="flex gap-6">
                <button
                  className={
                    " flex bg-light_green text-white font-agrandir_bold md:text-base text-[0.875rem] md:p-2 p-1 rounded-sm"
                  }
                >
                  <span className="mx-10 my-auto">Contact</span>
                </button>
                <button
                  className={
                    " flex px-16 border-2 border-light_green text-light_green font-agrandir_bold md:text-base text-[0.875rem] md:p-2 p-1 rounded-sm"
                  }
                >
                  <span className="mx-6 my-auto">Rate Vendor</span>
                </button>
                <button
                  className={
                    " flex px-16 border-2 border-light_red text-light_red font-agrandir_bold md:text-base text-[0.875rem] md:p-2 p-1 rounded-sm"
                  }
                >
                  <span className="mx-4 my-auto">Report Vendor</span>
                </button>
              </div>
            </div>
            <div>
              <button
                onClick={() => navigate("edit")}
                className={
                  " flex bg-light_green text-white whitespace-nowrap font-agrandir_bold md:text-base text-[0.875rem] md:p-2 p-1 rounded-sm"
                }
              >
                <span className="mx-4 my-auto">Edit Profile</span>
              </button>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col gap-4">
            <div className="flex justify-around">
              <button
                onClick={() => setCurrent_tab("tab_1")}
                className={
                  (current_tab === "tab_1"
                    ? "bg-green text-white "
                    : "bg-transparent hover:bg-ash/30x   ") +
                  " flex whitespace-nowrap font-agrandir_bold md:text-base text-[0.875rem] md:p-2 p-1 rounded-sm"
                }
              >
                <span className="mx-6 my-auto">Services/Products</span>
              </button>
              <button
                onClick={() => setCurrent_tab("tab_2")}
                className={
                  (current_tab === "tab_2"
                    ? "bg-green text-white "
                    : "bg-transparent hover:bg-ash/30x   ") +
                  " flex whitespace-nowrap font-agrandir_bold md:text-base text-[0.875rem] md:p-2 p-1 rounded-sm"
                }
              >
                <span className="mx-12 my-auto">Reviews</span>
              </button>
              <button
                onClick={() => setCurrent_tab("tab_3")}
                className={
                  (current_tab === "tab_3"
                    ? "bg-green text-white "
                    : "bg-transparent hover:bg-ash/30x   ") +
                  " flex whitespace-nowrap font-agrandir_bold md:text-base text-[0.875rem] md:p-2 p-1 rounded-sm"
                }
              >
                <span className="mx-6 my-auto">Related Products</span>
              </button>
            </div>
            <div
              className={
                (current_tab === "tab_1" ? "" : "hidden ") +
                "border border-green rounded-md px-4 py-3"
              }
            >
              <ProductRow />
            </div>
            <div
              className={
                (current_tab === "tab_2" ? "" : "hidden ") +
                "border border-green rounded-md px-4 py-3"
              }
            >
              <span>No Reviews Yet</span>
            </div>
            <div
              className={
                (current_tab === "tab_3" ? "" : "hidden ") +
                "border border-green rounded-md px-4 py-3"
              }
            >
              <ProductRow />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
