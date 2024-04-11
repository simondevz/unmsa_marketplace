export type contactInfoType = {
  email: string;
  phoneNumber: string;
};

export type shippingInfoType = {
  fullName: string;
  homeAddress: string;
  pickUpStation: string;
  state: string;
  city: string;
};

export type OrderMetaDataType = {
  contactInfo: Partial<contactInfoType>;
  shippingInfo: Partial<shippingInfoType>;
};

export type CartObjectType = {
  productId: string;
  quantity: number;
};
