import { createSlice } from "@reduxjs/toolkit";
import { getMyBlogs } from "./actions";

const myBlogsSlice = createSlice({
  name: "blogs",
  initialState: {
    data: null,
    loading: null,
    error: null,
  },
  reducers: {
    deleteBlog: (state, action) => {
      if (!action.payload.id || !state.data) {
        return;
      } else {
        state.data.results = state?.data?.results?.filter(
          (item) => item?._id !== action.payload.id
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyBlogs.pending, (state) => {
        state.data = null;
        state.loading = true;
        state.error = null; // Reset error state
      })
      .addCase(getMyBlogs.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getMyBlogs.rejected, (state, action) => {
        state.error = action?.error?.message || action.payload;
        state.loading = false;
      });
  },
});
export const { deleteBlog } = myBlogsSlice.actions;
export default myBlogsSlice.reducer;
