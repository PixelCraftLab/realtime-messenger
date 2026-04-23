import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

const ChatWindow = () => {
  const { messages, typing } = useContext(ChatContext);

  return (
    <div className="flex flex-col gap-2 p-4 h-[80vh] overflow-y-auto bg-[#0b141a]">
      {messages.map(msg => (
        <MessageBubble key={msg.id} msg={msg} />
      ))}

      {typing && <TypingIndicator />}
    </div>
  );
};

export default ChatWindow;
