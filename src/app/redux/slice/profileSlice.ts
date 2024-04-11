import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProfileDetailsType } from "../../types/profileTypes";

// Define the initial state using that type
const initialState: { currentUserProfile: ProfileDetailsType } = {
  currentUserProfile: {
    _id: "",
    email: "",
    phoneNumber: "",
    brandName: "",
    gender: "",
    department: "",
    level: "",
    ownerId: "",
    location: "",
    image: null,
    image_url: "",
    cloudinary_id: "",
    isEmailVerified: false,
    isPhoneNumberVerified: false,
    status: "",
    isVerified: false,
  },
};

export const profileSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    updateCurrentUserProfile: (
      state,
      action: PayloadAction<ProfileDetailsType>
    ) => {
      state.currentUserProfile = { ...action.payload };
    },
  },
});

export const { updateCurrentUserProfile } = profileSlice.actions;
export default profileSlice.reducer;
