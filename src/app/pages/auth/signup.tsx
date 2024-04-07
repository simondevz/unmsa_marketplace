import { useEffect, useState } from "react";
import { SignupType } from "../../types/authTypes";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useCheckCredentialsMutation } from "../../api.routes";
import { ClipLoader } from "react-spinners";

export default function SignupPage() {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const [errorMsg, setErrorMsg] = useState("");

  const [checkCredentials, { data, isLoading, isSuccess, isError, error }] =
    useCheckCredentialsMutation();
  const [signupData, setSignupData] = useState<Partial<SignupType>>({
    fullName: "",
    email: "",
    userName: "",
  });

  // If the email and username are free update the url search parameters so it can be used in the create password page
  useEffect(() => {
    if (isSuccess) {
      if (!data?.userWithEmailExists && !data?.userWithUsernameExists) {
        const params = {
          fullName: signupData.fullName as string,
          email: signupData.email as string,
          userName: signupData.userName as string,
        };
        setSearchParams(params);
      }
    }
  }, [
    data?.userWithEmailExists,
    data?.userWithUsernameExists,
    isSuccess,
    setSearchParams,
    signupData,
  ]);

  // Navigate to create password page after the params are set
  useEffect(() => {
    if (searchParams.size === 3 && isSuccess) {
      navigate(`/auth/createpassword?${searchParams.toString()}`);
    }
  }, [navigate, searchParams, isSuccess]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({});
    setSignupData({
      ...signupData,
      [event.target.name]: event?.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!signupData?.fullName || !signupData.userName || !signupData?.email) {
      setErrorMsg("Please fill in all the fields.");
      return;
    }

    checkCredentials({
      email: signupData.email,
      userName: signupData.userName,
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
        className="flex flex-col gap-4 md:gap-6 px-4 md:px-8 py-8 md:py-20 text-[0.875rem] md:text-base font-br_firma bg-moss_green rounded-sm justify-start"
      >
        <div className="mx-auto">
          <span className="flex mx-auto font-br_firma_bold text-white">
            To get started, sign up
          </span>
        </div>
        <div className="w-full max-w-[20rem] lg:max-w-[30rem] justify-between flex flex-col mx-auto ">
          <label
            className="text-white text-[0.75rem] md:text-[0.875rem]"
            htmlFor="fullName"
          >
            Full name
          </label>
          <input
            className="border-dark_ash_2 border-2 rounded-md outline-none w-full p-[0.5rem] text-[0.75rem] md:text-[0.875rem]"
            type="text"
            id="fullName"
            name="fullName"
            value={signupData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="w-full max-w-[20rem] lg:max-w-[30rem] justify-between flex flex-col mx-auto ">
          <label
            className="text-white text-[0.75rem] md:text-[0.875rem]"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            className="border-dark_ash_2 border-2 rounded-md outline-none w-full p-[0.5rem] text-[0.75rem] md:text-[0.875rem]"
            type="text"
            id="email"
            name="email"
            value={signupData.email}
            onChange={handleChange}
          />
          <div
            className={
              (data?.userWithEmailExists ? "flex " : "hidden ") +
              "flex text-light_red text-[0.75rem] py-2 px-2"
            }
          >
            <span>{"Account with email address exist"}</span>
          </div>
        </div>
        <div className="w-full max-w-[20rem] lg:max-w-[30rem] justify-between flex flex-col mx-auto ">
          <label
            className="text-white text-[0.75rem] md:text-[0.875rem]"
            htmlFor="userName"
          >
            Username
          </label>
          <input
            className="border-dark_ash_2 border-2 rounded-md outline-none w-full p-[0.5rem] text-[0.75rem] md:text-[0.875rem]"
            type={"text"}
            id="userName"
            name="userName"
            value={signupData.userName}
            onChange={handleChange}
          />
          <div
            className={
              (isError || data?.userWithUsernameExists || errorMsg
                ? "flex "
                : "hidden ") + "flex text-light_red text-[0.75rem] py-2 px-2"
            }
          >
            <span>
              {errorMsg
                ? errorMsg
                : data?.userWithUsernameExists
                ? "Account with username exist"
                : (error as any)?.data?.message ||
                  "Something Went Wrong. Please try again"}
            </span>
          </div>
        </div>
        <div>
          <button
            disabled={isLoading}
            className="flex px-16 py-2 bg-darker_lemon shadow-md text-white mx-auto rounded-sm"
          >
            {isLoading ? (
              <span className="">
                <ClipLoader color="#fff" size={"1rem"} />
              </span>
            ) : (
              "Continue"
            )}
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
    </div>
  );
}
