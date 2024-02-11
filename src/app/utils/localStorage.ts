import { AuthTokenType } from "../types/auth.types";
import CryptoJS from "crypto-js";

const ACCESS_TOKEN = "ESP_ACCESS_TOKEN";
const SECRET_KEY = "kdfnjknfvjnfjknvnshfvbpkfdkhbvhbdfvkldfhvvhhkdlfhvblhdfk"; // use dotenv

export function setToken(token: AuthTokenType) {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(token),
    SECRET_KEY
  ).toString();
  localStorage.setItem(ACCESS_TOKEN, ciphertext);
}

export function getToken(): AuthTokenType | null {
  const toDecrypt = localStorage.getItem(ACCESS_TOKEN);
  if (toDecrypt)
    return JSON.parse(
      CryptoJS.AES.decrypt(toDecrypt as string, SECRET_KEY).toString(
        CryptoJS.enc.Utf8
      )
    );
  return null;
}
