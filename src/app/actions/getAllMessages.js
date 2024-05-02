import axios from "axios";
import { baseurl } from "../../utils/exports";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getItemWithKey } from "../../utils/storedItems";

const token = getItemWithKey("token");

export const getAllMessages = createAsyncThunk(
  "getAllMessages",
  async ({ endpoint, id }, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${baseurl + endpoint}`, {
        headers: { Authorization: token, id },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
