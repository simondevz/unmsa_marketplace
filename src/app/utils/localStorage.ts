import { AuthResponseType } from "../types/authTypes";
import { CartObjectType } from "../types/shopTypes";
import {
  decryptData,
  encryptData,
  generateRandomStringFromKey,
} from "./cryptography";

const SECRET_KEY = "secret_key_for_unmsa_marketplace_yh_wuhuuuuu";
export const CART_KEY = "CART_UNMSA";
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

export const getCart = () => {
  const cart: CartObjectType[] = JSON.parse(
    localStorage.getItem(CART_KEY) || "[]"
  );
  return cart;
};

export const addToCart = async (id: string, quantity: number) => {
  const cart = getCart();
  localStorage.setItem(
    CART_KEY,
    JSON.stringify([...cart, { productId: id, quantity }])
  );
};

export const removeFromCart = async (id: string) => {
  const cart = getCart();
  const newCart = cart.filter((item) => item.productId !== id);
  localStorage.setItem(CART_KEY, JSON.stringify(newCart));
};

export const isInCart = (id: string) => {
  const cart = getCart();
  return cart.filter((item) => item.productId === id).length > 0 ? true : false;
};

export const updateCartItem = (id: string, quantity: number) => {
  removeFromCart(id);
  addToCart(id, quantity);
};
