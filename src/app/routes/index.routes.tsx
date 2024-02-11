import { RouteObject } from "react-router-dom";
import LoginRoute from "./login/route";
import SignupRoute from "./signup/route";
import DashboardRoute from "./dashboard/route";

const AppRoutes: RouteObject[] = [LoginRoute, SignupRoute, DashboardRoute];

export default AppRoutes;
