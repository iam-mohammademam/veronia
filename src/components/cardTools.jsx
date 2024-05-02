/* eslint-disable react/prop-types */
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { addDislike, addLike } from "../app/features/blogSlice";
import { handleDislike, handleLike } from "../utils/functions";
import { useDispatch } from "react-redux";
import { hoverClass } from "../utils/exports";
import ShareIcons from "./shareIcons";

const CardTools = ({
  user,
  item,
  isLiked,
  isDisliked,
  setIsDisliked,
  setIsLiked,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex items-center justify-between w-full border-t border-b mt-3 py-2 pl-2">
        {/* like dislike comment */}
        <ul className="flex items-center gap-3">
          {
            <li className="flex items-center justify-center gap-1.5 font-medium text-gray-800 hover:text-black duration-300 transition-colors">
              {isLiked ? (
                <BiSolidLike className="text-xl" />
              ) : (
                <div
                  onClick={async () => {
                    if (user?._id) {
                      if (user?._id === item?.author?._id) {
                        return;
                      } else {
                        setIsLiked(true);
                        setIsDisliked(false);
                        dispatch(
                          addLike({ userId: user?._id, blogId: item?._id })
                        );
                        await handleLike(item?._id);
                      }
                    }
                  }}
                  className={` ${
                    user?._id === item?.author?._id ? "" : hoverClass
                  }`}
                >
                  <BiLike className="text-xl" />
                </div>
              )}
              {item?.likes?.length}
            </li>
          }

          <li className="flex items-center gap-1.5 font-medium text-gray-800 hover:text-black duration-300 transition-colors">
            {isDisliked ? (
              <BiSolidDislike className="text-xl" />
            ) : (
              <div
                onClick={async () => {
                  if (user?._id) {
                    if (user?._id === item?.author?._id) {
                      return;
                    } else {
                      setIsDisliked(true);
                      setIsLiked(false);
                      dispatch(
                        addDislike({ userId: user?._id, blogId: item?._id })
                      );
                      await handleDislike(item?._id);
                    }
                  }
                }}
                className={` ${
                  user?._id === item?.author?._id ? "" : hoverClass
                }`}
              >
                <BiDislike className="text-xl" />
              </div>
            )}
            {item?.dislikes?.length}
          </li>
          <li className="flex items-center gap-1.5 font-medium cursor-pointer text-gray-800 hover:text-black duration-300 transition-colors">
            <IoChatbubbleEllipsesOutline className="text-lg" />
            {item?.comments?.length}
          </li>
        </ul>
        {/* share options */}
        <ShareIcons data={item} />
      </div>
    </>
  );
};
export default CardTools;
