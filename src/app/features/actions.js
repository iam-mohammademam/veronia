import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseurl } from "../../utils/exports";
import axios from "axios";
import { getItemWithKey } from "../../utils/storedItems";

const token = getItemWithKey("token");

const mainAction = (name) =>
  createAsyncThunk(name, async (endpoint, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${baseurl + endpoint}`, {
        headers: { Authorization: token || "" },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  });

export const getAllBlogs = mainAction("getAllBlogs");
export const getSingleBlog = mainAction("getSingleBlog");
export const getAllComments = mainAction("getAllComments");
export const getBlogByTag = mainAction("getBlogByTag");
export const getSearchData = mainAction("getSearchData");
export const getMyBlogs = mainAction("getMyBlogs");
export const getTrendingBLogs = mainAction("getTrendingBLogs");
