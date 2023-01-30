import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../lib/cartSlice";
import modalSlice from "../lib/modalSlice";

const store = configureStore({
  reducer: {
    cartSlice,
    modalSlice,
  },
});

export default store;
