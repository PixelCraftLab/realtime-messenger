const MessageBubble = ({ msg }) => {
  const isSent = msg.type === "sent";

  const getTicks = () => {
    if (!isSent) return null;
    if (msg.status === "sent") return "✓";
    if (msg.status === "delivered") return "✓✓";
    if (msg.status === "seen") return "✓✓";
  };

  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs p-3 rounded-lg text-sm ${
          isSent ? "bg-[#005c4b]" : "bg-[#202c33]"
        }`}
      >
        <p>{msg.text}</p>

        <div className="text-[10px] text-gray-300 flex justify-end gap-1 mt-1">
          <span>{msg.time}</span>
          <span className={msg.status === "seen" ? "text-blue-400" : ""}>
            {getTicks()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;