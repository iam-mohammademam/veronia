/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuShare2 } from "react-icons/lu";
import ShareIcons from "./shareIcons";
import { addLike } from "../app/features/blogSlice";
import { addLikeInSingleBlog } from "../app/features/singleBlogSlice";
import { handleLike } from "../utils/functions";
import { hoverClass } from "../utils/exports";
import { indexPath } from "../App";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CardTools = ({ item, singleBlog }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const [showShareIcons, setShowShareIcons] = useState(null);
  const { loggedInUser } = useSelector((state) => state.others);

  useEffect(() => {
    if (item?.likes?.includes(String(loggedInUser?._id))) {
      setLiked(true);
    }
  }, [item]);
  useEffect(() => {
    if (showShareIcons) {
      window.addEventListener("click", ({ target }) => {
        if (!target.classList.contains("share-icons")) {
          setShowShareIcons(false);
        }
      });
    }
  }, [showShareIcons]);

  return (
    <>
      <div className="flex items-center justify-between w-full border-t border-b mt-3 py-2 pl-2">
        {/* like dislike comment */}
        <ul className="flex items-center gap-3">
          {
            <li className="flex items-center justify-center gap-1.5 font-medium text-gray-800 hover:text-black duration-300 transition-colors">
              <div
                onClick={async () => {
                  if (!loggedInUser) {
                    toast.loading("Please login or register.");
                    return navigate(`/${indexPath}/sign-in`);
                  } else {
                    if (loggedInUser?._id === item?.author?._id) {
                      return;
                    } else {
                      if (singleBlog) {
                        dispatch(
                          addLikeInSingleBlog({
                            blogId: item?._id,
                            userId: loggedInUser._id,
                          })
                        );
                      } else {
                        dispatch(
                          addLike({
                            blogId: item?._id,
                            userId: loggedInUser._id,
                          })
                        );
                      }
                      setLiked(!liked);
                      await handleLike(item?._id);
                    }
                  }
                }}
                className={`${hoverClass}`}
              >
                {liked ? (
                  <FaHeart className="text-xl" />
                ) : (
                  <FaRegHeart className="text-xl" />
                )}
              </div>
              {item?.likes?.length}
            </li>
          }

          <li className="flex items-center gap-1.5 font-medium cursor-pointer text-gray-800 hover:text-black duration-300 transition-colors">
            <IoChatbubbleEllipsesOutline className="text-lg" />
            {item?.comments?.length}
          </li>
        </ul>
        {/* share options */}
        {singleBlog ? (
          <ShareIcons data={item} />
        ) : (
          <div className="relative">
            <div
              onClick={() => {
                setShowShareIcons(!showShareIcons);
              }}
              className={`${hoverClass} share-icons`}
            >
              <LuShare2 className="text-xl share-icons" />
            </div>
            <div
              className={`absolute top-1/2 -translate-y-1/2 mr-2 ${
                showShareIcons
                  ? ` right-full opacity-100 pointer-events-auto`
                  : `right-0 opacity-0 pointer-events-none`
              } transition-all duration-300`}
            >
              <ShareIcons data={item} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default CardTools;
