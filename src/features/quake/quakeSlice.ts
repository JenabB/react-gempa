import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getQuake, QuakeModel } from "./";

export interface QuakeState {
  quake: QuakeModel | null;
  success: boolean;
}

const initialState: QuakeState = {
  quake: null,
  success: false,
};

export const quakeSlice = createSlice({
  name: "quake",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuake.pending, (state, action) => {
      state.success = false;
    });
    builder.addCase(getQuake.fulfilled, (state, action) => {
      state.quake = action.payload;
      state.success = true;
    });
  },
});

export const selectQuake = (state: RootState) => state.quake.quake;

export default quakeSlice.reducer;
