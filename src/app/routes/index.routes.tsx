import { RouteObject } from "react-router-dom";
import HomeRoute from "./home/route";
import ShopRoute from "./shop/route";
import BlogRoute from "./blog/route";
import CbtDemoRoute from "./cbtDemo/route";
import AboutRoute from "./about/route";
import ContactRoute from "./contact/route";
import ProfileRoute from "./profile/route";
import AuthRoute from "./auth/route";

// TODO: make routes lazy loaded
const AppRoutes: RouteObject[] = [
  HomeRoute,
  ShopRoute,
  BlogRoute,
  CbtDemoRoute,
  AboutRoute,
  ContactRoute,
  ProfileRoute,
  AuthRoute,
];

export default AppRoutes;
