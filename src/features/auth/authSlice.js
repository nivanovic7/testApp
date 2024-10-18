import { createSlice } from "@reduxjs/toolkit";
import { facebookLogin, login, register } from "./authActions";

const initialState = {
  token: null,
  isLoggedIn: false,
  loading: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    },
    setErrors: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, logOut, setErrors, setCredentials } =
  authSlice.actions;
export default authSlice.reducer;
