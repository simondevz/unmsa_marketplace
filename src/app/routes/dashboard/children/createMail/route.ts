import { RouteObject } from "react-router-dom";
import CreateMailPage from "../../../../pages/createMail";
import CreateMailAction from "./action";

const CreateMailRoute: RouteObject = {
  path: "create-mail",
  Component: CreateMailPage,
  action: CreateMailAction,
};

export default CreateMailRoute;
