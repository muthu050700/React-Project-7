import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducer/reducer";

const store = configureStore({
  reducer: {
    productReducer,
  },
  devTools: true,
});

export default store;
