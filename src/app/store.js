import {
  filterBlogSlice,
  searchSlice,
  trendingBlogSlice,
} from "./features/mainSlice";

import blogSlice from "./features/blogSlice";
import commentSlice from "./features/commentSlice";
import { configureStore } from "@reduxjs/toolkit";
import myBlogsSlice from "./features/myBlogsSlice";
import othersSlice from "./features/othersSlice";
import singleBlogSlice from "./features/singleBlogSlice";

export const store = configureStore({
  reducer: {
    blogs: blogSlice,
    singleBlog: singleBlogSlice,
    comments: commentSlice,
    search: searchSlice,
    filterBlogs: filterBlogSlice,
    myBlogs: myBlogsSlice,
    trendingBlogs: trendingBlogSlice,
    others: othersSlice,
  },
});
