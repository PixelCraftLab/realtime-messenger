import React, { useState, useRef, useEffect } from 'react';
import { 
  BsChatTextFill, BsTelephone, BsRecordCircle, BsPeople, 
  BsStar, BsArchive, BsGear, BsPlusLg, BsEmojiSmile, BsMic 
} from 'react-icons/bs';
import { BiVideo, BiSearch, BiCheck, BiCheckDouble } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';
import './PersonalDashBoard.css';

// --- Helper Functions ---
const getInitial = (name) => name ? name.charAt(0).toUpperCase() : '?';

const getColorForName = (name) => {
  const colors = ['#e91e63', '#9c27b0', '#3f51b5', '#009688', '#ff9800', '#795548', '#607d8b', '#f44336'];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
};

export default function PersonalDashBoard() {
  // --- State ---
  const [activeChatId, setActiveChatId] = useState(1);
  const [inputText, setInputText] = useState("");
  const [newMemberName, setNewMemberName] = useState("");
  
  const [contacts, setContacts] = useState([
    { id: 1, name: "WAP Project Group", isGroup: true },
    { id: 2, name: "Vishal Kumar Gowda", isGroup: false },
    { id: 3, name: "Shanmukha (You)", isGroup: false },
    { id: 4, name: "Alice Njeri", isGroup: false },
    { id: 5, name: "Bob Kamau", isGroup: false },
  ]);

  const [messages, setMessages] = useState({
    1: [
      { text: "Alright team, let's lock down the architecture for the WAP clone today.", time: "10:00 AM", sender: "received", author: "Vishal Kumar Gowda" },
      { text: "I think we should stick to React for the frontend and Firebase for real-time syncing. It'll be the fastest way to get the MVP running.", time: "10:05 AM", sender: "sent", status: "seen" },
      { text: "Agreed. Are we doing the Mac Dark Mode UI or standard Web?", time: "10:08 AM", sender: "received", author: "Alice Njeri" },
      { text: "Mac Dark mode. I've already started mapping out the CSS Grid layout.", time: "10:12 AM", sender: "sent", status: "seen" },
      { text: "Sounds good. I will start working on the websocket payload structure.", time: "10:15 AM", sender: "received", author: "Bob Kamau" },
      { text: "Let me know when the repo is set up so I can push the initial commits.", time: "10:20 AM", sender: "sent", status: "sent" } // Single tick
    ]
  });

  const chatWindowRef = useRef(null);
  const activeContact = contacts.find(c => c.id === activeChatId);
  const currentMessages = messages[activeChatId] || [];

  // Auto-scroll to bottom
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [currentMessages]);

  // --- Handlers ---
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMessage = { text: inputText, time: timeString, sender: "sent", status: "sent" }; // Starts with single tick

    setMessages(prev => ({
      ...prev,
      [activeChatId]: [...(prev[activeChatId] || []), newMessage]
    }));
    setInputText("");

    // Simulate message turning to "seen" (double blue tick) after 2 seconds
    setTimeout(() => {
      setMessages(prev => {
        const chatMsgs = [...(prev[activeChatId] || [])];
        const lastMsgIndex = chatMsgs.length - 1;
        if (chatMsgs[lastMsgIndex] && chatMsgs[lastMsgIndex].sender === "sent") {
          chatMsgs[lastMsgIndex].status = "seen";
        }
        return { ...prev, [activeChatId]: chatMsgs };
      });
    }, 2000);
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    if (!newMemberName.trim()) return;
    
    const newId = contacts.length + 1;
    setContacts([...contacts, { id: newId, name: newMemberName.trim(), isGroup: false }]);
    setNewMemberName("");
  };

  return (
    <div className="mac-theme-wrapper">
      <div className="mac-app-container">
        
        {/* ================= FAR LEFT ICON SIDEBAR ================= */}
        <div className="icon-sidebar">
          <div className="top-icons">
            <div className="mac-window-controls">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="icon-item active"><BsChatTextFill /></div>
            <div className="icon-item"><BsTelephone /></div>
            <div className="icon-item"><BsRecordCircle /></div>
            <div className="icon-item"><BsPeople /></div>
            <div className="icon-divider"></div>
            <div className="icon-item"><BsArchive /></div>
            <div className="icon-item"><BsStar /></div>
          </div>
          <div className="bottom-icons">
            <div className="icon-item"><BsGear /></div>
            <div className="initial-avatar small" style={{ backgroundColor: getColorForName('Shanmukha') }}>
              {getInitial('Shanmukha')}
            </div>
          </div>
        </div>

        {/* ================= CHAT LIST PANEL ================= */}
        <div className="chat-list-panel">
          <div className="chat-list-header">
            <h2>Chats</h2>
            <FiEdit className="edit-icon" />
          </div>
          
          <div className="search-wrapper">
            <div className="search-box">
              <BiSearch className="search-icon" />
              <input type="text" placeholder="Search" />
            </div>
          </div>

          <div className="contacts-container">
            {contacts.map(contact => {
              const chatMsgs = messages[contact.id];
              const lastMsg = chatMsgs && chatMsgs.length > 0 ? chatMsgs[chatMsgs.length - 1] : null;

              return (
                <div 
                  key={contact.id} 
                  className={`contact-card ${activeChatId === contact.id ? 'active' : ''}`}
                  onClick={() => setActiveChatId(contact.id)}
                >
                  <div className="initial-avatar" style={{ backgroundColor: contact.isGroup ? '#00a884' : getColorForName(contact.name) }}>
                    {getInitial(contact.name)}
                  </div>
                  <div className="contact-info">
                    <div className="contact-top">
                      <span className="contact-name">{contact.name}</span>
                      <span className="contact-time">{lastMsg ? lastMsg.time : ""}</span>
                    </div>
                    <div className="contact-preview">
                       {lastMsg && lastMsg.sender === "sent" && (
                          <span className={`tick-preview ${lastMsg.status === 'seen' ? 'seen' : ''}`}>
                            {lastMsg.status === 'seen' ? <BiCheckDouble /> : <BiCheck />}
                          </span>
                       )}
                       {lastMsg ? lastMsg.text : "No messages yet"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ADD MEMBER COMPONENT */}
          <form className="add-member-form" onSubmit={handleAddMember}>
            <input 
              type="text" 
              placeholder="Add new member..." 
              value={newMemberName}
              onChange={(e) => setNewMemberName(e.target.value)}
            />
            <button type="submit"><BsPlusLg /></button>
          </form>
        </div>

        {/* ================= MAIN CHAT AREA ================= */}
        <div className="main-chat-panel">
          
          <div className="main-header">
            <div className="active-contact-info">
              <div className="initial-avatar header-size" style={{ backgroundColor: activeContact?.isGroup ? '#00a884' : getColorForName(activeContact?.name) }}>
                {getInitial(activeContact?.name)}
              </div>
              <div className="header-text">
                <span className="header-name">{activeContact?.name}</span>
                {activeContact?.isGroup && <span className="header-subtext">Vishal, Alice, Bob, You</span>}
              </div>
            </div>
            <div className="header-actions">
              <BiVideo className="action-icon" />
              <BiSearch className="action-icon" />
              {/* Menu (Three dots) removed as requested */}
            </div>
          </div>

          <div className="chat-history-area" ref={chatWindowRef}>
            {currentMessages.map((msg, idx) => (
              <div key={idx} className={`msg-wrapper ${msg.sender}`}>
                <div className="msg-bubble">
                  {/* Show author name if it's a received message in a group */}
                  {msg.sender === "received" && msg.author && (
                     <div className="msg-author" style={{ color: getColorForName(msg.author) }}>
                       {msg.author}
                     </div>
                  )}
                  <div className="msg-text">{msg.text}</div>
                  
                  <div className="msg-meta">
                    <span className="msg-timestamp">{msg.time}</span>
                    {/* Ticks for Sent Messages */}
                    {msg.sender === "sent" && (
                      <span className={`msg-ticks ${msg.status === 'seen' ? 'seen-ticks' : 'sent-ticks'}`}>
                        {msg.status === 'seen' ? <BiCheckDouble /> : <BiCheck />}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form className="chat-input-wrapper" onSubmit={handleSendMessage}>
            <BsPlusLg className="input-action-icon plus" />
            <div className="input-pill">
              <BsEmojiSmile className="input-action-icon" />
              <input 
                type="text" 
                placeholder="Type a message" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>
            {inputText ? (
              <button type="submit" className="send-btn">Send</button>
            ) : (
              <BsMic className="input-action-icon" />
            )}
          </form>

        </div>
      </div>
    </div>
  );
}