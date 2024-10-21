import { createAsyncThunk } from "@reduxjs/toolkit";
// import { api } from "../../api/api";
import {
  CHANGE_PASSWORD_URL,
  FORGOT_PASSWORD_REQUEST_URL,
} from "../../utils/config";

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (credentials) => {
    try {
      const res = await api.post(CHANGE_PASSWORD_URL, credentials);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
);

export const forgotPasswordRequest = createAsyncThunk(
  "auth/forgotPasswordRequest",
  async (userEmail) => {
    try {
      const res = await api.post(FORGOT_PASSWORD_REQUEST_URL, { userEmail });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
);

// export const facebookLogin = createAsyncThunk(
//   "auth/loginUserFacebook",
//   async ({ credentials, navigate }, { dispatch }) => {
//     try {
//       const res = await api.post(FACEBOOK_LOGIN_URL, credentials);

//       handleTokens(res);

//       dispatch(setUser(res.data.data.user));
//       navigate("/profile");
//       return res.data;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

// export const facebookRegister = createAsyncThunk(
//   "auth/registerUser",
//   async ({ credentials, navigate }, { dispatch }) => {
//     try {
//       console.log(credentials);
//       await api.post(FACEBOOK_REGISTER_URL, credentials);
//       navigate("/setPassword");
//     } catch (err) {
//       if (err.status === 409) {
//         dispatch(facebookLogin({ credentials, navigate }));
//       } else {
//         console.log(err);
//       }
//     }
//   }
// );

// export const deleteUser = createAsyncThunk("auth/deleteUser", async () => {
//   try {
//     const res = await api.put(DELETE_USER_URL, {
//       data: { userPassword: "Password1!" },
//     });
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// });

// export const login = createAsyncThunk(
//   "auth/loginUser",

//   async ({ credentials, navigate }, { dispatch, rejectWithValue }) => {
//     try {
//       const res = await api.post(LOGIN_URL, credentials);
//       if (res.status !== 200) throw new Error();

//       handleTokens(res);
//       dispatch(setUser(res.data.data.user));
//       navigate("/profile");

//       return res.data;
//     } catch (err) {
//       console.log(err);
//       return rejectWithValue(err.response.data.message);
//     }
//   }
// );

// export const register = createAsyncThunk(
//   "auth/registerUser",
//   async ({ userName, userEmail, userPassword, navigate }) => {
//     try {
//       const res = await api.post(REGISTER_URL, {
//         userName,
//         userPassword,
//         userEmail,
//       });
//       navigate("/login");
//       return res.data;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );
