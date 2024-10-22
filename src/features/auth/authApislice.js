import { apiSlice } from "../../app/api/apiSlice";
import {
  FACEBOOK_LOGIN_URL,
  FACEBOOK_REGISTER_URL,
  LOGIN_URL,
  REGISTER_URL,
} from "../../utils/config";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: LOGIN_URL,
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: REGISTER_URL,
        method: "POST",
        body: credentials,
      }),
    }),
    facebookLogin: builder.mutation({
      query: (credentials) => ({
        url: FACEBOOK_LOGIN_URL,
        method: "POST",
        body: credentials,
      }),
    }),
    facebookRegister: builder.mutation({
      query: (credentials) => ({
        url: FACEBOOK_REGISTER_URL,
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useFacebookLoginMutation,
  useFacebookRegisterMutation,
  useRegisterMutation,
} = authApiSlice;
