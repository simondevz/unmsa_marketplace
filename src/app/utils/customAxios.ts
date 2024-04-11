import axios from "axios";
import { BASE } from "../api.routes";
import { getAuthDetailsKey, getToken } from "./localStorage";
import { isTokenValid, refreshToken } from "./token";

// Custom axios instance based on headers needed
export const customAxios = {
  unprotected: async () =>
    axios.create({
      baseURL: BASE,
    }),
  protected: async () => {
    try {
      let token = await getToken(await getAuthDetailsKey());
      if (!token?.accessToken) throw new Error("Please Log In to continue");
      if (!(await isTokenValid(token.accessToken))) {
        console.log("not valid...");

        token = await refreshToken(token.refreshToken);
      }

      const headers = {
        Authorization: `Bearer ${token?.accessToken}`,
      };
      return axios.create({
        baseURL: BASE,
        headers: headers,
      });
    } catch (error) {
      throw new Error("Please Log In to continue");
    }
  },
  multipartForm: async () => {
    try {
      let token = await getToken(await getAuthDetailsKey());
      if (!token?.accessToken) throw new Error("Please Log In to continue");
      if (!(await isTokenValid(token.accessToken))) {
        console.log("not valid...");

        token = await refreshToken(token.refreshToken);
      }

      const headers = {
        Authorization: `Bearer ${token?.accessToken}`,
        "Content-Type": "multipart/form-data",
      };

      return axios.create({
        baseURL: BASE,
        headers: headers,
      });
    } catch (error) {
      throw new Error("Please Log In to continue");
    }
  },
};
