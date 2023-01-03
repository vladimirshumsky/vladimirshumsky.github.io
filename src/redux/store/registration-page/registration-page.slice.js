import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailSignIn: "",
  passwordSignIn: "",
  nameRegistration: "",
  emailRegistration: "",
  passwordRegistration: "",
  promoRegistration: "",
  error: {
    email: false,
    name: false,
    password: false,
    promo: false,
  },
  notMailValue: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
    setEmail(state, action) {
      state.emailSignIn = action.payload;
    },
    setPassword(state, action) {
      state.passwordSignIn = action.payload;
    },
    setNameReg(state, action) {
      state.nameRegistration = action.payload;
    },
    setEmailReg(state, action) {
      state.emailRegistration = action.payload;
    },
    setPasswordReg(state, action) {
      state.passwordRegistration = action.payload;
    },
    setPromoReg(state, action) {
      state.promoRegistration = action.payload;
    },
    setEmailError(state, action) {
      state.error = { ...state.error, email: action.payload };
    },
    setNameError(state, action) {
      state.error = { ...state.error, name: action.payload };
    },
  },
});

export const {
  reset,
  setEmail,
  setPassword,
  setEmailReg,
  setNameReg,
  setPasswordReg,
  setPromoReg,
  setEmailError,
  setNameError,
} = authSlice.actions;

export default authSlice.reducer;
