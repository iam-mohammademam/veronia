import { createSlice } from "@reduxjs/toolkit";
import { getSingleBlog } from "./actions";

const singleBlogSlice = createSlice({
  name: "blog",
  initialState: {
    data: null,
    loading: null,
    error: null,
  },
  reducers: {
    addLikeInBlog: (state, action) => {
      const { userId } = action.payload;
      if (state.data) {
        state.data.likes.push(userId);
        state.data.dislikes = state.data.dislikes.filter(
          (dislike) => dislike !== userId
        );
      }
    },
    addDislikeInBlog: (state, action) => {
      const { userId } = action.payload;
      if (state.data) {
        state.data.dislikes.push(userId);
        state.data.likes = state.data.likes.filter((like) => like !== userId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSingleBlog.pending, (state) => {
        state.data = null;
        state.loading = true;
        state.error = null; // Reset error state
      })
      .addCase(getSingleBlog.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getSingleBlog.rejected, (state, action) => {
        state.error = action?.error?.message || action.payload;
        state.loading = false;
      });
  },
});
export const { addLikeInBlog, addDislikeInBlog } = singleBlogSlice.actions;
export default singleBlogSlice.reducer;
