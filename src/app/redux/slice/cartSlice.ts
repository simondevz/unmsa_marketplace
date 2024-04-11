import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define the initial state using that type
interface NumberObject {
  [key: string]: number;
}
const initialState: { prices: NumberObject } = {
  prices: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCartPrices: (
      state,
      action: PayloadAction<{ productId: string; price: number }>
    ) => {
      state.prices = {
        ...state.prices,
        [action.payload.productId]: action.payload.price,
      };
    },
  },
});

export const { updateCartPrices } = cartSlice.actions;
export default cartSlice.reducer;
