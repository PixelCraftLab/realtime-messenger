import { useState, useContext } from "react";
import { ChatContext } from "../Context/ChatContext";

const MessageInput = () => {
  const [text, setText] = useState("");
  const { sendMessage } = useContext(ChatContext);

  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(text, "Rahul");
    setText("");
  };

  return (
    <div className="flex p-3 bg-[#202c33] gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-2 rounded bg-[#2a3942] text-white"
        placeholder="Type a message"
      />

      <button
        onClick={handleSend}
        className="bg-green-500 px-4 rounded"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;