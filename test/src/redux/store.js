import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartslice.js";
import userSlice from "./userSlice.js";

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
});

export default store;
