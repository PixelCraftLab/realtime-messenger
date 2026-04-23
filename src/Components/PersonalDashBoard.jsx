import React, { useContext } from "react";
import { FiMessageSquare, FiUsers, FiStar } from "react-icons/fi";
import { ChatContext } from "../context/ChatContext";
const PersonalDashBoard = () => {
  const { messages, scheduled } = useContext(ChatContext);
    const totalMessages = messages.length;

  const activeChats = new Set(messages.map(m => m.contactId)).size;

  const freq = {};
  messages.forEach(m => {
    freq[m.contactId] = (freq[m.contactId] || 0) + 1;
  });

  const topContact =
    Object.keys(freq).length === 0
      ? "None"
      : Object.keys(freq).reduce((a, b) =>
          freq[a] > freq[b] ? a : b
        );
    const getInsight = () => {
    if (!messages.length) return "No activity";

    const hours = messages.map(m =>
      new Date(`1970-01-01T${m.time}`).getHours()
    );

    const count = {};
    hours.forEach(h => count[h] = (count[h] || 0) + 1);

    const peak = Object.keys(count).reduce((a, b) =>
      count[a] > count[b] ? a : b
    );

    return `Most active at ${peak}:00`;
  };
    return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 text-white">
      
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold tracking-wide">
          🚀 Personal Dashboard
        </h1>

        <button className="bg-gradient-to-r from-green-400 to-emerald-600 px-5 py-2 rounded-xl shadow-lg hover:scale-105 transition">
          Refresh
        </button>
      </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl">
          <div className="flex justify-between mb-4">
            <FiMessageSquare size={24} />
            <span className="text-sm text-gray-300">Messages</span>
          </div>
          <h2 className="text-3xl font-bold">{totalMessages}</h2>
          <p className="text-gray-400 text-sm mt-2">Total sent</p>
        </div>

        <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl">
          <div className="flex justify-between mb-4">
            <FiUsers size={24} />
            <span className="text-sm text-gray-300">Chats</span>
          </div>
          <h2 className="text-3xl font-bold">{activeChats}</h2>
          <p className="text-gray-400 text-sm mt-2">Active conversations</p>
        </div>

        <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl">
          <div className="flex justify-between mb-4">
            <FiStar size={24} />
            <span className="text-sm text-gray-300">Top Contact</span>
          </div>
          <h2 className="text-3xl font-bold">{topContact}</h2>
          <p className="text-gray-400 text-sm mt-2">Most interacted</p>
        </div>

      </div>
            <div className="mt-12 backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl">
        <h2 className="text-xl font-semibold mb-2">📊 Message Activity</h2>

        <p className="text-green-400 text-sm mb-2">
          {getInsight()}
        </p>

        <p className="text-blue-400 text-sm mb-4">
          Scheduled Messages: {scheduled.length}
        </p>

        <div className="h-40 flex items-center justify-center text-gray-400">
          Chart can be added here
        </div>
      </div>

}