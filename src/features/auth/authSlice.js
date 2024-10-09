import { createSlice } from "@reduxjs/toolkit";
import { facebookLogin, login, register } from "./authActions";

const initialState = {
  token: null,
  isLoggedIn: false,
  loading: false,
  errors: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.isLoggedIn = false;
    },
    setErrors: (state, action) => {
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(facebookLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = action.payload;
        console.log("WITH FB");
      });
  },
});

export const { loginSuccess, logOut, setErrors } = authSlice.actions;
export default authSlice.reducer;
