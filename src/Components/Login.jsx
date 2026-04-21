import React from "react";
import { Link } from "react-router-dom";
import Ballpit from "./Ballpit";

export function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-amber-50">

      <div className="absolute inset-0 z-10">
        <Ballpit className="w-full h-full" />
      </div>
      <div className="w-full max-w-[50%] bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 z-10">

        <h2 className="text-3xl font-bold text-center text-gray-800">
          Login
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Welcome back
        </p>

        <form className="mt-6 space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full mt-1 px-4 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full mt-1 px-4 py-2 border rounded"
            />
          </div>

          <Link to="/PersonalDashBoard">
            <button
              type="button"
              className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
            >
              Sign In
            </button>
          </Link>

        </form>

        <p className="text-center text-gray-500 mt-6">
          Don’t have an account?
          <Link to="/Register" className="text-green-600 cursor-pointer">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;