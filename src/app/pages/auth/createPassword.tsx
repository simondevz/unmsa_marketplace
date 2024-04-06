import { useEffect, useMemo, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { SignupType } from "../../types/authTypes";
import { useLoginMutation, useSignupMutation } from "../../api.routes";
import { ClipLoader } from "react-spinners";
import { useAppDispatch } from "../../redux/hooks";
import { updateToken } from "../../redux/slice/authSlice";
import { storeToken } from "../../utils/localStorage";

export default function CreatePasswordPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [signupFn, { data, isLoading, isSuccess }] = useSignupMutation();
  const [loginFn, loginDetails] = useLoginMutation();

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const redirectUrl = location.state?.redirectUrl;
  const [signupData, setSignupData] = useState<Partial<SignupType>>({
    password: "",
    confirmPassword: "",
  });

  // Update the signup data fron the values in our url
  useMemo(() => {
    const fullName = searchParams.get("fullName");
    const email = searchParams.get("email");
    const userName = searchParams.get("userName");

    if (email && fullName && userName) {
      setSignupData((prev) => {
        return {
          ...prev,
          fullName,
          email,
          userName,
        };
      });
    }
  }, [searchParams]);

  //   Make the request to login if the signup was successful
  useEffect(() => {
    if (isSuccess) {
      if (data?._id) {
        loginFn({ email: signupData?.email, password: signupData.password });
      }
    }
  }, [data?._id, isSuccess, loginFn, signupData?.email, signupData.password]);

  // Create Query params and save auth response if login is successful
  useEffect(() => {
    (async () => {
      if (loginDetails.isSuccess && loginDetails.data) {
        if (loginDetails?.data?.accessToken) {
          const authObj = {
            accessToken: loginDetails.data.accessToken as string,
            refreshToken: loginDetails.data.refreshToken as string,
            _id: loginDetails.data._id as string,
          };
          const params = {
            email: signupData.email as string,
          };

          dispatch(updateToken(authObj));
          await storeToken(authObj);
          setSearchParams(params);
        }
      }
    })();
  }, [
    dispatch,
    loginDetails.data,
    loginDetails.isSuccess,
    navigate,
    redirectUrl,
    setSearchParams,
    signupData.email,
  ]);

  // Navigate to create profile page after the params are set
  useEffect(() => {
    if (searchParams.size === 1 && isSuccess) {
      navigate(`/profile/create?${searchParams.toString()}`, {
        state: { redirectUrl: redirectUrl ? redirectUrl : "/" },
      });
    }
  }, [isSuccess, navigate, redirectUrl, searchParams]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({});
    setSignupData({
      ...signupData,
      [event.target.name]: event?.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(signupData);
    signupFn({
      fullName: signupData.fullName,
      email: signupData.email,
      userName: signupData.userName,
      password: signupData.password,
    });
    return;
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 px-8 py-20 font-br_firma bg-moss_green rounded-md justify-start w-2/5"
      >
        <div className="mx-auto">
          <span className="flex mx-auto font-br_firma_bold text-white">
            Create password
          </span>
        </div>
        <div className="w-full justify-between flex flex-col mx-auto ">
          <label className="text-white text-[0.875rem]" htmlFor="password">
            Choose password
          </label>
          <input
            className="border-dark_ash_2 border-2 rounded-md outline-none w-full p-[0.5rem] text-[0.875rem]"
            type="text"
            id="password"
            name="password"
            value={signupData.password}
            onChange={handleChange}
          />
        </div>
        <div className="w-full justify-between flex flex-col mx-auto ">
          <label
            className="text-white text-[0.875rem]"
            htmlFor="confirmPassword"
          >
            Repeat password
          </label>
          <input
            className="border-dark_ash_2 border-2 rounded-md outline-none w-full p-[0.5rem] text-[0.875rem]"
            type={"text"}
            id="confirmPassword"
            name="confirmPassword"
            value={signupData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            disabled={isLoading || loginDetails.isLoading}
            className="flex px-16 py-2 bg-darker_lemon shadow-md text-white mx-auto rounded-sm"
          >
            <ClipLoader
              color="#fff"
              size={"1rem"}
              loading={isLoading || loginDetails.isLoading}
            />
            <span
              className={
                isLoading || loginDetails.isLoading ? "hidden " : "flex "
              }
            >
              Sign Up
            </span>
          </button>
        </div>
        <div className="mx-auto">
          <span className="text-white text-[0.875rem]">
            Already got an account?{" "}
            <Link className="text-light_green" to={"#"}>
              Log in
            </Link>
          </span>
        </div>
      </form>
    </>
  );
}
