import { apiSlice } from "../../app/api/apiSlice";

const postApiSlice = apiSlice.injectEndpoints({
  tagTypes: ["Outfits"],
  endpoints: (builder) => ({
    getOutfits: builder.query({
      query: () => import.meta.env.VITE_OUTFITS_URL,
      providesTags: ["Outfits"],
    }),

    deleteOutfit: builder.mutation({
      query: (id) => ({
        url: `${import.meta.env.VITE_OUTFITS_URL}/${id}/delete`,
        method: "DELETE",
      }),
      invalidatesTags: ["Outfits"],
    }),

    createOutfit: builder.mutation({
      query: (post) => ({
        url: import.meta.env.VITE_CREATE_OUTFIT_URL,
        body: post,
        method: "POST",
      }),
      invalidatesTags: ["Outfits"],
    }),

    createComment: builder.mutation({
      query: (payload) => {
        return {
          url: `${import.meta.env.VITE_OUTFITS_URL}/${payload.postId}/comment`,
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
