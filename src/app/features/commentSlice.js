import { createSlice } from "@reduxjs/toolkit";
import { getAllComments } from "./actions";

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    data: [],
    loading: null,
    error: null,
  },
  reducers: {
    pushComment: (state, action) => {
      state.data.results = [...state.data.results, action.payload];
    },
    updateComment: (state, action) => {
      const { id, title } = action.payload;
      const findComment = state.data.results.find(
        (comment) => comment._id === id
      );
      if (findComment) {
        findComment.title = title;
      }
    },
    deleteComment: (state, action) => {
      if (state.data) {
        state.data.results = state.data.results.filter(
          (item) => item._id !== action.payload.id
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllComments.pending, (state) => {
        state.data = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllComments.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllComments.rejected, (state, action) => {
        state.error = action?.error?.message || action.payload;
        state.loading = false;
      });
  },
});

export const { pushComment, updateComment, deleteComment } =
  commentSlice.actions;
export default commentSlice.reducer;
