import { createSlice } from "@reduxjs/toolkit";
import { getItemWithKey } from "../../utils/storedItems";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const loggedInUser = getItemWithKey("user");

const fileSerializer = (file) => JSON.stringify(file);
const fileDeserializer = (fileString) => JSON.parse(fileString);

const initialState = {
  updateBlog: null,
  loggedInUser: null,
  activeMenu: "profile",
  mobileMenu: null,
  initialState: {
    avatar: loggedInUser?.avatar || null, // Store the full File object
    fullName: loggedInUser?.fullName || "",
    email: loggedInUser?.email || "",
    username: loggedInUser?.username || "",
    password: "",
  },
};

const othersSlice = createSlice({
  name: "blogs",
  initialState,
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
    setInitialState: (state, action) => {
      if (action.payload) {
        const { key, value } = action.payload;
        state.initialState[key] = value;
      }
    },
  },
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    serialize: (file) => fileSerializer(file),
    deserialize: (fileString) => fileDeserializer(fileString),
  },
  othersSlice.reducer
);

export const {
  setUpdateBlog,
  addLoggedInUser,
  setActiveMenu,
  setMobileMenu,
  showShareIcons,
  setInitialState,
} = othersSlice.actions;

export default persistedReducer;
