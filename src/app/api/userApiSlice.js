import { apiSlice } from "./apiSlice";

const GET_USER_SETTINGS_API = "user/settings/getUser";
const UPDATE_USER_SETTINGS_API = "user/settings";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserSettings: builder.query({
      query: () => GET_USER_SETTINGS_API,
      providesTags: ["UserSettings"],
    }),
    setUserLocation: builder.mutation({
      query: ({ longitude, latitude }) => ({
        url: UPDATE_USER_SETTINGS_API,
        method: "PUT",
        body: {
          userCurrentLocation: {
            longitude,
            latitude,
          },
        },
      }),
      invalidatesTags: ["UserSettings", "Outfits"],
    }),
  }),
});

export const { useGetUserSettingsQuery, useSetUserLocationMutation } =
  userApiSlice;
