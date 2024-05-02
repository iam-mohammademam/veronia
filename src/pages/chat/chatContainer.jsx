/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import ChatInput from "./chatInput";
import ChatUser from "./chatUser";
import Message from "./message";
import { getAllMessages } from "../../app/actions/getAllMessages";
import { getItemWithKey } from "../../utils/storedItems";

const ChatContainer = ({ id }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [isUpdateId, setIsUpdateId] = useState(null);
  const [currentChatUser, setCurrentChatUser] = useState(null);

  const loggedInUser = getItemWithKey("user");

  useEffect(() => {
    dispatch(getAllMessages({ endpoint: "/message/all?sort=createdAt", id }));
  }, [id]);
  const { data, loading } = useSelector((state) => state.messages);
  const { data: allChats } = useSelector((state) => state.chats);
  useEffect(() => {
    const currentChat = allChats?.results?.find((item) => item?._id === id);

    if (currentChat?.user_1?._id === loggedInUser?._id) {
      setCurrentChatUser(currentChat?.user_2);
    }
  }, [id]);

  return (
    <div className="h-full flex flex-col items-center justify-between pb-5">
      {/* chat user info */}
      <ChatUser currentChatUser={currentChatUser} />
      {/* chats area */}
      <div className="w-full flex flex-col gap-y-6 overflow-y-scroll scrollbar h-full py-5">
        {loading ? (
          <></>
        ) : (
          data?.results?.map((item, index) => {
            return (
              <Message
                key={index}
                item={item}
                currentChatUser={currentChatUser}
                setMessage={setMessage}
                message={message}
                setIsUpdateId={setIsUpdateId}
              />
            );
          })
        )}
      </div>

      {/* chat input */}
      <ChatInput
        id={id}
        message={message}
        setMessage={setMessage}
        isUpdateId={isUpdateId}
      />
    </div>
  );
};
export default ChatContainer;
