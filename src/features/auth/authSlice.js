import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const initialState = {
  accessToken: null,
  refreshToken: null,
  user: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
      apiSlice.util.resetApiState();
    },
    setErrors: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, logOut, setErrors, setCredentials } =
  authSlice.actions;
export default authSlice.reducer;
