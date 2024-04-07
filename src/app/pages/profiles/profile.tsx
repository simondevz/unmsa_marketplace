import { useEffect, useState } from "react";
import default_image_url from "../../assets/image/default_profile_pic.png";
import ProductRow from "../../components/productRow";
import { useNavigate, useParams } from "react-router-dom";
import { useLazyGetProfileDetailsQuery } from "../../api.routes";
import { useAppSelector } from "../../redux/hooks";
import Loading from "../../components/loading";

export default function ProfilePage() {
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const authId = useAppSelector((state) => state.auth._id);
  const [current_tab, setCurrent_tab] = useState<string>("tab_1");

  const navigate = useNavigate();
  const { userId } = useParams();
  const [getProfileDetails, { data, isLoading }] =
    useLazyGetProfileDetailsQuery();

  useEffect(() => {
    if (accessToken) getProfileDetails({ ownerId: userId });
  }, [accessToken, getProfileDetails, userId]);

  console.log("data", data);

  const handleEditProfile = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => navigate("edit");

  const handleDeactivateProfile = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => navigate("edit");

  const Divider = ({ className }: { className?: string }) => {
    return (
      <div
        className={
          (className ? className : "") +
          " bg-ash/70 h-px md:h-[2px] rounded-full w-full flex "
        }
      ></div>
    );
  };

  const InfoSpan = ({ title, value }: { title: string; value: string }) => {
    return (
      <div className="flex md:gap-4 text-[0.75rem]">
        <span className="md:w-[5rem] lg:w-28 w-20 flex font-agrandir_bold text-green">
          {title}:
        </span>
        <span className="flex font-agrandir">{value}</span>
      </div>
    );
  };

  return (
    <>
      <div className="flex w-full px-10 py-4 bg-green text-white font-agrandir_bold text-[1.2rem]">
        <span className="my-auto">Vendor's Profile</span>
      </div>

      {!data?.email || isLoading ? (
        <Loading />
      ) : (
        <section className="md:px-10 md:py-6 flex">
          <div className="flex flex-col md:gap-4 border-light_green md:border-2 w-full md:rounded-xl lg:p-8 md:p-6 px-6 py-2 md:shadow-lg">
            <div className="flex flex-col md:flex-row md:gap-6 gap-2 justify-between w-full">
              <div className="flex justify-between">
                <div
                  className="bg-no-repeat bg-cover lg:h-52 lg:w-52 md:h-40 md:w-40 flex md:rounded-sm rounded-full h-24 w-24"
                  style={{
                    backgroundImage: "url(" + default_image_url + ")",
                  }}
                ></div>
                <div
                  className={
                    (authId === data?.ownerId ? "flex " : "hidden ") +
                    " md:hidden gap-2 flex-col"
                  }
                >
                  <button
                    onClick={handleEditProfile}
                    className={
                      " flex bg-light_green text-white whitespace-nowrap font-agrandir_bold text-[0.75rem] py-[0.4rem] rounded-md w-24"
                    }
                  >
                    <span className="mx-auto my-auto">Edit Profile</span>
                  </button>
                  <button
                    onClick={handleDeactivateProfile}
                    className={
                      " flex bg-light_red text-white whitespace-nowrap font-agrandir_bold text-[0.75rem] py-[0.4rem] rounded-md w-24"
                    }
                  >
                    <span className="mx-auto my-auto">Deactivate</span>
                  </button>
                </div>
              </div>
              <div className="flex w-full flex-col md:gap-6 gap-2">
                <div className="flex flex-col gap-[0.2rem] md:gap-4">
                  <InfoSpan
                    title="Brand Name"
                    value={data?.brandName as string}
                  />
                  {/* <InfoSpan title="Owner" value={data!.}/> */}
                  <InfoSpan title="Location" value={data?.location as string} />
                  <InfoSpan title="Gender" value={data?.gender as string} />
                  <InfoSpan
                    title="Department"
                    value={data?.department as string}
                  />
                  <InfoSpan title="Level" value={data?.level as string} />
                  <InfoSpan
                    title="Contact Info"
                    value={
                      ((data?.phoneNumber as string) +
                        ", " +
                        data?.email) as string
                    }
                  />
                </div>
                <div
                  className={
                    (authId === data?.ownerId ? "hidden " : "flex ") +
                    " justify-between lg:justify-start md:gap-6"
                  }
                >
                  <button
                    className={
                      " flex bg-light_green text-white font-agrandir_bold text-[0.75rem] rounded-md md:py-2 md:px-2 py-[0.3rem] w-20 md:w-32"
                    }
                  >
                    <span className="mx-auto my-auto text-nowrap flex flex-nowrap gap-1">
                      Contact
                    </span>
                  </button>
                  <button
                    className={
                      " flex border-2 border-light_green text-light_green font-agrandir_bold text-[0.75rem] rounded-md md:py-2 md:px-2 py-[0.3rem] w-20 md:w-32"
                    }
                  >
                    <span className="mx-auto my-auto text-nowrap flex flex-nowrap gap-1">
                      Rate <span className="hidden md:flex">Vendor</span>
                    </span>
                  </button>
                  <button
                    className={
                      " flex border-2 border-light_red text-light_red font-agrandir_bold text-[0.75rem] rounded-md md:py-2 md:px-2 py-[0.3rem] w-20 md:w-32"
                    }
                  >
                    <span className="mx-auto my-auto text-nowrap flex flex-nowrap gap-1">
                      Report <span className="hidden md:flex">Vendor</span>
                    </span>
                  </button>
                </div>
              </div>
              <div className={authId === data?.ownerId ? "block " : "hidden "}>
                <button
                  onClick={handleEditProfile}
                  className={
                    "hidden md:flex bg-light_green text-white whitespace-nowrap font-agrandir_bold text-[0.875rem] px-2 py-2 md:-ml-32 rounded-sm"
                  }
                >
                  <span className="mx-4 my-auto">Edit Profile</span>
                </button>
                {/* <button
                onClick={handleDeactivateProfile}
                className={
                  "hidden md:flex bg-light_green text-white whitespace-nowrap font-agrandir_bold md:text-base text-[0.875rem] md:p-2 p-1 rounded-sm"
                }
              >
                <span className="mx-4 my-auto">Deactivate</span>
              </button> */}
              </div>
            </div>
            <Divider />
            <div className="flex flex-col gap-4">
              <div className="flex justify-between my-4 -mx-2 md:mx-0">
                <button
                  onClick={() => setCurrent_tab("tab_1")}
                  className={
                    (current_tab === "tab_1"
                      ? "bg-darker_lemon text-white "
                      : "bg-transparent hover:bg-ash/30x   ") +
                    " flex whitespace-nowrap font-agrandir_bold md:text-base text-[0.75rem] md:p-2 px-3 py-2 rounded-full"
                  }
                >
                  <span className="md:mx-6 my-auto">Services/Products</span>
                </button>
                <button
                  onClick={() => setCurrent_tab("tab_2")}
                  className={
                    (current_tab === "tab_2"
                      ? "bg-darker_lemon text-white "
                      : "bg-transparent hover:bg-ash/30x   ") +
                    " flex whitespace-nowrap font-agrandir_bold md:text-base text-[0.75rem] md:p-2 px-3 py-2 rounded-full"
                  }
                >
                  <span className="md:mx-12 my-auto">Reviews</span>
                </button>
                <button
                  onClick={() => setCurrent_tab("tab_3")}
                  className={
                    (current_tab === "tab_3"
                      ? "bg-darker_lemon text-white "
                      : "bg-transparent hover:bg-ash/30x   ") +
                    " flex whitespace-nowrap font-agrandir_bold md:text-base text-[0.75rem] md:p-2 px-3 py-2 rounded-full"
                  }
                >
                  <span className="md:mx-6 my-auto">Related Products</span>
                </button>
              </div>
              <Divider className="flex md:hidden -mt-4" />
              <div
                className={
                  (current_tab === "tab_1" ? "flex " : "hidden ") +
                  "border border-green flex-col rounded-md px-4 py-3"
                }
              >
                {/* <ProductRow /> */}
                <div className="flex flex-row-reverse">
                  <button
                    onClick={() => navigate("/shop/product/create")}
                    className={
                      (authId === data?.ownerId ? "flex " : "hidden ") +
                      " w-36 bg-darker_lemon rounded-md py-2 text-[0.75rem] md:text-[0.875rem]"
                    }
                  >
                    <span className="flex mx-auto font-agrandir_bold text-white">
                      Add New Product
                    </span>
                  </button>
                </div>
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
                {/* <ProductRow /> */}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
