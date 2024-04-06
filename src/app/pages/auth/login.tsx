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
  const [loginFn, { data, isLoading, isSuccess }] = useLoginMutation();
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
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-16 px-4 py-12 font-br_firma bg-moss_green rounded-sm justify-start w-2/5"
      >
        <div className="mx-auto">
          <span className="flex mx-auto font-br_firma_bold text-[1.5rem] text-white">
            Welcome back
          </span>
        </div>
        <div className="flex flex-col justify-between gap-6">
          <div className="mx-auto">
            <span className="flex mx-auto font-br_firma_bold text-white">
              Log into your account
            </span>
          </div>
          <div className="w-full justify-between flex flex-col mx-auto ">
            {/* TODO: Update to accept usernames later */}
            <label className="text-white text-[0.875rem]" htmlFor="email">
              Email address
            </label>
            <input
              className="border-dark_ash_2 border-2 rounded-md outline-none w-full p-[0.5rem] text-[0.875rem]"
              type="text"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full justify-between flex flex-col mx-auto ">
            <label className="text-white text-[0.875rem]" htmlFor="password">
              Password
            </label>
            <input
              className="border-dark_ash_2 border-2 rounded-md outline-none w-full p-[0.5rem] text-[0.875rem]"
              type={"text"}
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              disabled={isLoading}
              className="flex px-16 py-2 bg-darker_lemon shadow-md text-white mx-auto rounded-sm"
            >
              <ClipLoader color="#fff" size={"1rem"} loading={isLoading} />
              <span className={isLoading ? "hidden " : "flex "}>Log In</span>
            </button>
          </div>
          <div className="mx-auto">
            <span className="text-white text-[0.875rem]">
              Forgot your password?{" "}
              <Link className="text-light_green" to={"#"}>
                Click here
              </Link>
            </span>
          </div>
        </div>
      </form>
    </>
  );
}
