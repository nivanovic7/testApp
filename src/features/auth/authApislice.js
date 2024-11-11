import { apiSlice } from "../../app/api/apiSlice";

console.log(import.meta.env.VITE_LOGIN_URL);

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: import.meta.env.VITE_LOGIN_URL,
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: import.meta.env.VITE_REGISTER_URL,
        method: "POST",
        body: credentials,
      }),
    }),
    facebookLogin: builder.mutation({
      query: (credentials) => ({
        url: import.meta.env.VITE_FACEBOOK_LOGIN_URL,
        method: "POST",
        body: credentials,
      }),
    }),
    facebookRegister: builder.mutation({
      query: (credentials) => ({
        url: import.meta.env.VITE_FACEBOOK_REGISTER_URL,
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
