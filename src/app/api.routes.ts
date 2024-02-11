import axios from "axios";
import { getToken } from "./utils/localStorage";

const BASE = "http://127.0.0.1:8000";

// Custom axios instance based on headers needed
export const customAxios = {
  unprotected: () =>
    axios.create({
      baseURL: BASE,
    }),
  protected: () => {
    try {
      const token = getToken();
      if (!token?.access_token) throw new Error("Please Log In to continue");

      const headers = {
        Authorization: `${token?.token_type} ${token?.access_token}`,
      };
      return axios.create({
        baseURL: BASE,
        headers: headers,
      });
    } catch (error) {
      throw new Error("Please Log In to continue");
    }
  },
  multipartForm: () => {
    try {
      const token = getToken();
      if (!token?.access_token) throw new Error("Please Log In to continue");

      const headers = {
        Authorization: `${token?.token_type} ${token?.access_token}`,
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

// API routes
export const API_ROUTES = {
  // Auth
  auth: {
    signup: "/auth/signup", // POST
    login: "/auth/login", // POST
  },

  user: {
    dashboardInfo: "/user/dashboard-info/", // GET: user_id
  },

  mailing_services: {
    create: "/mailing/create", // POST
  },

  email_verification: {
    check: "/verification/check-address", // GET
    start_process: "/verification/start-process", // GET
    end_process: "/verification/end-process", // GET
  },
};
