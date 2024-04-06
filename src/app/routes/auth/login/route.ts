import { RouteObject } from "react-router-dom";
import LoginPage from "../../../pages/auth/login";

const LoginRoute: RouteObject = {
  path: "login",
  Component: LoginPage,
};

export default LoginRoute;
