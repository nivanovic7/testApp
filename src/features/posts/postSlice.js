import { createSlice } from "@reduxjs/toolkit";
import { createOutfit, deleteOutfit, getOutfits } from "./postActions";

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
      });
  },
});

export const { setError } = postSlice.actions;

export default postSlice.reducer;
