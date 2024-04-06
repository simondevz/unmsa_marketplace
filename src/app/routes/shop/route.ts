import { RouteObject } from "react-router-dom";
import ProductRoute from "./productPage/route";
import IndexShopRoute from "./index/route";
import EditProductRoute from "./editProduct/route";
import CartRoute from "./cart/route";
import CreateProductRoute from "./createProduct/route";

const ShopRoute: RouteObject = {
  path: "/shop",
  children: [
    IndexShopRoute,
    ProductRoute,
    EditProductRoute,
    CreateProductRoute,
    CartRoute,
  ],
};

export default ShopRoute;
