import { createSlice } from "@reduxjs/toolkit";
import { getUserSettings, setCurrentPosition } from "./userActions";

const initialState = {
  user: null,
  userCurrentLocation: null,
  userSettings: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setCreatedAt: (state, action) => {
      state.createdAt = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserSettings.fulfilled, (state, action) => {
        state.loading = false;
        state.userSettings = action.payload;
      })
      .addCase(getUserSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(setCurrentPosition.fulfilled, (state, action) => {
        state.userCurrentLocation = {
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        };
      });
  },
});

export const { setUser, setCreatedAt, setUserLocation } = userSlice.actions;
export default userSlice.reducer;
