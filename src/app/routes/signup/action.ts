import { ActionFunction } from "react-router-dom";
import { SignupFormType } from "../../types/auth.types";
import { API_ROUTES, customAxios } from "../../api.routes";
import { setToken } from "../../utils/localStorage";

const SignupAction: ActionFunction = async ({ params, request }) => {
  // Extract form data
  let formData = await request.formData();
  let data: SignupFormType = {
    username: formData.get("username") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirm_password: formData.get("confirm_password") as string,
  };

  // Check that the data is valid
  if (!data.username) return { error: "Please input a Username" };
  if (!data.email) return { error: "Please input an Email" };
  if (!data.password) return { error: "Please input a strong password" };
  if (data.password !== data.confirm_password)
    return { error: "Password and Confirm password are not the same" };

  // Make api call
  try {
    const response = await customAxios
      .unprotected()
      .post(API_ROUTES.auth.signup, data);
    setToken(response.data);
    return { data: response.data };
  } catch (error: any) {
    return {
      error:
        error?.response?.data?.detail?.[0]?.ctx?.reason ||
        error?.response?.data?.detail ||
        error.message,
    };
  }
};

export default SignupAction;
