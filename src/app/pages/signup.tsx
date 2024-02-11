import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { SignupFormReturnType } from "../types/auth.types";
import { useEffect } from "react";

export default function SignupPage() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useActionData() as SignupFormReturnType;

  useEffect(() => {
    if (actionData?.data?.access_token) {
      navigate("/dashboard");
    }
  }, [actionData?.data?.access_token, navigate]);

  return (
    <section className="mx-4">
      <h1 className="text-xl font-semibold my-8">Signup page</h1>
      {actionData?.error ? <div>{actionData?.error}</div> : <></>}
      <Form method="post" action="/signup" className="flex flex-col gap-2 ">
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
          <label>Confirm Password: </label>
          <input
            className="border border-black rounded-full px-4 py-2"
            name="confirm_password"
            id="confirm_password"
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
              : "Signup"}
          </button>
        </div>
      </Form>
    </section>
  );
}
