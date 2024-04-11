import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileDetailsType } from "../../types/profileTypes";
import { ClipLoader } from "react-spinners";
import {
  useGetProfileDetailsQuery,
  useUpdateProfileMutation,
} from "../../api.routes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export default function EditProfilePage() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState<string>();
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth._id);
  const getProfileRes = useGetProfileDetailsQuery({ ownerId: userId });

  // TODO: handle errors from this
  const [updateProfileFn, { isLoading, isSuccess }] =
    useUpdateProfileMutation();
  const [profileData, setProfileData] = useState<Partial<ProfileDetailsType>>({
    brandName: "",
    gender: "Male",
    department: "",
    level: "",
    phoneNumber: "",
  });

  useMemo(() => {
    if (getProfileRes.isSuccess) {
      setProfileData({
        brandName: getProfileRes?.data?.brandName,
        gender: getProfileRes?.data?.gender,
        department: getProfileRes?.data?.department,
        level: getProfileRes?.data?.level,
        phoneNumber: getProfileRes?.data?.phoneNumber,
      });
    }

    if (getProfileRes.isError) {
      setErrorMsg("Could not fetch user data");
    }
  }, [
    getProfileRes?.data?.brandName,
    getProfileRes?.data?.department,
    getProfileRes?.data?.gender,
    getProfileRes?.data?.level,
    getProfileRes?.data?.phoneNumber,
    getProfileRes.isError,
    getProfileRes.isSuccess,
  ]);

  // If the call is successful then update state
  useEffect(() => {
    if (isSuccess) {
      navigate(`/profile/${userId}`);
    }
  }, [dispatch, isSuccess, navigate, userId]);

  const Divider = () => {
    return <div className="bg-ash h-[2px] rounded-full w-full flex "></div>;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateProfileFn({
      id: getProfileRes.data?._id,
      updateBody: { ...profileData },
    });
  };

  return (
    <>
      <div className="flex w-full px-10 py-4 bg-green text-white font-agrandir_bold text-[1.2rem]">
        <span className="my-auto">Vendor’s profile</span>
      </div>
      <section className="md:px-10 md:py-6 flex">
        <div className="flex flex-col gap-2 md:gap-4 md:border-light_green md:border-2 w-full rounded-xl p-4 md:p-8 shadow-lg">
          <span className="my-auto font-agrandir text-green md:text-[1.2rem]">
            Edit Profile details
          </span>
          <Divider />

          <form
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
                <label htmlFor="brandName" className="flex flex-col">
                  <span className="md:text-[1.2rem]">Brand name</span>
                </label>
                <div className="max-w-[30rem]">
                  <input
                    name="brandName"
                    id="brandName"
                    type={"text"}
                    className="md:px-4 px-2 py-2 border-2 w-full flex border-dark_ash_2 text-[0.75rem] md:text-base rounded-md bg-milky_white"
                    onChange={handleChange}
                    value={profileData.brandName}
                  />
                </div>
              </div>

              {/* <div className="flex flex-col gap-4">
                <label htmlFor="userName" className="flex flex-col">
                  <span className="md:text-[1.2rem]">Username</span>
                </label>
                <div className="max-w-[30rem]">
                  <input
                    name="userName"
                    id="userName"
                    type={"text"}
                    value={profileData.userName}
                    onChange={handleChange}
                    className="md:px-4 px-2 py-2 border-2 w-full flex border-dark_ash_2 text-[0.75rem] md:text-base rounded-md bg-milky_white"
                  />
                </div>
              </div> */}

              <div className="flex flex-col gap-2 md:gap-4">
                <label htmlFor="gender" className="flex flex-col">
                  <span className="md:text-[1.2rem]">Gender</span>
                </label>
                <div className="max-w-[30rem]">
                  <select
                    name="gender"
                    id="gender"
                    onChange={(event) =>
                      setProfileData({
                        ...profileData,
                        gender: event.target.value,
                      })
                    }
                    className="md:px-4 px-2 py-2 border-2 w-full flex border-dark_ash_2 text-[0.75rem] md:text-base rounded-md bg-milky_white"
                  >
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 md:gap-4">
                <label htmlFor="department" className="flex flex-col">
                  <span className="md:text-[1.2rem]">Department</span>
                </label>
                <div className="max-w-[30rem]">
                  <input
                    name="department"
                    id="department"
                    type={"text"}
                    className="md:px-4 px-2 py-2 border-2 w-full flex border-dark_ash_2 text-[0.75rem] md:text-base rounded-md bg-milky_white"
                    onChange={handleChange}
                    value={profileData.department}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 md:gap-4">
                <label htmlFor="level" className="flex flex-col">
                  <span className="md:text-[1.2rem]">Level</span>
                </label>
                <div className="max-w-[30rem]">
                  <input
                    name="level"
                    id="level"
                    type={"text"}
                    className="md:px-4 px-2 py-2 border-2 w-full flex border-dark_ash_2 text-[0.75rem] md:text-base rounded-md bg-milky_white"
                    onChange={handleChange}
                    value={profileData.level}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 md:gap-4">
                <label htmlFor="phoneNumber" className="flex flex-col">
                  <span className="md:text-[1.2rem]">Phone number</span>
                </label>
                <div className="max-w-[30rem]">
                  <input
                    name="phoneNumber"
                    id="phoneNumber"
                    type={"text"}
                    className="md:px-4 px-2 py-2 border-2 w-full flex border-dark_ash_2 text-[0.75rem] md:text-base rounded-md bg-milky_white"
                    onChange={handleChange}
                    value={profileData.phoneNumber}
                  />
                </div>
                <div className={errorMsg ? "hidden md:flex " : "hidden "}>
                  <span className="flex mx-auto text-[0.5rem] md:text-[0.75rem] text-light_red">
                    {errorMsg}
                  </span>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col gap-2 md:gap-4">
              <div>
                <label
                  htmlFor="image"
                  className="flex justify-around bg-ash_2 rounded-sm md:w-80 w-full md:h-72 h-40"
                >
                  {profileData.image ? (
                    <img
                      src={URL.createObjectURL(profileData?.image)}
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
            </div> */}
            {/* Mistakenly placed my button wrongly before styling, so this fix is to prevent restyling */}
            <button className="hidden" ref={submitButtonRef}></button>
          </form>
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
                Save {"Changes"}
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
