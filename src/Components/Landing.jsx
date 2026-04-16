import React from "react";

const Landing = () => {
    return (
        <div className="min-h-screen bg-amber-50 flex flex-col">
            <nav className="flex justify-between items-center px-8 py-5">
                <h1 className="text-emerald-500 text-2xl font-bold">WhatsApp</h1>

                <button className="bg-emerald-500 text-white px-5 py-2 rounded-lg hover:bg-emerald-600 transition">
                    Login
                </button>
            </nav>

            <section className="flex flex-col items-center justify-center text-center flex-1 px-6">
                <h1 className="text-5xl font-bold text-gray-800">
                    Chat in Real-Time
                </h1>

                <p className="mt-4 text-gray-600 max-w-xl">
                    Fast, secure, and real-time messaging app built with modern web technologies.
                </p>

                <button className="mt-6 bg-emerald-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-emerald-600 transition">
                    Get Started
                </button>
            </section>


            <section className="text-center py-10 rounded-tl-[100px] rounded-br-[100px] bg-emerald-500 text-white">
                <h2 className="text-3xl font-bold">Start chatting now</h2>
                <button className="mt-4 bg-white text-emerald-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
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