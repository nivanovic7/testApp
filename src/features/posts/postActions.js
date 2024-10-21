// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { api } from "../../api/api";
// import { CREATE_OUTFIT_URL, OUTFITS_URL } from "../../utils/config";

// export const getOutfits = createAsyncThunk("post/getOutfits", async () => {
//   try {
//     const res = await api.get(OUTFITS_URL, { limit: 20 });
//     console.log(res);
//     return res.data.data;
//   } catch (err) {
//     console.log(err);
//   }
// });

// export const deleteOutfit = createAsyncThunk(
//   "posts/deleteOutfit",
//   async (id) => {
//     try {
//       const res = await api.delete(`${OUTFITS_URL}/${id}/delete`);
//       console.log(res);
//       return id;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

// export const createOutfit = createAsyncThunk(
//   "post/createOutfit",
//   async (postData, { rejectWithValue }) => {
//     try {
//       const res = await api.post(CREATE_OUTFIT_URL, postData);
//       console.log(res);
//     } catch (err) {
//       console.log(err);
//       return rejectWithValue("Posting Not successfull. Try again!");
//     }
//   }
// );

// export const createComment = createAsyncThunk(
//   "post/createComment",
//   async ({ comment, postId }, { dispatch, rejectWithValue }) => {
//     try {
//       const res = await api.post(`outfits/${postId}/comment`, { comment });
//       console.log(res);
//       dispatch(getOutfits(postId, comment));
//       return res.data.data;
//     } catch (err) {
//       console.log(err);
//       return rejectWithValue("Posting Comment Not successfull. Try again!");
//     }
//   }
// );
