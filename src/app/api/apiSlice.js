import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { API_URL, REFRESH_TOKEN_URL } from "../../utils/config";
import { logOut, setCredentials } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authotization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log("RESULT");
  console.log(result);

  if (result?.error?.originalStatus === 403) {
    console.log("Sending refresh token!");
    const refreshToken = api.getState.auth.refreshToken;
    const refreshResult = await baseQuery(
      { url: REFRESH_TOKEN_URL, body: { refreshToken } },
      api,
      extraOptions
    );

    console.log("REFRESH RESULT");
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
