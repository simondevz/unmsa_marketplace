import {
  useActionData,
  Form,
  useNavigate,
  useLocation,
  useNavigation,
} from "react-router-dom";
import { LoginFormReturnType } from "../types/auth.types";
import { useEffect } from "react";

export default function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useActionData() as LoginFormReturnType;

  useEffect(() => {
    if (actionData?.data?.access_token) {
      navigate(location?.state?.redirect_url || "/dashboard");
    }
  }, [actionData?.data?.access_token, location?.state?.redirect_url, navigate]);

  return (
    <section className="mx-4">
      <h1 className="text-xl font-semibold my-8">Login page</h1>
      {actionData?.error ? <div>{actionData?.error}</div> : <></>}
      <Form method="post" action="/login" className="flex flex-col gap-2 ">
        <div>
          <label>Username: </label>
          <input
            className="border border-black rounded-full px-4 py-2"
            name="username"
            id="username"
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            className="border border-black rounded-full px-4 py-2"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            className="border border-black rounded-full px-4 py-2"
            name="password"
            id="password"
          />
        </div>
        <div>
          <button
            className="px-4 py-2 border rounded-full border-black"
            type="submit"
            disabled={
              navigation.state === "submitting" ||
              navigation.state === "loading"
            }
          >
            {navigation.state === "submitting" || navigation.state === "loading"
              ? "Loading..."
              : "Login"}
          </button>
        </div>
      </Form>
    </section>
  );
}
