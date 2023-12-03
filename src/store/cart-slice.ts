// Import createSlice and PayloadAction types from the "@reduxjs/toolkit" library
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Define the CartItem type, representing an item in the shopping cart
export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

// Define the CartState type, representing the state of the shopping cart
type CartState = {
  items: CartItem[];
};

// Define the initial state for the shopping cart
const initialState: CartState = {
  items: [],
};

// Create a Redux slice for the cart, including the initial state and reducer functions
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Reducer function to add an item to the cart
    addToCart(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) {
      // Find the index of the item in the cart
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      // If the item is already in the cart, increment its quantity
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Reducer function to remove an item from the cart
    removeFromCart(state, action: PayloadAction<string>) {
      // Find the index of the item in the cart
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      // If the quantity is 1, remove the item from the cart
      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        // If the quantity is greater than 1, decrement the quantity
        state.items[itemIndex].quantity--;
      }
    },
  },
});

// Export the action creators for addToCart and removeFromCart
export const { addToCart, removeFromCart } = cartSlice.actions;
