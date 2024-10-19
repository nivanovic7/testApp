import { apiSlice } from "../../app/api/apiSlice";
import { GET_USER_SETTINGS_API } from "../../utils/config";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserSettings: builder.query({
      query: () => GET_USER_SETTINGS_API,
    }),
  }),
});

export const { useGetUserSettingsQuery } = userApiSlice;
