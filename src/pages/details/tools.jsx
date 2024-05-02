/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { handleDislike, handleLike } from "../../utils/functions";
import { getItemWithKey } from "../../utils/storedItems";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addDislikeInBlog,
  addLikeInBlog,
} from "../../app/features/singleBlogSlice";
import { hoverClass } from "../../utils/exports";
import ShareIcons from "../../components/shareIcons";

const Tools = ({ data }) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const user = getItemWithKey("user");
  useEffect(() => {
    if (data?.likes?.includes(user?._id)) {
      setIsLiked(true);
    }
    if (data?.dislikes?.includes(user?._id)) {
      setIsDisliked(true);
    }
  }, [data]);

  return (
    <>
      <div className="flex items-center justify-between w-full border-t border-b mt-3 py-2 pl-1">
        {/* like dislike comment */}
        <ul className="flex items-center gap-4">
          {
            <li className="flex items-center justify-center gap-1.5 font-medium cursor-pointer text-gray-800 hover:text-black duration-300 transition-colors">
              {isLiked ? (
                <BiSolidLike className="text-xl" />
              ) : (
                <div
                  onClick={async () => {
                    if (user?._id) {
                      if (user?._id === data?.author?._id) {
                        return;
                      } else {
                        setIsLiked(true);
                        setIsDisliked(false);
                        dispatch(
                          addLikeInBlog({
                            userId: user?._id,
                            blogId: data?._id,
                          })
                        );

                        await handleLike(data?._id);
                      }
                    }
                  }}
                  className={` ${
                    user?._id === data?.author?._id ? "" : hoverClass
                  }`}
                >
                  <BiLike className="text-xl" />
                </div>
              )}
              {data?.likes?.length}
            </li>
          }
          <li className="flex items-center gap-1.5 font-medium cursor-pointer text-gray-800 hover:text-black duration-300 transition-colors">
            {isDisliked ? (
              <BiSolidDislike className="text-xl" />
            ) : (
              <div
                onClick={async () => {
                  if (user?._id) {
                    if (user?._id === data?.author?._id) {
                      return;
                    } else {
                      setIsLiked(false);
                      setIsDisliked(true);
                      dispatch(
                        addDislikeInBlog({
                          userId: user?._id,
                          blogId: data?._id,
                        })
                      );

                      await handleDislike(data?._id);
                    }
                  }
                }}
                className={` ${
                  user?._id === data?.author?._id ? "" : hoverClass
                }`}
              >
                <BiDislike className="text-xl" />
              </div>
            )}
            {data?.dislikes?.length}
          </li>
          <li className="flex items-center gap-1.5 font-medium cursor-pointer text-gray-800 hover:text-black duration-300 transition-colors">
            <IoChatbubbleEllipsesOutline className="text-lg" />
            {data?.comments?.length}
          </li>
        </ul>
        <ShareIcons data={data} />
        {/* share options */}
      </div>
    </>
  );
};
export default Tools;
