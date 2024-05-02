/* eslint-disable react/prop-types */

import { BsThreeDotsVertical } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineArchive } from "react-icons/md";
import { noProfile } from "../../utils/exports";

const ChatUser = ({ currentChatUser }) => {
  return (
    <div className="flex items-center justify-between py-2.5  border-b border-b-black/5 w-full">
      <div className="flex items-center gap-2.5 cursor-pointer">
        <div className="relative">
          <img
            src={currentChatUser?.avatar || noProfile}
            alt="avatar"
            className="h-10 w-10 rounded-full overflow-hidden"
          />
          <div className="absolute -bottom-0 -right-0 h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-medium text-md">
            {currentChatUser?.fullName || "unknown"}
          </h1>
        </div>
      </div>
      {/* user options */}
      <div className="flex items-center gap-3">
        <LuPhoneCall className="text-xl cursor-pointer text-black/80 hover:text-black duration-300 transition-all" />
        <MdOutlineArchive className="text-xl cursor-pointer text-black/80 hover:text-black duration-300 transition-all" />
        <BsThreeDotsVertical className="text-xl cursor-pointer text-black/80 hover:text-black duration-300 transition-all" />
      </div>
    </div>
  );
};
export default ChatUser;
