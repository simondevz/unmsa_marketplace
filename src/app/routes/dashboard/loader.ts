import { jwtDecode } from "jwt-decode";
import { API_ROUTES, customAxios } from "../../api.routes";
import { isUserLoggedIn } from "../../utils/auth";
import { DecodedTokenType } from "../../types/general.types";

export default async function DashboardLoader() {
  const authorized = isUserLoggedIn();
  if (!authorized) return { authorized };

  const user: DecodedTokenType = jwtDecode(authorized.access_token);
  const response = await customAxios
    .protected()
    .get(API_ROUTES.user.dashboardInfo + JSON.parse(user.id));

  return { authorized, data: response.data };
}
