import { RouteObject } from "react-router-dom";
import EditProductPage from "../../../pages/shop/editProduct";

const CreateProductRoute: RouteObject = {
  path: "product/create",
  Component: EditProductPage,
};

export default CreateProductRoute;
