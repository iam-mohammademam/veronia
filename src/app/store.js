import {
  filterBlogSlice,
  searchSlice,
  trendingBlogSlice,
} from "./features/mainSlice";

import blogSlice from "./features/blogSlice";
import chatSlice from "./features/chatSlice";
import commentSlice from "./features/commentSlice";
import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./features/messageSlice";
import myBlogsSlice from "./features/myBlogsSlice";
import singleBlogSlice from "./features/singleBlogSlice";
import socketSlice from "./features/socketSlice";

export const store = configureStore({
  reducer: {
    blogs: blogSlice,
    singleBlog: singleBlogSlice,
    comments: commentSlice,
    search: searchSlice,
    filterBlogs: filterBlogSlice,
    myBlogs: myBlogsSlice,
    trendingBlogs: trendingBlogSlice,
    socket: socketSlice,
    chats: chatSlice,
    messages: messageSlice,
  },
});
