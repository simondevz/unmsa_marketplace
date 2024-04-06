import { RouteObject } from "react-router-dom";
import EditProfilePage from "../../../pages/profiles/editProfile";

const EditProfileRoute: RouteObject = {
  path: ":userId/edit",
  Component: EditProfilePage,
};

export default EditProfileRoute;
