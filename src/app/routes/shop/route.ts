import { RouteObject } from "react-router-dom";
import ProductRoute from "./productPage/route";
import IndexShopRoute from "./index/route";

const ShopRoute: RouteObject = {
  path: "/shop",
  children: [IndexShopRoute, ProductRoute],
};

export default ShopRoute;
