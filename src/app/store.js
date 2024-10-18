import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import userSlice from "./features/user/userSlice";
import postSlice from "./features/posts/postSlice";
import { apiSlice } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    user: userSlice,
    post: postSlice,
  },
});

export default store;
