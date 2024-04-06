import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AuthResponseType } from "../../types/authTypes";

// Define the initial state using that type
const initialState: AuthResponseType = {
  accessToken: "",
  refreshToken: "",
  _id: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateToken: (state, action: PayloadAction<AuthResponseType>) => {
      state._id = action.payload._id;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const { updateToken } = authSlice.actions;
export default authSlice.reducer;
