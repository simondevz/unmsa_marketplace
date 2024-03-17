import { RouteObject } from "react-router-dom";
import Index from "./profile/route";
import EditProfileRoute from "./editProfile/route";

const ProfileRoute: RouteObject = {
  path: "/profile",
  children: [Index, EditProfileRoute],
};

export default ProfileRoute;
