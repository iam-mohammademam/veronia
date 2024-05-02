/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef, useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteMessage } from "../../app/features/messageSlice";
import { format } from "timeago.js";
import { getItemWithKey } from "../../utils/storedItems";
import { handleDeleteMessage } from "../../utils/functions";
import { noProfile } from "../../utils/exports";
import { useDispatch } from "react-redux";

/* eslint-disable react/prop-types */
const Message = ({ item, currentChatUser, setMessage, setIsUpdateId }) => {
  const messageRef = useRef();
  const dispatch = useDispatch();
  const [own, setOwn] = useState(false);

  const user = getItemWithKey("user");

  useEffect(() => {
    if (item?.sender === user?._id) {
      setOwn(true);
    }
  }, [item]);
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [item]);

  return (
    <div
      ref={messageRef}
      className={`flex gap-2 ${
        own ? "ml-auto flex-row-reverse" : " "
      } max-w-[49%] group/message`}
    >
      <img
        src={own ? user?.avatar : currentChatUser?.avatar || noProfile}
        alt=""
        className="h-8 w-8 shrink-0 rounded-full overflow-hidden mt-auto cursor-pointer"
      />
      <div className="flex flex-col w-fit relative">
        <span
          className={`${
            own
              ? " rounded-tr-xl rounded-tl-xl rounded-bl-xl bg-gray-500/40"
              : " rounded-tr-xl rounded-tl-xl rounded-br-xl bg-black text-white"
          } px-4 py-1.5 `}
        >
          {item?.message}
        </span>
        <small
          className={`${
            own ? "left-2" : "right-2"
          } absolute top-full whitespace-nowrap w-full overflow-hidden text-ellipsis`}
        >
          {format(item?.createdAt)}
        </small>
        <div
          className={`absolute top-1/2 -translate-y-1/2 right-full px-1 ${
            own &&
            "group/options group-hover/message:opacity-100 group-hover/message:pointer-events-auto"
          } opacity-0 pointer-events-none`}
        >
          <div className="relative">
            <BsThreeDotsVertical className="text-lg cursor-pointer" />
            <ul className="absolute bottom-1/2 right-full bg-gray-200/30 group-hover/options:opacity-100 group-hover/options:scale-100 pointer-events-none group-hover/options:pointer-events-auto duration-300 transition-all origin-bottom-right opacity-0 scale-50 backdrop-blur-sm shadow-sm rounded-sm text-black">
              <li
                onClick={async () => {
                  dispatch(deleteMessage({ id: item?._id }));
                  await handleDeleteMessage(item?._id);
                }}
                className="font-medium py-1.5 whitespace-nowrap px-3 hover:bg-gray-500/30 duration-300 transition-all"
              >
                Remove
              </li>
              <li
                onClick={() => {
                  setIsUpdateId(item?._id);
                  setMessage(item?.message);
                }}
                className="font-medium py-1.5 whitespace-nowrap px-3 hover:bg-gray-500/30 duration-300 transition-all"
              >
                Edit
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Message;
