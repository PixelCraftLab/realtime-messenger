import React from "react";
import { FiMessageSquare, FiUsers, FiStar } from "react-icons/fi";

const PersonalDashBoard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 text-white">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold tracking-wide">
          🚀 Personal Dashboard
        </h1>

        <button className="bg-gradient-to-r from-green-400 to-emerald-600 px-5 py-2 rounded-xl shadow-lg hover:scale-105 transition">
          Refresh
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
          <div className="flex justify-between items-center mb-4">
            <FiMessageSquare size={24} />
            <span className="text-sm text-gray-300">Messages</span>
          </div>
          <h2 className="text-3xl font-bold">120</h2>
          <p className="text-gray-400 text-sm mt-2">Total sent</p>
        </div>

        {/* Card 2 */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
          <div className="flex justify-between items-center mb-4">
            <FiUsers size={24} />
            <span className="text-sm text-gray-300">Chats</span>
          </div>
          <h2 className="text-3xl font-bold">8</h2>
          <p className="text-gray-400 text-sm mt-2">Active conversations</p>
        </div>

        {/* Card 3 */}
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl hover:scale-105 transition">
          <div className="flex justify-between items-center mb-4">
            <FiStar size={24} />
            <span className="text-sm text-gray-300">Top Contact</span>
          </div>
          <h2 className="text-3xl font-bold">Rahul</h2>
          <p className="text-gray-400 text-sm mt-2">Most interacted</p>
        </div>

      </div>

      {/* Activity Section */}
      <div className="mt-12 backdrop-blur-lg bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl">
        <h2 className="text-xl font-semibold mb-4">📊 Message Activity</h2>

        <div className="h-64 flex items-center justify-center text-gray-400">
          Coming soon...
        </div>
      </div>

    </div>
  );
};

export default PersonalDashBoard;