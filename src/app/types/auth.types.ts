export type AuthTokenType = {
  access_token: string;
  token_type: string;
};

export type SignupFormType = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type SignupFormReturnType = {
  error: string | null;
  data: AuthTokenType | null;
};

export type LoginFormReturnType = SignupFormReturnType;
export type LoginFormType = {
  username?: string;
  email?: string;
  password: string;
};
