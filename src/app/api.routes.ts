import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  CheckCredentialsType,
  LoginType,
  SignupType,
} from "./types/authTypes";
import {
  ProfileDetailsType,
  UpdateProfileDetailsType,
} from "./types/profileTypes";
import { ProductType, UpdateProductType } from "./types/productTypes";
import { customAxios } from "./utils/customAxios";
import { isTokenValid, refreshToken } from "./utils/token";
import { getAuthDetailsKey, getToken } from "./utils/localStorage";

export const BASE = "https://unmsa.onrender.com/api";

export const unprotectedRoutesApi = createApi({
  reducerPath: "unprotectedRoutes",
  baseQuery: fetchBaseQuery({ baseUrl: BASE }),
  endpoints: (builder) => ({
    signup: builder.mutation<SignupType, Partial<SignupType>>({
      query: (body) => ({
        url: `/users`,
        method: "POST",
        body,
      }),
    }),

    login: builder.mutation<LoginType, Partial<LoginType>>({
      query: (body) => ({
        url: `/login`,
        method: "POST",
        body,
      }),
    }),

    checkCredentials: builder.mutation<
      CheckCredentialsType,
      Partial<CheckCredentialsType>
    >({
      query: (body) => ({
        url: `/users/is-account-available`,
        method: "POST",
        body,
      }),
    }),

    getProducts: builder.query<ProductType[], any>({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
    }),

    getProductById: builder.query<ProductType[], Partial<ProductType>>({
      query: (details) => ({
        url: `/products/${details.product_id}`,
        method: "GET",
      }),
    }),

    getSellers: builder.query<ProfileDetailsType[], any>({
      query: () => ({
        url: "/sellers",
        method: "GET",
      }),
    }),
  }),
});

export const protectedRoutesApi = createApi({
  reducerPath: "protectedRoutes",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE,
    prepareHeaders: async (headers) => {
      try {
        const auth = await getToken(await getAuthDetailsKey());
        const token = auth?.accessToken;
        const refresh_Token = auth?.refreshToken;

        if (token && (await isTokenValid(token))) {
          headers.set("authorization", `Bearer ${token}`);
        } else if (refresh_Token) {
          const data = await refreshToken(refresh_Token);
          headers.set("authorization", `Bearer ${data.accessToken}`);
        } else {
          throw new Error("Please log in");
        }
        return headers;
      } catch (error) {
        throw error;
      }
    },
  }),

  endpoints: (builder) => ({
    getProfileDetails: builder.query<
      ProfileDetailsType,
      Partial<ProfileDetailsType>
    >({
      query: (details) => ({
        url: `/sellers/user/${details.ownerId}`,
        method: "GET",
      }),
    }),

    createProfile: builder.mutation<ProfileDetailsType, FormData>({
      queryFn: async (formdata) => {
        const fetcher = await customAxios.multipartForm();
        const { data }: { data: ProfileDetailsType } = await fetcher.post(
          "/sellers",
          formdata
        );
        return { data };
      },
    }),

    updateProfile: builder.mutation<
      ProfileDetailsType,
      Partial<UpdateProfileDetailsType>
    >({
      query: (body) => ({
        url: `sellers/${body?.id}`,
        method: "PUT",
        body: body.updateBody,
      }),
    }),

    // todo: handle errors
    createProduct: builder.mutation<ProductType, FormData>({
      queryFn: async (formdata) => {
        const fetcher = await customAxios.multipartForm();
        const { data }: { data: ProductType } = await fetcher.post(
          "/create-product",
          formdata
        );
        return { data };
      },
    }),

    updateProduct: builder.mutation<ProductType, Partial<UpdateProductType>>({
      query: (body) => ({
        url: `/products/update/${body.id}`,
        method: "PUT",
        body: { updateBody: body.updateBody },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useCheckCredentialsMutation,
  useGetProductByIdQuery,
  useLazyGetProductByIdQuery,
  useGetProductsQuery,
  useGetSellersQuery,
} = unprotectedRoutesApi;

export const {
  useGetProfileDetailsQuery,
  useLazyGetProfileDetailsQuery,
  useCreateProfileMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUpdateProfileMutation,
} = protectedRoutesApi;
