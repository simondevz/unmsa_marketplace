import axios from "axios";
import { BASE } from "../api.routes";
import { getAuthDetailsKey, getToken } from "./localStorage";

// Custom axios instance based on headers needed
export const customAxios = {
  unprotected: async () =>
    axios.create({
      baseURL: BASE,
    }),
  protected: async () => {
    try {
      const token = await getToken(await getAuthDetailsKey());
      if (!token?.accessToken) throw new Error("Please Log In to continue");

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
      const token = await getToken(await getAuthDetailsKey());
      if (!token?.accessToken) throw new Error("Please Log In to continue");

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
