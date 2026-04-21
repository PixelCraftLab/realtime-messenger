import React from "react";
import { Navigate } from "react-router-dom";
import BlurText from "./BlurText";


const Landing = () => {
    return (
        <div className="min-h-screen bg-amber-50 flex flex-col">
            <nav className="flex justify-between items-center px-8 py-5">
                <h1 className="text-emerald-500 text-3xl font-bold">WhatsApp</h1>
                <a
                    href="/Login"
                >
                    <button className="bg-emerald-500 cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-emerald-600 transition">
                        Login
                    </button>
                </a>
            </nav>

            <section className="flex flex-col items-center justify-center text-center flex-1 px-6">
                <h1 className="text-5xl font-bold text-gray-800">
                    Chat in Real Time
                </h1>

                <p

                    className=" mt-4 text-gray-600">
                    Fast, secure, and real-time messaging app built with modern web technologies.
                </p>
                <a
                    href="/Register"
                >
                    <button className="mt-20 animate-bounce cursor-pointer mt-6 bg-emerald-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-emerald-600 transition">
                        Get Started
                    </button>
                </a>
            </section>
            
            {/* <section className="">
                <p className="m-5">AI-Powered Chat Summarization
                    Automatically summarizes long conversations in group chats, helping users quickly grasp key points without scrolling through extensive message history.
                    Smart Scheduled Messaging with Chatbot Assistance
                    Allows users to compose messages and schedule them to be sent at a specific time, with optional AI assistance to refine or generate the message content.</p>
            </section> */}
            <div className="italic  mb-30 mt-10 ml-65 mr-65 text-neutral-500">
                <BlurText
                    text="Transforming conversations into clarity with AI-driven summaries and intelligent scheduling that speaks for you—even when you’re offline."
                    delay={20}
                    animateBy="letters"
                    direction="top"
                    onAnimationComplete={BlurText}
                    className="text-2xl mb-8"
                />
            </div>





            

        </div>
    );
};

export default Landing;