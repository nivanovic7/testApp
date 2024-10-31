import { createSlice } from "@reduxjs/toolkit";

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
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
      localStorage.removeItem("userData");
    },
    setErrors: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, logOut, setErrors, setCredentials } =
  authSlice.actions;
export default authSlice.reducer;
