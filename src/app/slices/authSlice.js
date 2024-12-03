import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  refreshToken: null,
  user: null,
  userProfileImage: null,
  isLoggedIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.isLoggedIn = true;
      console.log(action.payload);
      state.user = action.payload.data.user;

      state.accessToken = action.payload.data.accessToken;
      state.refreshToken = action.payload.data.refreshToken;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    setUserProfileImage: (state, action) => {
      console.log(action.payload);
      state.userProfileImage = action.payload;
      localStorage.setItem("userProfileImage", JSON.stringify(action.payload));
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

export const {
  loginSuccess,
  logOut,
  setErrors,
  setCredentials,
  setUserProfileImage,
} = authSlice.actions;
export default authSlice.reducer;
