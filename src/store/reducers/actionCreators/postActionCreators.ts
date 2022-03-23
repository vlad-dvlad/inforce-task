import { createAsyncThunk } from "@reduxjs/toolkit";
import { postsAPI } from "../../../helpers/postsAPI";
import { IPost } from "../../../models/IPost";

export const fetchPosts = createAsyncThunk(
  "post/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await postsAPI.get<IPost[]>("posts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Error! Posts didn't load");
    }
  }
);