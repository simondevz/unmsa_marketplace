import { RouteObject } from "react-router-dom";
import MainRoute from "./profile/route";
import EditProfileRoute from "./editProfile/route";
import CreateProfileRoute from "./createProfile/route";

const ProfileRoute: RouteObject = {
  path: "/profile",
  children: [MainRoute, EditProfileRoute, CreateProfileRoute],
};

export default ProfileRoute;
