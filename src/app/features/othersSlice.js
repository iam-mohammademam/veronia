import { createSlice } from "@reduxjs/toolkit";

const othersSlice = createSlice({
  name: "blogs",
  initialState: {
    updateBlog: null,
    loggedInUser: null,
    activeMenu: "profile",
    mobileMenu: null,
  },
  reducers: {
    setUpdateBlog: (state, action) => {
      state.updateBlog = action.payload;
    },
    addLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
    setMobileMenu: (state, action) => {
      state.mobileMenu = action.payload;
    },
  },
});
export const {
  setUpdateBlog,
  addLoggedInUser,
  setActiveMenu,
  setMobileMenu,
  showShareIcons,
} = othersSlice.actions;
export default othersSlice.reducer;
