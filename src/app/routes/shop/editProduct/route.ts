import { RouteObject } from "react-router-dom";
import EditProductPage from "../../../pages/shop/editProduct";

const EditProductRoute: RouteObject = {
  path: "product/edit/:productId",
  Component: EditProductPage,
};

export default EditProductRoute;
