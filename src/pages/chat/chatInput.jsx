import { addMessage, updateMessage } from "../../app/features/messageSlice";
import { createMessage, handleUpdateMessage } from "../../utils/functions";

import { getItemWithKey } from "../../utils/storedItems";
import { useDispatch } from "react-redux";

/* eslint-disable react/prop-types */
const ChatInput = ({ id, message, setMessage, isUpdateId }) => {
  const dispatch = useDispatch();

  const user = getItemWithKey("user");
  const obj = {
    _id: Math.floor(Math.random() * 324809),
    sender: user?._id,
    message,
  };

  const handleUpdate = async (message) => {
    dispatch(
      updateMessage({
        _id: isUpdateId,
        message,
      })
    );
    await handleUpdateMessage(isUpdateId, message);
  };
  const sendMessage = async (chatId, message) => {
    if (isUpdateId) {
      handleUpdate(message);
    } else {
      dispatch(addMessage(obj));
      await createMessage({ chatId, message });
      setMessage("");
    }
  };
  return (
    <div className="flex items-center gap-3 justify-between bg-black text-white rounded-sm h-12 px-3 w-full mt-2">
      <span className="text-lg cursor-pointer">+</span>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (message && e.key === "Enter") {
            sendMessage(id, message);
          }
        }}
        className="w-full bg-transparent outline-none border-none"
        placeholder="Type your message ..."
      />
      <button
        onClick={() => {
          if (message) {
            sendMessage(id, message);
          }
        }}
        className="px-4 h-full font-medium"
      >
        Send
      </button>
    </div>
  );
};
export default ChatInput;
