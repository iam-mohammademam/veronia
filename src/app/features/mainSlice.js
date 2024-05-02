import { createSlice } from "@reduxjs/toolkit";
import { getBlogByTag, getSearchData, getTrendingBLogs } from "./actions";

const generateReducersForAction = (builder, action) => {
  builder
    .addCase(action.pending, (state) => {
      state.loading = true;
      state.data = [];
    })
    .addCase(action.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    })
    .addCase(action.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.data = [];
    });
};
const mainSlice = (name, actions) => {
  const slice = createSlice({
    name: name,
    initialState: {
      data: [],
      loading: null,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      actions.forEach((action) => generateReducersForAction(builder, action));
    },
  });

  return slice.reducer;
};

export const filterBlogSlice = mainSlice("blog", [getBlogByTag]);
export const searchSlice = mainSlice("search", [getSearchData]);
export const trendingBlogSlice = mainSlice("trending", [getTrendingBLogs]);
