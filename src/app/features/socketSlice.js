import { createSlice } from "@reduxjs/toolkit";

const socketSlice = createSlice({
  name: "blogs",
  initialState: {
    data: null,
    loading: null,
    error: null,
  },
  reducers: {},
});

export default socketSlice.reducer;
