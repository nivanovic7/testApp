import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import {
  GET_USER_SETTINGS_API,
  UPDATE_USER_SETTINGS_API,
} from "../../utils/config";
import { getUserLocation } from "../../utils/helpers";

export const getUserSettings = createAsyncThunk(
  "user/getUserSettings",
  async () => {
    try {
      const res = await api.get(GET_USER_SETTINGS_API);
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const setCurrentPosition = createAsyncThunk(
  "user/setCurrentPosition",
  async (_, { dispatch }) => {
    try {
      const res = await getUserLocation();
      const { latitude, longitude } = res.coords;
      dispatch(updateUserLocation({ latitude, longitude }));

      return { latitude, longitude };
    } catch (err) {
      return err.message;
    }
  }
);

export const updateUserLocation = createAsyncThunk(
  "user/updateUserLocation",
  async ({ latitude, longitude }) => {
    try {
      await api.put(UPDATE_USER_SETTINGS_API, {
        userCurrentLocation: {
          longitude,
          latitude,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
);
