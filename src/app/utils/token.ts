import { jwtDecode } from "jwt-decode";
import { AuthResponseType } from "../types/authTypes";
import { customAxios } from "./customAxios";
import { storeToken } from "./localStorage";

export const refreshToken = async (refreshToken: string) => {
  try {
    console.log("refetching the token.......");
    const fetcher = await customAxios.unprotected();
    const { data }: { data: AuthResponseType } = await fetcher.post(
      `/refresh/${refreshToken}`
    );

    await storeToken(data);
    return data;
  } catch (error) {
    throw new Error("Something Went Wrong. Please try Loging In again");
  }
};

export const isTokenValid = async (token: string) => {
  const decoded = jwtDecode(token);
  const expiringTime = (decoded.exp as number) - 30;
  const timeNow = Date.now() / 1000;

  if (timeNow < expiringTime) return true;
  return false;
};
