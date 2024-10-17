import { createSlice } from "@reduxjs/toolkit";
import {
  createComment,
  createOutfit,
  deleteOutfit,
  getOutfits,
} from "./postActions";

const initialState = {
  loading: false,
  posts: [],
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOutfits.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOutfits.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(getOutfits.rejected, (state) => {
        console.log("Rejected");
        state.loading = false;
      })
      .addCase(createOutfit.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOutfit.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(createOutfit.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.error = action.payload;
      })
      .addCase(deleteOutfit.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteOutfit.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.filter((post) => post._id != action.payload);
      })
      .addCase(deleteOutfit.rejected, (state) => {
        console.log("Rejected");
        state.loading = false;
      })
      .addCase(createComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(createComment.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createComment.rejected, (state) => {
        console.log("Comment not created");
        state.loading = false;
      });
  },
});

export const { setError } = postSlice.actions;

export function getComments(state, postId) {
  const post = state.post.posts.filter((post) => post._id === postId);
  return post[0].outfitPostComment;
}

export default postSlice.reducer;
