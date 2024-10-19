import { apiSlice } from "../../app/api/apiSlice";
import { LOGIN_URL } from "../../utils/config";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credntials) => ({
        url: LOGIN_URL,
        method: "POST",
        body: { ...credntials },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
