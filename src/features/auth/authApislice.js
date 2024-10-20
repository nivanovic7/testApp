import { apiSlice } from "../../app/api/apiSlice";
import {
  FACEBOOK_LOGIN_URL,
  FACEBOOK_REGISTER_URL,
  LOGIN_URL,
} from "../../utils/config";
import { handleOnQueryStarted } from "../../utils/helpers";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credntials) => ({
        url: LOGIN_URL,
        method: "POST",
        body: { ...credntials },
      }),
      onQueryStarted: handleOnQueryStarted,
    }),
    facebookLogin: builder.mutation({
      query: (credentials) => ({
        url: FACEBOOK_LOGIN_URL,
        method: "POST",
        body: credentials,
      }),
      onQueryStarted: handleOnQueryStarted,
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
} = authApiSlice;
