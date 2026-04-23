import { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [scheduled, setScheduled] = useState([]);
  const [typing, setTyping] = useState(false);

  const sendMessage = (text, contactId) => {
    const msg = {
      id: Date.now(),
      text,
      contactId,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      status: "sent",
      type: "sent",
    };

    setMessages(prev => [...prev, msg]);

    setTimeout(() => {
      setMessages(prev =>
        prev.map(m =>
          m.id === msg.id ? { ...m, status: "delivered" } : m
        )
      );
    }, 1000);

    setTimeout(() => {
      setMessages(prev =>
        prev.map(m =>
          m.id === msg.id ? { ...m, status: "seen" } : m
        )
      );
    }, 2000);

    simulateReply(contactId);
  };

  const simulateReply = (contactId) => {
    setTyping(true);

    setTimeout(() => {
      setTyping(false);

      const reply = {
        id: Date.now(),
        text: "Auto reply 👋",
        contactId,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        type: "received",
      };

      setMessages(prev => [...prev, reply]);
    }, 2000);
  };

  const scheduleMessage = (text, contactId, time) => {
    const delay = new Date(time).getTime() - Date.now();

    if (delay > 0) {
      setScheduled(prev => [...prev, { text, contactId, time }]);

      setTimeout(() => {
        sendMessage(text, contactId);
      }, delay);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        sendMessage,
        scheduleMessage,
        scheduled,
        typing,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};