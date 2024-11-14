import { apiSlice } from "./apiSlice";

const LOGIN_URL = "auth/login";
const FACEBOOK_LOGIN_URL = "auth/facebook/login";
const FACEBOOK_REGISTER_URL = "auth/facebook/register";
const REGISTER_URL = "auth/register";

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
