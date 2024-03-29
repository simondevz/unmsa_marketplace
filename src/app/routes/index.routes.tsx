import { RouteObject } from "react-router-dom";
import HomeRoute from "./home/route";
import ShopRoute from "./shop/route";
import BlogRoute from "./blog/route";
import CbtDemoRoute from "./cbtDemo/route";
import AboutRoute from "./about/route";
import ContactRoute from "./contact/route";
import ProfileRoute from "./profile/route";

const AppRoutes: RouteObject[] = [
  HomeRoute,
  ShopRoute,
  BlogRoute,
  CbtDemoRoute,
  AboutRoute,
  ContactRoute,
  ProfileRoute,
];

export default AppRoutes;
