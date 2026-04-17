import React from "react";

const Landing = () => {
    return (
        <div className="min-h-screen bg-amber-50 flex flex-col">
            <nav className="flex justify-between items-center px-8 py-5">
                <h1 className="text-emerald-500 text-3xl font-bold">WhatsApp</h1>

                <button className="bg-emerald-500 cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-emerald-600 transition">
                    Login
                </button>
            </nav>

            <section className="flex flex-col items-center justify-center text-center flex-1 px-6">
                <h1 className="text-5xl font-bold text-gray-800">
                    Chat in Real Time
                </h1>

                <p className="mt-4 text-gray-600 max-w-xl">
                    Fast, secure, and real-time messaging app built with modern web technologies.
                </p>

                <button className="cursor-pointer mt-6 bg-emerald-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-emerald-600 transition">
                    Get Started
                </button>
            </section>
            <section className="">
                <p className="m-5">AI-Powered Chat Summarization
                    Automatically summarizes long conversations in group chats, helping users quickly grasp key points without scrolling through extensive message history.
                    Smart Scheduled Messaging with Chatbot Assistance
                    Allows users to compose messages and schedule them to be sent at a specific time, with optional AI assistance to refine or generate the message content.</p>
            </section>


            <section className="text-center py-10 rounded-tl-[100px] rounded-br-[100px] bg-emerald-500 text-white">
                <h2 className="text-3xl font-bold">Start chatting now</h2>
                <button className="cursor-pointer mt-4 bg-white text-emerald-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Join Now
                </button>
            </section>

            <footer className="text-center py-4 text-gray-500 text-sm">
                Incredible upgraded version of WhatsApp
            </footer>

        </div>
    );
};

export default Landing;