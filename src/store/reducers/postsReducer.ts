import { IPost } from "../../models/IPost";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPosts } from "./actionCreators/postActionCreators";

interface PostsState {
  posts: IPost[];
  totalCount: number;
  isLoading: boolean;
  error: string;
}

const initialState: PostsState = {
  posts: [],
  totalCount: 100,
  isLoading: false,
  error: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
