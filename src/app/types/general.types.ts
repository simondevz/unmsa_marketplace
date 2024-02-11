export type LoaderDataType<T> = {
  authorized: boolean;
  data?: T | null;
};

export type DecodedTokenType = {
  username: string;
  id: string;
  email: string;
  exp: Date;
};
