import { RouteObject } from "react-router-dom";
import LoginRoute from "./login/route";
import SignupRoute from "./signup/route";
import AuthIndexRoute from "./authLayout/route";
import CreatePasswordRoute from "./createPassword/route";

const AuthRoute: RouteObject = {
  path: "/auth",
  children: [AuthIndexRoute, LoginRoute, SignupRoute, CreatePasswordRoute],
};

export default AuthRoute;
