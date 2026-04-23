import { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi", contactId: "Rahul", time: "10:00" },
    { id: 2, text: "Hello", contactId: "Rahul", time: "11:00" },
    { id: 3, text: "Hey", contactId: "Vishal", time: "12:00" },
  ]);

  const [scheduled, setScheduled] = useState([]);

  const sendMessage = (text, contactId) => {
    const msg = {
      id: Date.now(),
      text,
      contactId,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, msg]);
  };

  const scheduleMessage = (text, contactId, time) => {
    const newMsg = { id: Date.now(), text, contactId, time };
    setScheduled((prev) => [...prev, newMsg]);

    const delay = new Date(time).getTime() - Date.now();

    setTimeout(() => {
      sendMessage(text, contactId);
    }, delay);
  };

  return (
    <ChatContext.Provider value={{ messages, scheduled, sendMessage, scheduleMessage }}>
      {children}
    </ChatContext.Provider>
  );
};