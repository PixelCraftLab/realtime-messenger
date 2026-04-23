import { createContext, useState } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {

  // ✅ Initial messages (fix dashboard being empty)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey 👋",
      contactId: "Rahul",
      time: "10:00",
      status: "seen",
      type: "sent",
    },
    {
      id: 2,
      text: "Hello bro",
      contactId: "Rahul",
      time: "10:02",
      type: "received",
    },
    {
      id: 3,
      text: "Meeting at 5",
      contactId: "Vishal",
      time: "11:00",
      status: "delivered",
      type: "sent",
    },
  ]);

  const [scheduled, setScheduled] = useState([]);
  const [typing, setTyping] = useState(false);

  // ✅ Contacts (for sidebar)
  const [contacts] = useState([
    { id: "Rahul", lastMessage: "Hey 👋", time: "10:02 AM" },
    { id: "Vishal", lastMessage: "Meeting at 5", time: "11:00 AM" },
    { id: "Krisha", lastMessage: "Ok", time: "Yesterday" },
  ]);

  const [activeChat, setActiveChat] = useState("Rahul");

  // 📩 Send Message
  const sendMessage = (text, contactId) => {
    const msg = {
      id: Date.now(),
      text,
      contactId,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "sent",
      type: "sent",
    };

    setMessages(prev => [...prev, msg]);

    // ✔ delivered
    setTimeout(() => {
      setMessages(prev =>
        prev.map(m =>
          m.id === msg.id ? { ...m, status: "delivered" } : m
        )
      );
    }, 1000);

    // ✔ seen
    setTimeout(() => {
      setMessages(prev =>
        prev.map(m =>
          m.id === msg.id ? { ...m, status: "seen" } : m
        )
      );
    }, 2000);

    simulateReply(contactId);
  };

  // 🤖 Auto Reply
  const simulateReply = (contactId) => {
    setTyping(true);

    setTimeout(() => {
      setTyping(false);

      const replies = ["Okay 👍", "Got it", "Sure", "Will do", "Nice"];

      const reply = {
        id: Date.now(),
        text: replies[Math.floor(Math.random() * replies.length)],
        contactId,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        type: "received",
      };

      setMessages(prev => [...prev, reply]);
    }, 2000);
  };

  // ⏰ Schedule Message
  const scheduleMessage = (text, contactId, time) => {
    const delay = new Date(time).getTime() - Date.now();

    if (delay <= 0) return;

    const scheduledMsg = { id: Date.now(), text, contactId, time };

    setScheduled(prev => [...prev, scheduledMsg]);

    setTimeout(() => {
      sendMessage(text, contactId);

      // remove after sending
      setScheduled(prev =>
        prev.filter(msg => msg.id !== scheduledMsg.id)
      );
    }, delay);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        sendMessage,
        scheduleMessage,
        scheduled,
        typing,
        contacts,
        activeChat,
        setActiveChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};