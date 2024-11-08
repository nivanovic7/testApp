import { apiSlice } from "../../app/api/apiSlice";
import { CREATE_OUTFIT_URL, OUTFITS_URL } from "../../utils/config.js";

const postApiSlice = apiSlice.injectEndpoints({
  tagTypes: ["Outfits"],
  endpoints: (builder) => ({
    getOutfits: builder.query({
      query: () => OUTFITS_URL,
      providesTags: ["Outfits"],
    }),

    deleteOutfit: builder.mutation({
      query: (id) => ({
        url: `${OUTFITS_URL}/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["Outfits"],
    }),

    createOutfit: builder.mutation({
      query: (post) => ({
        url: CREATE_OUTFIT_URL,
        body: post,
        method: "POST",
      }),
      invalidatesTags: ["Outfits"],
    }),

    createComment: builder.mutation({
      query: (payload) => {
        return {
          url: `${OUTFITS_URL}/${payload.postId}/comment`,
          body: { comment: payload.comment },
          method: "POST",
        };
      },
      invalidatesTags: ["Outfits"],
    }),
  }),
});

export const {
  useGetOutfitsQuery,
  useDeleteOutfitMutation,
  useCreateOutfitMutation,
  useCreateCommentMutation,
} = postApiSlice;
