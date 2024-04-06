export type LoginType = {
  username: string;
  email: string;
  password: string;
  refreshToken: string;
  accessToken: string;
  _id: string;
};

export type SignupType = {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  userName: string;
  verified: boolean;
  status: string;
  _id: string;
};

export type CheckCredentialsType = {
  email: string;
  userName: string;
  userWithUsernameExists: boolean;
  userWithEmailExists: boolean;
};

export type AuthResponseType = {
  refreshToken: string;
  accessToken: string;
  _id: string;
};
