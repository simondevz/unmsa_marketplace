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
  const [signupFn, { data, isLoading, isSuccess, isError, error }] =
    useSignupMutation();
  const [loginFn, loginDetails] = useLoginMutation();

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [errorMsg, setErrorMsg] = useState<string>("");
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
    setSignupData({
      ...signupData,
      [event.target.name]: event?.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!signupData.email || !signupData?.userName) {
      setErrorMsg("Email missing. Please return to sign up page");
      return;
    }

    if (!signupData.password || !signupData?.confirmPassword) {
      setErrorMsg("Please fill in all the fields.");
      return;
    }

    if (signupData.password !== signupData?.confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }

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
        className="flex flex-col gap-4 md:gap-6 px-4 md:px-8 py-10 md:py-20 text-[0.875rem] md:text-base font-br_firma bg-moss_green rounded-md justify-start md:w-2/5"
      >
        <div className="mx-auto">
          <span className="flex mx-auto font-br_firma_bold text-white">
            Create password
          </span>
        </div>
        <div className="w-full max-w-[20rem] lg:max-w-[30rem] justify-between flex flex-col mx-auto ">
          <label
            className="text-white text-[0.75rem] md:text-[0.875rem]"
            htmlFor="password"
          >
            Choose password
          </label>
          <input
            className="border-dark_ash_2 border-2 rounded-md outline-none w-full p-[0.5rem] text-[0.75rem] md:text-[0.875rem]"
            type="text"
            id="password"
            name="password"
            value={signupData.password}
            onChange={handleChange}
          />
        </div>
        <div className="w-full max-w-[20rem] lg:max-w-[30rem] justify-between flex flex-col mx-auto ">
          <label
            className="text-white text-[0.75rem] md:text-[0.875rem]"
            htmlFor="confirmPassword"
          >
            Repeat password
          </label>
          <input
            className="border-dark_ash_2 border-2 rounded-md outline-none w-full p-[0.5rem] text-[0.75rem] md:text-[0.875rem]"
            type={"text"}
            id="confirmPassword"
            name="confirmPassword"
            value={signupData.confirmPassword}
            onChange={handleChange}
          />
          <div
            className={
              (isError || errorMsg ? "flex " : "hidden ") +
              "flex text-light_red text-[0.75rem] py-2 px-2"
            }
          >
            <span>
              {errorMsg
                ? errorMsg
                : (error as any)?.data?.message?.details[0]?.message ||
                  "Something Went Wrong. Please try again"}
            </span>
          </div>
        </div>
        <div>
          <button
            disabled={isLoading || loginDetails.isLoading}
            className="flex px-12 md:px-16 py-2 bg-darker_lemon shadow-md text-white mx-auto rounded-sm"
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
          <span className="text-white text-[0.75rem] md:text-[0.875rem]">
            Already got an account?{" "}
            <Link className="text-light_green" to={"/auth/login"}>
              Log in
            </Link>
          </span>
        </div>
      </form>
    </>
  );
}
