import { useEffect, useState } from "react";
import { LoginType } from "../../types/authTypes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../api.routes";
import { ClipLoader } from "react-spinners";
import { updateToken } from "../../redux/slice/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import { storeToken } from "../../utils/localStorage";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectUrl = location.state?.redirectUrl;
  const [loginFn, { data, isLoading, isSuccess, isError, error }] =
    useLoginMutation();
  const [loginData, setLoginData] = useState<Partial<LoginType>>({
    email: "",
    username: "",
    password: "",
  });

  // Update redux and navigate to redirect url after login
  useEffect(() => {
    (async () => {
      if (isSuccess && data) {
        if (data?.accessToken) {
          const authObj = {
            accessToken: data.accessToken as string,
            refreshToken: data.refreshToken as string,
            _id: data._id as string,
          };

          dispatch(updateToken(authObj)); // send to global state
          await storeToken(authObj); // store in localStorage
          navigate(redirectUrl ? redirectUrl : "/");
        }
      }
    })();
  }, [dispatch, data, isSuccess, navigate, redirectUrl]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event?.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginFn({
      email: loginData.email,
      password: loginData.password,
    });
    return;
  };

  return (
    <div className="flex w-full flex-col md:w-2/5">
      <span className="md:hidden flex font-agrandir_bold text-darker_lemon text-[1rem] px-4 pb-4 text-center mx-auto">
        Ready to explore the all new opportunity to get your services to your
        customers as an UNMSAite?
      </span>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:gap-16 gap-12 md:px-4 px-2 md:py-12 py-8 font-br_firma bg-moss_green rounded-sm justify-start"
      >
        <div className="mx-auto">
          <span className="flex mx-auto font-br_firma_bold md:text-[1.5rem] text-[1.2rem] text-white">
            Welcome back
          </span>
        </div>
        <div className="flex flex-col justify-between md:gap-6 gap-4 md:text-base text-[0.875rem]">
          <div className="mx-auto">
            <span className="flex mx-auto font-br_firma_bold text-white">
              Log into your account
            </span>
          </div>
          <div className="w-full max-w-[20rem] lg:max-w-[30rem] justify-between flex flex-col mx-auto ">
            {/* TODO: Update to accept usernames later */}
            <label
              className="text-white md:text-[0.875rem] text-[0.75rem]"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              className="border-dark_ash_2 border-2 rounded-md outline-none w-full p-[0.5rem] md:text-[0.875rem] text-[0.75rem]"
              type="text"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full max-w-[20rem] lg:max-w-[30rem] justify-between flex flex-col mx-auto ">
            <label
              className="text-white md:text-[0.875rem] text-[0.75rem]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border-dark_ash_2 border-2 rounded-md outline-none w-full p-[0.5rem] md:text-[0.875rem] text-[0.75rem]"
              type={"text"}
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            />
            <div
              className={
                (isError ? "flex " : "hidden ") +
                "flex text-light_red text-[0.75rem] py-2 px-2"
              }
            >
              <span>
                {(error as any)?.data?.message ||
                  "Something Went Wrong. Please try again"}
              </span>
            </div>
          </div>
          <div>
            <button
              disabled={isLoading}
              className="flex md:px-16 px-12 py-2 bg-darker_lemon shadow-md text-white mx-auto rounded-sm"
            >
              <ClipLoader color="#fff" size={"1rem"} loading={isLoading} />
              <span className={isLoading ? "hidden " : "flex "}>Log In</span>
            </button>
          </div>
          <div className="mx-auto flex flex-col gap-2">
            <span className="text-white md:text-[0.875rem] text-[0.75rem]">
              Forgot your password?{" "}
              <Link className="text-light_green" to={"#"}>
                Click here
              </Link>
            </span>
            <span className="text-white md:text-[0.875rem] text-[0.75rem]">
              Don't have an account?{" "}
              <Link className="text-light_green" to={"/auth/signup"}>
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
