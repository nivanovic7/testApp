import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import userSlice from "./features/user/userSlice";
import postSlice from "./features/posts/postSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userSlice,
    post: postSlice,
  },
});

export default store;
