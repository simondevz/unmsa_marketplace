export type ProfileDetailsType = {
  _id: string;
  email: string;
  phoneNumber: string;
  brandName: string;
  gender: string;
  image: any;
  image_url: string;
  cloudinary_id: string;
  department: string;
  level: string;
  ownerId: string;
  location: string;
  isEmailVerified: boolean;
  isPhoneNumberVerified: boolean;
  status: string;
  isVerified: boolean;
};

export type UpdateProfileDetailsType = {
  id: string;
  updateBody: Partial<ProfileDetailsType>;
};
