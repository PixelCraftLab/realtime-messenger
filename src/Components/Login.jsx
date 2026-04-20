import React from "react";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

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


          <div className="flex items-center justify-between text-sm">

            <a href="/Register" className="text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <Link to="/PersonalDashBoard">
            <button

              type="submit"
              className="cursor-pointer w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
            >
              Sign In
            </button>
          </Link>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?
          <a href="/Register" className="text-green-600 cursor-pointer hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;