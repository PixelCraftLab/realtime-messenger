import ChatWindow from "../Components/ChatWindow";
import MessageInput from "../Components/MessageInput";


const ChatPage = () => {
  return (
    <div className="flex flex-col h-screen bg-[#0b141a]">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#202c33]">
        <div>
          <h2 className="text-white font-semibold">Rahul</h2>
          <p className="text-xs text-gray-400">online</p>
        </div>
      </div>

      <ChatWindow />
      <MessageInput />
    </div>
  );
};

export default ChatPage;