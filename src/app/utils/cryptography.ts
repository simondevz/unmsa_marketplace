import { AES, enc } from "crypto-js";
import { AuthResponseType } from "../types/authTypes";

export function generateRandomStringFromKey(key: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(key);

  // Use the SubtleCrypto API for hashing
  return crypto.subtle.digest("SHA-256", data).then((hashBuffer) => {
    // Convert the hash buffer to a hexadecimal string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  });
}

export async function encryptData(data: AuthResponseType, key: string) {
  const dataString = JSON.stringify(data);
  const encrypted = AES.encrypt(dataString, key);
  return encrypted.toString();
}

export async function decryptData(encryptedData: string, key: string) {
  const decrypted = AES.decrypt(encryptedData, key);
  const plaintext = decrypted.toString(enc.Utf8);
  return plaintext;
}
