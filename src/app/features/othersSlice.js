import { createSlice } from "@reduxjs/toolkit";

const othersSlice = createSlice({
  name: "blogs",
  initialState: {
    updateBlog: null,
  },
  reducers: {
    setUpdateBlog: (state, action) => {
      console.log(action.payload);
      state.updateBlog = action.payload;
    },
  },
});
export const { setUpdateBlog } = othersSlice.actions;
export default othersSlice.reducer;
