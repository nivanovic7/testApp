import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { CREATE_OUTFIT_URL, OUTFITS_URL } from "../../utils/config";

export const getOutfits = createAsyncThunk("post/getOutfits", async () => {
  try {
    const res = await api.get(OUTFITS_URL, { limit: 10, offset: 10 });
    console.log(res);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
});

export const deleteOutfit = createAsyncThunk(
  "posts/deleteOutfit",
  async (id) => {
    try {
      const res = await api.delete(`${OUTFITS_URL}/${id}/delete`);
      console.log(res);
      return id;
    } catch (err) {
      console.log(err);
    }
  }
);

export const createOutfit = createAsyncThunk(
  "post/createOutfit",
  async (postData) => {
    try {
      const res = await api.post(CREATE_OUTFIT_URL, postData);
      for (var pair of postData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      console.log(postData);
      // console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }
);
