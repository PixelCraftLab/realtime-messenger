import React from "react";
import { Navigate } from "react-router-dom";
import BlurText from "./BlurText";
import Ballpit from './Ballpit'


const Landing = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50  to-amber-400 flex flex-col">
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

            <section className=" flex flex-col items-center justify-center text-center flex-1 px-6">
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
            <div className=" bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

            <div className="absolute italic   mt-100 ml-65 mr-65 text-neutral-500">
                <BlurText
                    text="Transforming conversations into clarity with AI-driven summaries and intelligent scheduling that speaks for you—even when you’re offline."
                    delay={40}
                    animateBy="letters"
                    direction="top"
                    onAnimationComplete={BlurText}
                    className="text-2xl mb-8"
                />
            </div>



            <div style={{ position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%' }}>
                <Ballpit
                    count={100}
                    gravity={0.2}
                    friction={0.9975}
                    wallBounce={0.95}
                    followCursor={false}
                />
            </div>







        </div>
    );
};

export default Landing;