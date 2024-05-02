import { getItemWithKey, removeItemWithKey } from "./storedItems";

import axios from "axios";
import { baseurl } from "./exports";
import { indexPath } from "../App";
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
    console.error(error);
    return error?.response?.data?.message;
  }
};
export const handleDislike = async (blogId) => {
  if (!token || !blogId) {
    return toast.error("You have to login first!");
  }
  try {
    await putRequest(`/dislike/${blogId}`);
    return { success: true };
  } catch (error) {
    console.error(error);
    return error?.response?.data?.message;
  }
};
export const handlePostComment = async (blogId, value) => {
  try {
    await axios.post(
      baseurl + `/comment/${blogId}`,
      { title: value },
      { headers: { authorization: token } }
    );
    return { success: true };
  } catch (error) {
    console.error(error);
    return error?.response?.data?.message;
  }
};
export const handleUpdateComment = async (commentId, value) => {
  if (!token || !commentId) {
    return;
  }
  try {
    await putRequest(`/comment/${commentId}`, { title: value });
    return { success: true };
  } catch (error) {
    console.error(error);
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
    console.error(error);
    return error?.response?.data?.message;
  }
};
export const handleLogout = () => {
  removeItemWithKey("user");
  removeItemWithKey("token");
  window.open(`/${indexPath}`);
  location.reload();
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
export const createChat = async (id) => {
  if (!id) {
    return;
  }
  try {
    const res = await axios.post(
      `${baseurl}/chat/create`,
      { user_2: id },
      {
        headers: {
          authorization: token,
        },
      }
    );
    // console.log(res);
    return { id: res?.data?.id };
  } catch (error) {
    console.error(error);
    return error?.response?.data?.message;
  }
};
export const handleDelChat = async (id) => {
  if (!id) {
    return;
  }
  try {
    await axios.delete(`${baseurl}/chat/delete`, {
      headers: {
        authorization: token,
        id,
      },
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    return error?.response?.data?.message;
  }
};

export const createMessage = async ({ chatId, message }) => {
  if (!message || !chatId) {
    return;
  }
  try {
    const res = await axios.post(
      `${baseurl}/message/create`,
      { message },
      {
        headers: {
          authorization: token,
          id: chatId,
        },
      }
    );
    return res?.data?.result;
  } catch (error) {
    console.log(error);
    return error?.response;
  }
};
export const handleDeleteMessage = async (messageId) => {
  if (!messageId) {
    return;
  }
  try {
    const res = await axios.delete(
      `${baseurl}/message/delete`,

      {
        headers: {
          authorization: token,
          id: messageId,
        },
      }
    );
    return res?.data?.result;
  } catch (error) {
    return error?.response;
  }
};
export const handleUpdateMessage = async (messageId, message) => {
  if (!messageId || !message) {
    return;
  }
  try {
    const res = await axios.put(
      `${baseurl}/message/update`,
      { message },
      {
        headers: {
          authorization: token,
          id: messageId,
        },
      }
    );

    return res?.data?.result;
  } catch (error) {
    return error?.response;
  }
};
