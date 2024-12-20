import { apiSlice } from "./apiSlice";

const GET_USER_SETTINGS_API = "user/settings/getUser";
const UPDATE_USER_SETTINGS_API = "user/settings";
const GET_RECOMMENDED_FRIENDS = "account/recommended-friends";
const UPDATE_PROFILE_IMAGE = "/user/settings/update-profile-image";

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
    getRecommendedFriends: builder.query({
      query: () => GET_RECOMMENDED_FRIENDS,
    }),
    updateProfileImage: builder.mutation({
      query: (userProfileImage) => ({
        url: UPDATE_PROFILE_IMAGE,
        method: "PUT",
        body: userProfileImage,
      }),
    }),
  }),
});

export const {
  useGetUserSettingsQuery,
  useSetUserLocationMutation,
  useGetRecommendedFriendsQuery,
  useUpdateProfileImageMutation,
} = userApiSlice;
