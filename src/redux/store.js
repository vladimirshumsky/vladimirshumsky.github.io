import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./store/registration-page/registration-page.slice";
import loginSlice from "@/redux/store/login-page/login-pahe-slice";
export const store = configureStore({
  reducer: {
    auth: registerSlice,
    login: loginSlice,
  },
});
