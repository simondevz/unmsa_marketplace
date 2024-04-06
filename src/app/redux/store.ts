import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import { protectedRoutesApi, unprotectedRoutesApi } from "../api.routes";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [unprotectedRoutesApi.reducerPath]: unprotectedRoutesApi.reducer,
    [protectedRoutesApi.reducerPath]: protectedRoutesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      unprotectedRoutesApi.middleware,
      protectedRoutesApi.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
