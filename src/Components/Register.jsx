import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <h2 className="text-3xl font-bold text-center text-gray-800">
          Register
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Lets go
        </p>

        <form className="mt-6 space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>


          
          <a >
            <button

              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
            >
              Register
            </button>
          </a>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Now Login:
          <a href="/Register" className="text-green-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}