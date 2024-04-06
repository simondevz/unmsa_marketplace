import { RouteObject } from "react-router-dom";
import ProfilePage from "../../../pages/profiles/profile";

const ProfileRoute: RouteObject = {
  path: ":userId",
  Component: ProfilePage,
};

export default ProfileRoute;
