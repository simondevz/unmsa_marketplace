import { RouteObject } from "react-router-dom";
import LoginPage from "../../pages/login";
import LoginAction from "./action";

const LoginRoute: RouteObject = {
  path: "/login",
  Component: LoginPage,
  action: LoginAction,
};

export default LoginRoute;
