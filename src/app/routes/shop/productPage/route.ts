import { RouteObject } from "react-router-dom";
import ProductPage from "../../../pages/shop/product";

const ProductRoute: RouteObject = {
  path: "products/:productName/:productId",
  Component: ProductPage,
};

export default ProductRoute;
