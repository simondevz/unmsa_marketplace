import { AuthResponseType } from "../types/authTypes";
import {
  decryptData,
  encryptData,
  generateRandomStringFromKey,
} from "./cryptography";

const SECRET_KEY = "secret_key_for_unmsa_marketplace_yh_wuhuuuuu";
export const getAuthDetailsKey = async () =>
  await generateRandomStringFromKey("AUTH_DETAILS");

export const storeToken = async (details: AuthResponseType) => {
  localStorage.setItem(
    await getAuthDetailsKey(),
    JSON.stringify(await encryptData(details, SECRET_KEY))
  );
};

export const getToken = async (authDetailsKey: string) => {
  const storedValue = localStorage.getItem(authDetailsKey);
  if (!storedValue) return null;

  const encryptedData = JSON.parse(storedValue);
  return JSON.parse(
    await decryptData(encryptedData, SECRET_KEY)
  ) as AuthResponseType;
};
