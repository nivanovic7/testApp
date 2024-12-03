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
      console.log("AUTH SLICE");
      console.log(action.payload);
      state.isLoggedIn = true;
      state.user = action.payload.data.user;
      state.userProfileImage = action.payload.data.userProfileImage;
      state.accessToken = action.payload.data.accessToken;
      state.refreshToken = action.payload.data.refreshToken;
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
