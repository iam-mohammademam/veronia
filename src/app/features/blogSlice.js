import { createSlice } from "@reduxjs/toolkit";
import { getAllBlogs } from "./actions";

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    data: null,
    loading: null,
    error: null,
  },
  reducers: {
    addLike: (state, action) => {
      const { userId, blogId } = action.payload;
      if (state.data) {
        const findBlog = state.data.results.find((item) => item._id === blogId);
        findBlog.likes.push(userId);
        findBlog.dislikes = findBlog.dislikes.filter(
          (dislike) => dislike !== userId
        );
      }
    },
    addDislike: (state, action) => {
      const { userId, blogId } = action.payload;
      if (state.data) {
        const findBlog = state.data.results.find((item) => item._id === blogId);
        findBlog.dislikes.push(userId);
        findBlog.likes = findBlog.likes.filter((like) => like !== userId);
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
      .addCase(getAllBlogs.pending, (state) => {
        state.data = null;
        state.loading = true;
        state.error = null; // Reset error state
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.error = action?.error?.message || action.payload;
        state.loading = false;
      });
  },
});
export const { addLike, addDislike } = blogSlice.actions;
export default blogSlice.reducer;
