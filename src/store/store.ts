// Import the configureStore function from the "@reduxjs/toolkit" library
import { configureStore } from "@reduxjs/toolkit";

// Import the cartSlice reducer from the local "cart-slice" file
import { cartSlice } from "./cart-slice";

// Configure the Redux store using the configureStore function
export const store = configureStore({
  // Specify the reducer for the store, in this case, the cartSlice reducer
  reducer: {
    cart: cartSlice.reducer,
  },
});

// Define and export the RootState type, representing the complete state of the Redux store
export type RootState = ReturnType<typeof store.getState>;

// Define and export the AppDispatch type, representing the type of the Redux store's dispatch function
export type AppDispatch = typeof store.dispatch;
