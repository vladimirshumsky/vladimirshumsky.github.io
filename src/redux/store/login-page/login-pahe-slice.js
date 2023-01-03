import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailSignIn: "",
  passwordSignIn: "",
  error: false,
  success: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    reset: () => initialState,
    setEmail(state, action) {
      state.emailSignIn = action.payload;
    },
    setPassword(state, action) {
      state.passwordSignIn = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setSuccess(state, action) {
      state.success = action.payload;
    },
  },
});

export const { reset, setEmail, setPassword, setError, setSuccess } =
  loginSlice.actions;

export default loginSlice.reducer;
