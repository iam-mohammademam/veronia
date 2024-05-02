import { useNavigate, useParams } from "react-router-dom";

import AddChat from "./addChat";
import AllChats from "./allChats";
import ChatContainer from "./chatContainer";
import { LuUserPlus2 } from "react-icons/lu";
import SearchChat from "./searchChat";
import SearchInput from "./searchInput";
import { indexPath } from "../../App";
import { useState } from "react";

const Chat = () => {
  const { params } = useParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  return (
    <div className="w-screen h-screen md:px-[10%] px-[5%] flex gap-5">
      <div className="w-1/4 border-r border-black/10 shrink-0 relative pr-5 backdrop-blur-sm h-full overflow-hidden mb-10">
        {/*  search input and active status */}
        <SearchInput query={query} setQuery={setQuery} />
        {params === "add" ? (
          <AddChat />
        ) : params === "search" ? (
          <SearchChat />
        ) : (
          <AllChats />
        )}
        {/* add chat button */}
        <div
          onClick={() => navigate(`/${indexPath}/chat/add`)}
          className="absolute bottom-10 right-4 bg-black/90 hover:bg-black duration-300 transition-all backdrop-blur-sm text-white cursor-pointer h-12 w-12 rounded-full flex items-center justify-center"
        >
          <LuUserPlus2 className="text-2xl" />
        </div>
      </div>
      <div className="w-full px-5">
        {(params !== "add" || params !== "search") &&
        params &&
        params?.length === 24 ? (
          <ChatContainer id={params} />
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <h1 className="">Click on a chat to start conversation</h1>
          </div>
        )}
      </div>
    </div>
  );
};
export default Chat;
