import { createSlice } from "@reduxjs/toolkit";
import { getAllMessages } from "../actions/getAllMessages";

const messageSlice = createSlice({
  name: "chats",
  initialState: {
    data: [],
    loading: null,
    error: null,
  },
  reducers: {
    addMessage: (state, action) => {
      if (!action.payload || !state.data) {
        return;
      } else {
        state.data.results.push(action.payload);
      }
    },
    deleteMessage: (state, action) => {
      if (!action.payload.id || !state.data) {
        return;
      } else {
        state.data.results = state?.data?.results?.filter(
          (item) => item?._id !== action.payload.id
        );
      }
    },
    updateMessage: (state, action) => {
      const { _id, message } = action.payload;
      const findMessage = state.data.results.find(
        (message) => message._id === _id
      );
      if (findMessage) {
        findMessage.message = message;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMessages.pending, (state) => {
        state.data = null;
        state.loading = true;
        state.error = null; // Reset error state
      })
      .addCase(getAllMessages.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllMessages.rejected, (state, action) => {
        state.error = action?.error?.message || action.payload;
        state.loading = false;
      });
  },
});
export const { addMessage, deleteMessage, updateMessage } =
  messageSlice.actions;
export default messageSlice.reducer;
