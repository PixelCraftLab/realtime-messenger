import React from "react";



const PersonalDashBoard = () => {
  return (
    <div className="h-screen w-screen flex bg-amber-50 text-white">

      <div className="w-[30%] max-w-sm bg-amber-200 border-r border-white/10 flex flex-col">


        <div className="p-4 flex items-center justify-between border-b border-white/10">
          <h2 className="font-semibold text-lg">Chats</h2>
          <button className="text-sm text-green-400">New</button>
        </div>
        <div className="p-3">
          <input
            type="text"
            placeholder="Search or start new chat"
            className="w-full px-4 py-2 rounded-lg border border-white/10 outline-none text-sm"
          />
        </div>

        <div className="flex-1 overflow-y-auto">

          <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#2a3942] cursor-pointer transition">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              A
            </div>
            <div>
              <p className="font-medium">Akash</p>
              <p className="text-xs text-white/60">Hey bro!</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#2a3942] cursor-pointer transition">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              R
            </div>
            <div>
              <p className="font-medium">Rahul</p>
              <p className="text-xs text-white/60">Typing...</p>
            </div>
          </div>

        </div>
      </div>

      <div className="flex-1 flex flex-col">

        <div className="p-4 border-b border-white/10">
          <h2 className="font-semibold">Select a chat</h2>
        </div>
        <div className="flex-1 flex items-center justify-center text-white/40">
          No conversation selected
        </div>

      </div>

    </div>
  );
};

export default PersonalDashBoard;