import { createSlice } from "@reduxjs/toolkit";
import { getAllChats } from "../actions/chatActions";

const chatSlice = createSlice({
  name: "chats",
  initialState: {
    data: null,
    loading: null,
    error: null,
  },
  reducers: {
    deleteChat: (state, action) => {
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
      .addCase(getAllChats.pending, (state) => {
        state.data = null;
        state.loading = true;
        state.error = null; // Reset error state
      })
      .addCase(getAllChats.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllChats.rejected, (state, action) => {
        state.error = action?.error?.message || action.payload;
        state.loading = false;
      });
  },
});
export const { deleteChat } = chatSlice.actions;
export default chatSlice.reducer;
