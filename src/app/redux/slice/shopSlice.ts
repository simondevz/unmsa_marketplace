import { createSlice } from "@reduxjs/toolkit";

const initialState: { categories: string[] } = {
  categories: [
    "Books and Stationery",
    "Food and Groceries",
    "Home and Dorm Essentials",
    "Health and Wellness",
    "Tech Accessories",
    "Decor and Lifestyle",
    "Clothing and Accessories",
    "Fitness and Exercise",
    "Travel and Outdoor Gear",
    "Beauty and Personal Care",
    "Entertainment",
    "Electrical Appliances",
    "School and Office Supplies",
    "Art and Craft Supplies",
    "Party and Event Supplies",
    "Kitchen Appliances",
    "Household Supplies",
    "Pet Supplies",
    "Music and Instruments",
    "DIY and Tools",
    "Baby and Kids",
    "Gaming",
    "Car Accessories",
    "Hobbies and Collectibles",
    "Jewelry and Watches",
    "Photography",
    "Home Improvement",
    "Furniture and Furnishings",
    "Outdoor Living",
    "Gifts and Novelties",
  ],
};

export const shopSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

// export const {  } = shopSlice.actions;
export default shopSlice.reducer;
