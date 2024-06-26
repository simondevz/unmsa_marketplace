import { useEffect, useMemo, useRef, useState } from "react";
import { ProfileDetailsType } from "../../types/profileTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useCreateProfileMutation } from "../../api.routes";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { updateCurrentUserProfile } from "../../redux/slice/profileSlice";
import { ClipLoader } from "react-spinners";

export default function CreateProfilePage() {
  const userId = useAppSelector((state) => state.auth._id);
  const [createProfileFn, { data, isSuccess, isLoading }] = // TODO: error handling
    useCreateProfileMutation();
  const [profileData, setProfileData] = useState<Partial<ProfileDetailsType>>({
    email: "",
    brandName: "",
    gender: "Male",
    department: "",
    level: "",
    location: "",
    image: null,
    phoneNumber: "",
  });

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useAppDispatch();
  const redirectUrl = location.state?.redirectUrl;
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  // Update the signup data fron the values in our url
  useMemo(() => {
    const email = searchParams.get("email");
    if (email) {
      setProfileData((prev) => {
        return {
          ...prev,
          email,
        };
      });
    }
  }, [searchParams]);

  // If the call is successful then update state and redirect to redirecturl
  useEffect(() => {
    if (isSuccess && data?._id) {
      dispatch(updateCurrentUserProfile(data));
      navigate(redirectUrl ? redirectUrl : "/");
    }
  }, [data, dispatch, isSuccess, navigate, redirectUrl]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({
      ...profileData,
      image: event.target.files?.[0],
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (!userId) throw new Error("Please Log in");

    const formData = new FormData();
    // Error checks?
    formData.append("brandName", profileData.brandName as string);
    formData.append("department", profileData.department as string);
    formData.append("gender", String(profileData.gender));
    formData.append("image", profileData.image);
    formData.append("email", String(profileData.email));
    formData.append("location", String(profileData.location));
    formData.append("level", String(profileData.level));
    formData.append("phoneNumber", String(profileData.phoneNumber));
    createProfileFn(formData);
  };

  // TODO: add value to input
  return (
    <section className="flex flex-col gap-4 md:gap-6 py-4 md:py-6 px-4 text-[0.875rem] md:text-base md:px-12">
      <div className="flex px-4 md:px-10 py-2 md:py-8 bg-lighter_green rounded-lg">
        <span className="text-dark_green text-[0.75rem] md:text-base font-agrandir_bold my-auto">
          To preserve authenticity on the marketplace, your identity details are
          required to sign up.
        </span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 md:gap-6 shadow-lg rounded-lg p-4 md:p-6"
      >
        <span className="text-green font-agrandir_bold text-[1rem] md:text-[1.5rem]">
          Input profile details
        </span>
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
                Upload a profile image 200*200px
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

        {!searchParams.get("email") ? (
          <div className="flex flex-col px-2 md:px-4 gap-2 md:w-3/5 max-w-[20rem] md:max-w-full font-agrandir">
            <label htmlFor="email" className="font-agrandir">
              <span>Email address</span>
            </label>
            <input
              type={"text"}
              name="email"
              id="email"
              onChange={handleChange}
              className="border-2 border-dark_ash_2 bg-milky_white p-2 rounded-md outline-none w-full"
            />
          </div>
        ) : (
          <></>
        )}

        <div className="flex flex-col px-2 md:px-4 gap-2 md:w-3/5 max-w-[20rem] md:max-w-full font-agrandir">
          <label htmlFor="brandName" className="font-agrandir">
            <span>Brand name</span>
          </label>
          <input
            type={"text"}
            name="brandName"
            id="brandName"
            onChange={handleChange}
            className="border-2 border-dark_ash_2 bg-milky_white p-2 rounded-md outline-none w-full"
          />
        </div>
        <div className="flex flex-col px-2 md:px-4 gap-2 md:w-3/5 max-w-[20rem] md:max-w-full font-agrandir">
          <label htmlFor="gender" className="font-agrandir">
            <span>Gender</span>
          </label>
          <select
            name="gender"
            id="gender"
            onChange={(event) =>
              setProfileData({
                ...profileData,
                gender: event.target.value,
              })
            }
            className="border-2 border-dark_ash_2 bg-milky_white p-2 rounded-md outline-none w-full"
          >
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
          </select>
        </div>
        <div className="flex flex-col px-2 md:px-4 gap-2 md:w-3/5 max-w-[20rem] md:max-w-full font-agrandir">
          <label htmlFor="department" className="font-agrandir">
            <span>Department</span>
          </label>
          <input
            type={"text"}
            name="department"
            onChange={handleChange}
            id="department"
            className="border-2 border-dark_ash_2 bg-milky_white p-2 rounded-md outline-none w-full"
          />
        </div>
        <div className="flex flex-col px-2 md:px-4 gap-2 md:w-3/5 max-w-[20rem] md:max-w-full font-agrandir">
          <label htmlFor="level" className="font-agrandir">
            <span>Level</span>
          </label>
          <input
            type={"text"}
            name="level"
            onChange={handleChange}
            id="level"
            className="border-2 border-dark_ash_2 bg-milky_white p-2 rounded-md outline-none w-full"
          />
        </div>
        <div className="flex flex-col px-2 md:px-4 gap-2 md:w-3/5 max-w-[20rem] md:max-w-full font-agrandir">
          <label htmlFor="location" className="font-agrandir">
            <span>Location</span>
          </label>
          <input
            type={"text"}
            name="location"
            onChange={handleChange}
            id="location"
            className="border-2 border-dark_ash_2 bg-milky_white p-2 rounded-md outline-none w-full"
          />
        </div>
        <div className="flex flex-col px-2 md:px-4 gap-2 md:w-3/5 max-w-[20rem] md:max-w-full font-agrandir">
          <label htmlFor="phoneNumber" className="font-agrandir">
            Phone Number
          </label>
          <input
            type={"text"}
            name="phoneNumber"
            onChange={handleChange}
            id="phoneNumber"
            className="border-2 border-dark_ash_2 bg-milky_white p-2 rounded-md outline-none w-full"
          />
        </div>
        {/* Mistakenly placed my button wrongly before styling, so this fix is to prevent restyling */}
        <button className="hidden" ref={submitButtonRef}></button>
      </form>
      <div className="flex flex-row-reverse px-2 md:px-4">
        <button
          disabled={isLoading}
          onClick={() => {
            submitButtonRef?.current?.click();
          }}
          className="text-center px-6 md:px-8 py-2 md:py-3 font-agrandir text-white bg-orange rounded-sm"
        >
          <ClipLoader color="#fff" size={"1rem"} loading={isLoading} />
          <span
            className={
              (isLoading ? "hidden " : "flex ") +
              " my-auto text-[0.75rem] md:text-[0.875rem]"
            }
          >
            Save Changes
          </span>
        </button>
      </div>
    </section>
  );
}
