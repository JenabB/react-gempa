import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuake = createAsyncThunk("quake/getQuake", async () => {
  try {
    const response: any = await axios
      .get("https://cuaca-gempa-rest-api.vercel.app/quake")
      .then((res) => res.data.data);

    return response;
  } catch (error) {
    console.log(error);
  }
});
