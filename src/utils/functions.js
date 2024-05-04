import { getItemWithKey, removeItemWithKey } from "./storedItems";

import axios from "axios";
import { baseurl } from "./exports";
import { putRequest } from "../app/requests/putRequest";
import toast from "react-hot-toast";

const token = getItemWithKey("token");

export const handleLike = async (blogId) => {
  if (!token || !blogId) {
    return toast.error("You have to login first!");
  }
  try {
    await putRequest(`/like/${blogId}`);

    return { success: true };
  } catch (error) {
    return error?.response?.data?.message;
  }
};
export const handlePostComment = async (blogId, value) => {
  try {
    const res = await axios.post(
      baseurl + `/comment/${blogId}`,
      { title: value },
      { headers: { authorization: token } }
    );

    return { result: res.data.result };
  } catch (error) {
    return error?.response?.data?.message;
  }
};
export const handleUpdateComment = async (commentId, value) => {
  if (!token || !commentId) {
    return;
  }
  try {
    const res = await putRequest(`/comment/${commentId}`, { title: value });
    return { result: res.data.result };
  } catch (error) {
    return error?.response?.data?.message;
  }
};
export const handleDeleteComment = async (commentId, blogId) => {
  if (!token || !commentId || !blogId) {
    return;
  }
  try {
    await axios.delete(baseurl + `/comment/${commentId}?blogId=${blogId}`, {
      headers: { authorization: token },
    });
    return { success: true };
  } catch (error) {
    return error?.response?.data?.message;
  }
};
export const handleDeleteBlog = async (blogId) => {
  if (!blogId) {
    return;
  }
  try {
    const res = await axios.delete(`${baseurl}/blogs/${blogId}`, {
      headers: { authorization: token },
    });
    return toast.success(res?.data?.message);
  } catch (error) {
    return toast.error(
      error?.response?.data?.message || "Internal server error!"
    );
  }
};
export const handleLogout = () => {
  removeItemWithKey("user");
  removeItemWithKey("token");
};
