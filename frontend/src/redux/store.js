import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    loginSlice,
    productSlice
  }
});

export default store;