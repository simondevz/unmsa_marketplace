import { RouteObject } from "react-router-dom";
import DashboardPage from "../../pages/dashboard";
import DashboardLoader from "./loader";
import CampaignRoute from "./children/campaign/route";
import CreateMailRoute from "./children/createMail/route";
import AudienceRoute from "./children/audience/route";

const DashboardRoute: RouteObject = {
  path: "/dashboard",
  Component: DashboardPage,
  loader: DashboardLoader,
  children: [CampaignRoute, CreateMailRoute, AudienceRoute],
};

export default DashboardRoute;
