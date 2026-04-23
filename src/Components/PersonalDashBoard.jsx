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
      
}