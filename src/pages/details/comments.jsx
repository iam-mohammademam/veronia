import { GoChevronDown, GoChevronUp } from "react-icons/go";
import {
  deleteComment,
  pushComment,
  updateComment,
} from "../../app/features/commentSlice";
import {
  handleDeleteComment,
  handlePostComment,
  handleUpdateComment,
} from "../../utils/functions";
import { useDispatch, useSelector } from "react-redux";
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { FiEdit } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { IoMdPaperPlane } from "react-icons/io";
import { format } from "timeago.js";
import { getAllComments } from "../../app/features/actions";
import { getItemWithKey } from "../../utils/storedItems";
import { indexPath } from "../../App";
import { noProfile } from "../../utils/exports";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Comments = ({ blogId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updateCommentId, setUpdateCommentId] = useState(false);
  const [comment, setComment] = useState("");
  const [showComments, setShowComment] = useState(false);

  useEffect(() => {
    if (!blogId) {
      return null;
    }
    dispatch(getAllComments(`/comments/${blogId}`));
  }, [blogId]);

  const { data } = useSelector((state) => state.comments);
  let user = getItemWithKey("user");

  const handleSubmit = async () => {
    if (!user?._id) {
      navigate(`/${indexPath}`);
      return toast.error("Please login or register.");
    }
    if (!comment) {
      return;
    }
    if (updateCommentId) {
      dispatch(updateComment({ id: updateCommentId, title: comment }));
      await handleUpdateComment(updateCommentId, comment);
      setComment("");
    } else {
      if (!user?._id) {
        return toast.error("You have to login first!");
      } else {
        const { result } = await handlePostComment(blogId, comment);

        if (result) {
          dispatch(
            pushComment({
              id: result?._id,
              title: comment,
              author: {
                fullName: user?.fullName,
                _id: user?._id,
                avatar: user?.avatar,
              },
            })
          );
          setComment("");
        }
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        {data?.results?.length <= 0 ? (
          <h1 className="font-medium text-gray-500 my-3">No comments here</h1>
        ) : (
          <>
            <h1 className="font-medium text-md mt-5 mb-3">
              Comments ({data?.results?.length || 0})
            </h1>
            <span
              onClick={() => {
                setShowComment(!showComments);
              }}
              className="flex items-center gap-1.5 cursor-pointer text-sm font-medium"
            >
              {!showComments ? (
                <>
                  Show comments
                  <GoChevronDown />
                </>
              ) : (
                <>
                  Hide comments
                  <GoChevronUp />
                </>
              )}
            </span>
          </>
        )}
      </div>

      <div
        className={`${
          !showComments ? "h-0 overflow-hidden" : "h-full"
        }  duration-300 transition-[height]`}
      >
        <ul className="flex flex-col gap-y-1 pl-3 pb-2 mb-4">
          {data?.results?.map((item, index) => {
            return (
              <li key={index} className="flex gap-x-2 pt-2 w-fit">
                <div className="flex gap-2">
                  <div className="w-8 h-8 shrink-0 bg-black rounded-full overflow-hidden cursor-pointer">
                    <img
                      src={item?.author?.avatar || noProfile}
                      alt="avatar"
                      className="h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="relative flex flex-col bg-gray-100 rounded-md w-auto px-3 py-1">
                      <h1 className="font-semibold cursor-pointer montserrat text-sm">
                        {item?.author?.fullName}
                      </h1>
                      <span>{item?.title}</span>
                      {/* edit and delete button */}
                      {item?.author?._id === user?._id && (
                        <div className="absolute top-1/2 -right-7 z-10 -translate-y-1/2 flex items-center flex-col gap-y-2">
                          <FiEdit
                            onClick={() => {
                              setUpdateCommentId(item?._id);
                              setComment(item?.title);
                            }}
                            className="cursor-pointer text-gray-800 hover:text-black duration-300 transition-all"
                          />
                          <GoTrash
                            onClick={async () => {
                              dispatch(deleteComment({ id: item?._id }));
                              await handleDeleteComment(item?._id, blogId);
                            }}
                            className="cursor-pointer text-gray-800 hover:text-black duration-300 transition-all"
                          />
                        </div>
                      )}
                    </div>

                    {/* time and reply */}
                    <div className="flex items-center gap-3 justify-between">
                      <small className="font-medium">
                        {format(item?.createdAt)}
                      </small>
                      <span className="flex gap-x-3">
                        <small className="cursor-pointer font-medium">
                          Like
                        </small>
                        <small className="cursor-pointer font-medium">
                          Reply
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* comment box */}
      <div className="flex items-center gap-2 h-10 p-1 rounded-3xl bg-gray-100 ">
        <input
          type="text"
          value={comment}
          onKeyDown={async (e) => {
            if (e.key === "Enter") {
              if (updateCommentId) {
                dispatch(
                  updateComment({ id: updateCommentId, title: comment })
                );
                await handleUpdateComment(updateCommentId, comment);
                setComment("");
              } else {
                handleSubmit();
              }
            }
          }}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Type your comment here"
          className="w-full h-full pl-3 bg-transparent"
        />
        <div
          onClick={handleSubmit}
          className="bg-gray-200 hover:bg-gray-300 duration-300 transition-colors rounded-full h-full w-9 flex items-center justify-center cursor-pointer"
        >
          <IoMdPaperPlane className="text-lg" />
        </div>
      </div>
    </>
  );
};
export default Comments;
