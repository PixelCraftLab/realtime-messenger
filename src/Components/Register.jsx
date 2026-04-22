import React from "react";
import { Link } from "react-router-dom";
import MagicRings from "./MagicRings";


export function Register() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-amber-100">

      {/* <div className="absolute inset-0 z-10">
        <Ballpit className="w-full h-full" />
      </div> */}
      <div style={{ width: '1500px', height: '820px', position: 'relative' }}>
        <MagicRings
          color="#e7cc7b"
          colorTwo="#FEF3C7"
          ringCount={6}
          speed={1}
          attenuation={10}
          lineThickness={2}
          baseRadius={0.35}
          radiusStep={0.1}
          scaleRate={0.1}
          opacity={1}
          blur={0}
          noiseAmount={0.1}
          rotation={0}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={false}
          mouseInfluence={0.2}
          hoverScale={1.2}
          parallax={0.05}
          clickBurst={false}
        />
      </div>
      <div className="absolute w-full max-w-[40%] bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 z-10">

        <h2 className="text-3xl font-bold text-center text-gray-800">
          Register
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Lets Goo
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

          <Link to="/Login">
            <button
              type="button"
              className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
            >
              register
            </button>
          </Link>

        </form>

        <p className="text-center text-gray-500 mt-6">
          have an account?
          <Link to="/Login" className="text-green-600 cursor-pointer">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;