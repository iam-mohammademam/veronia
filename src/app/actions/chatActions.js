import axios from "axios";
import { baseurl } from "../../utils/exports";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getItemWithKey } from "../../utils/storedItems";

const token = getItemWithKey("token");

const mainAction = (name) =>
  createAsyncThunk(name, async (endpoint, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${baseurl + endpoint}`, {
        headers: { Authorization: token },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  });
export const getAllChats = mainAction("getAllChats");
