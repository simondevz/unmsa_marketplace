import { ActionFunction } from "react-router-dom";
import { LoginFormType } from "../../types/auth.types";
import { API_ROUTES, customAxios } from "../../api.routes";
import { setToken } from "../../utils/localStorage";

const LoginAction: ActionFunction = async ({ params, request }) => {
  // Extract form data
  let formData = await request.formData();
  let data: LoginFormType = {
    username: formData.get("username") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  // Check that the data is valid
  if (!data.username && !data.email)
    return { error: "Please input a Username or email" };
  if (!data.password) return { error: "Please input your password" };

  // Make api call
  try {
    const response = await customAxios
      .unprotected()
      .post(API_ROUTES.auth.login, data);
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

export default LoginAction;
