import { apiSlice } from "../../app/api/apiSlice";
import { OUTFITS_URL } from "../../utils/config";

const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOutfits: builder.query({
      query: () => OUTFITS_URL,
    }),
  }),
});

export const { useGetOutfitsQuery } = postApiSlice;
