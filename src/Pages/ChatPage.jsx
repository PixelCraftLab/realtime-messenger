import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";

const ChatPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <ChatWindow />
      <MessageInput />
    </div>
  );
};

export default ChatPage;