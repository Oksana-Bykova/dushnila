import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "./status/reducer";

export const store = configureStore({
  reducer: {
    status: statusReducer,
  },
});
