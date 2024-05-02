/* eslint-disable react/prop-types */

import { createChat, handleDelChat } from "../../utils/functions";

import { BsThreeDotsVertical } from "react-icons/bs";
import { deleteChat } from "../../app/features/chatSlice";
import { getItemWithKey } from "../../utils/storedItems";
import { indexPath } from "../../App";
import { noProfile } from "../../utils/exports";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ChatCard = ({ item, user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInUser = getItemWithKey("user");
  if (loggedInUser?._id === item?._id) {
    return null;
  }
  return (
    <li className="flex items-center justify-between py-3 px-2.5 rounded-md hover:bg-gray-200/40 transition-all duration-300 border-b border-b-black/5">
      <div
        onClick={async () => {
          if (item?.user_1) {
            return navigate(`/${indexPath}/chat/${item?._id}`);
          } else {
            const res = await createChat(item?._id);
            navigate(`/${indexPath}/chat/${res?.id}`);
          }
        }}
        className="flex items-center gap-2 cursor-pointer"
      >
        <div className="relative">
          <img
            src={item?.user_2?.avatar || item?.avatar || noProfile}
            alt=""
            className="h-10 w-10 rounded-full overflow-hidden"
          />
          <div className="absolute -bottom-0 -right-0 h-3 w-3 rounded-full bg-green-500"></div>
        </div>

        <div className="flex flex-col">
          <h1 className="font-medium text-md">
            {item?.user_2?.fullName || item?.fullName || "unknown"}
          </h1>
          <small>{}</small>
        </div>
      </div>
      <div className="relative group/options">
        <BsThreeDotsVertical className="text-lg cursor-pointer" />
        <ul className="absolute group-hover/options:scale-100 pointer-events-none group-hover/options:pointer-events-auto scale-50 origin-top-right opacity-0 group-hover/options:opacity-100 duration-300 transition-all top-2 right-[90%] rounded-sm overflow-hidden bg-gray-200/30 backdrop-blur-sm shadow-sm border border-black/5">
          {user ? (
            <>
              <li
                onClick={() => {
                  createChat(item?._id);
                }}
                className="font-medium px-3 py-1.5 duration-300 transition-all hover:bg-gray-600/30 whitespace-nowrap"
              >
                Create chat
              </li>
            </>
          ) : (
            <>
              <li className="font-medium px-3 py-1.5 duration-300 transition-all hover:bg-gray-600/30 whitespace-nowrap">
                Archive chat
              </li>
              <li
                onClick={() => {
                  dispatch(deleteChat({ id: item?._id }));
                  handleDelChat(item?._id);
                  navigate(`/${indexPath}/chat`);
                }}
                className="font-medium px-3 py-1.5 duration-300 transition-all hover:bg-gray-600/30 whitespace-nowrap"
              >
                Delete chat
              </li>
            </>
          )}
        </ul>
      </div>
    </li>
  );
};
export default ChatCard;
