import { RouteObject } from "react-router-dom";
import SignupPage from "../../pages/signup";
import SignupAction from "./action";

const SignupRoute: RouteObject = {
  path: "/signup",
  Component: SignupPage,
  action: SignupAction,
};

export default SignupRoute;
