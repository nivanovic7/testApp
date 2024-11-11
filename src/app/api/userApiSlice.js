import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserSettings: builder.query({
      query: () => import.meta.env.VITE_GET_USER_SETTINGS_API,
      providesTags: ["UserSettings"],
    }),
    setUserLocation: builder.mutation({
      query: ({ longitude, latitude }) => ({
        url: import.meta.env.VITE_UPDATE_USER_SETTINGS_API,
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
