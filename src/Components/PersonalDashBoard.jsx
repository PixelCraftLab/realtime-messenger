import React, { useState, useRef, useEffect, useMemo } from 'react';
import './PersonalDashBoard.css';

const Icons = {
  Search: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  Send: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  Moon: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  Sun: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
  Chart: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  Chat: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  Pin: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>,
  BellOff: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0 1 18 8"/><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"/><path d="M18 8a6 6 0 0 0-9.33-5"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
};

const getInitial = (name) => name ? name.charAt(0).toUpperCase() : '?';

export default function PersonalDashBoard() {
  const [theme, setTheme] = useState('dark');
  const [activeTab, setActiveTab] = useState('chats');
  const [activeChatId, setActiveChatId] = useState(1);
  const [inputText, setInputText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDND, setIsDND] = useState(false);
  
  const [contacts] = useState([
    { id: 1, name: "WAP Project Group", isGroup: true },
    { id: 2, name: "Vishal Kumar Gowda", isGroup: false },
    { id: 3, name: "Alice Njeri", isGroup: false },
  ]);

  const [messages, setMessages] = useState({
    1: [
      { id: 101, text: "Pune team, what's the status on the analytics integration?", time: "10:15 PM", sender: "received", author: "Vishal Kumar Gowda", pinned: true },
      { id: 102, text: "Building the Personal Dashboard metrics now. Total messages, streak, etc.", time: "10:30 PM", sender: "sent", status: "seen", pinned: false },
      { id: 103, text: "Make sure we drop third-party dependencies to keep it fast.", time: "10:45 PM", sender: "received", author: "Alice Njeri", pinned: false }
    ],
    2: [
      { id: 201, text: "Hey Shanmukha, did you check the MVP features list?", time: "09:00 AM", sender: "received", pinned: false }
    ]
  });

  const chatWindowRef = useRef(null);
  const activeContact = contacts.find(c => c.id === activeChatId);
  const currentMessages = messages[activeChatId] || [];

  const filteredContacts = contacts.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
  
  const smartReplies = useMemo(() => {
    const lastMsg = currentMessages[currentMessages.length - 1];
    if (lastMsg && lastMsg.sender === "received") {
      if (lastMsg.text.toLowerCase().includes("status")) return ["On it right now", "Almost done", "Need help"];
      if (lastMsg.text.toLowerCase().includes("features")) return ["Yes, looks good", "I have some changes", "Let's discuss"];
      return ["Okay", "Got it", "Sounds good"];
    }
    return [];
  }, [currentMessages]);

  const analytics = useMemo(() => {
    let total = 0;
    let mostActive = { name: "None", count: 0 };
    Object.keys(messages).forEach(chatId => {
      const msgCount = messages[chatId].length;
      total += msgCount;
      if (msgCount > mostActive.count) {
        mostActive = { name: contacts.find(c => c.id === parseInt(chatId))?.name || "Unknown", count: msgCount };
      }
    });
    return { total, mostActive, streak: 12 };
  }, [messages, contacts]);

  useEffect(() => {
    if (chatWindowRef.current && activeTab === 'chats') {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [currentMessages, activeTab]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;
    const timeString = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const newMessage = { id: Date.now(), text, time: timeString, sender: "sent", status: "sent", pinned: false };

    setMessages(prev => ({ ...prev, [activeChatId]: [...(prev[activeChatId] || []), newMessage] }));
    setInputText("");

    if (activeChatId === 2 && !isDND) {
      setTimeout(() => {
        setMessages(prev => ({
          ...prev, 2: [...(prev[2] || []), { id: Date.now()+1, text: "Auto-reply: Got your message. Reviewing now.", time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }), sender: "received" }]
        }));
      }, 1500);
    }
  };

  const togglePin = (msgId) => {
    setMessages(prev => {
      const updatedChat = prev[activeChatId].map(m => m.id === msgId ? { ...m, pinned: !m.pinned } : m);
      return { ...prev, [activeChatId]: updatedChat };
    });
  };

  return (
    <div className={`theme-wrapper ${theme}`}>
      <div className="app-container">
        
        <div className="side-nav">
          <div className="nav-top">
            <button className={`nav-btn ${activeTab === 'chats' ? 'active' : ''}`} onClick={() => setActiveTab('chats')} title="Chats">
              <Icons.Chat />
            </button>
            <button className={`nav-btn ${activeTab === 'analytics' ? 'active' : ''}`} onClick={() => setActiveTab('analytics')} title="Analytics Dashboard">
              <Icons.Chart />
            </button>
          </div>
          <div className="nav-bottom">
            <button className={`nav-btn ${isDND ? 'dnd-active' : ''}`} onClick={() => setIsDND(!isDND)} title="Do Not Disturb">
              <Icons.BellOff />
            </button>
            <button className="nav-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} title="Toggle Theme">
              {theme === 'dark' ? <Icons.Sun /> : <Icons.Moon />}
            </button>
          </div>
        </div>

        <div className="middle-panel">
          {activeTab === 'chats' ? (
            <>
              <div className="panel-header"><h2>Chats</h2></div>
              <div className="search-bar">
                <Icons.Search />
                <input type="text" placeholder="Search chats..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              </div>
              <div className="list-container">
                {filteredContacts.map(contact => {
                  const chatMsgs = messages[contact.id];
                  const lastMsg = chatMsgs && chatMsgs.length > 0 ? chatMsgs[chatMsgs.length - 1] : null;
                  return (
                    <div key={contact.id} className={`list-item ${activeChatId === contact.id ? 'active' : ''}`} onClick={() => setActiveChatId(contact.id)}>
                      <div className="avatar" style={{ backgroundColor: contact.isGroup ? 'var(--accent)' : '#795548' }}>{getInitial(contact.name)}</div>
                      <div className="item-info">
                        <div className="item-top">
                          <span className="item-name">{contact.name}</span>
                          <span className="item-time">{lastMsg ? lastMsg.time : ""}</span>
                        </div>
                        <div className="item-preview">{lastMsg ? lastMsg.text : "No messages"}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="analytics-panel">
              <div className="panel-header"><h2>Personal Dashboard</h2></div>
              <div className="stat-card">
                <h3>Total Messages Sent</h3>
                <p className="stat-number">{analytics.total}</p>
              </div>
              <div className="stat-card">
                <h3>Most Active Chat</h3>
                <p className="stat-text">{analytics.mostActive.name} ({analytics.mostActive.count} msgs)</p>
              </div>
              <div className="stat-card">
                <h3>Chat Streak 🔥</h3>
                <p className="stat-number">{analytics.streak} Days</p>
              </div>
              <p className="context-note">Live from Pune, IN</p>
            </div>
          )}
        </div>

        <div className="main-panel">
          <div className="chat-header">
            <div className="header-info">
              <div className="avatar" style={{ backgroundColor: activeContact?.isGroup ? 'var(--accent)' : '#795548' }}>{getInitial(activeContact?.name)}</div>
              <div>
                <h3 className="header-name">{activeContact?.name}</h3>
                {isDND && <span className="dnd-badge">DND Active (Auto-reply ON)</span>}
              </div>
            </div>
          </div>

          <div className="chat-history" ref={chatWindowRef}>
            <div className="date-badge">Today</div>
            {currentMessages.map((msg) => (
              <div key={msg.id} className={`message-row ${msg.sender}`}>
                <div className="message-bubble" onDoubleClick={() => togglePin(msg.id)}>
                  {msg.pinned && <div className="pin-indicator"><Icons.Pin /> Pinned</div>}
                  {msg.sender === "received" && msg.author && <div className="msg-author">{msg.author}</div>}
                  <div className="msg-text">{msg.text}</div>
                  <div className="msg-time">{msg.time}</div>
                </div>
              </div>
            ))}
          </div>

          {smartReplies.length > 0 && (
            <div className="smart-replies">
              {smartReplies.map((reply, idx) => (
                <button key={idx} className="smart-chip" onClick={() => handleSendMessage(reply)}>{reply}</button>
              ))}
            </div>
          )}

          <form className="chat-input-area" onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputText); }}>
            <input 
              type="text" 
              placeholder={isDND ? "DND mode active. Type a message..." : "Type a message..."} 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit" className="send-btn" disabled={!inputText.trim()}><Icons.Send /></button>
          </form>
        </div>

      </div>
    </div>
  );
}