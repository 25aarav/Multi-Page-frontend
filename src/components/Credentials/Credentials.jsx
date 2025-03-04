import React from "react";
import { MessageCircle } from "lucide-react";

import { NavLink } from "react-router-dom";

function Credentials() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      {/* Card */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
        {/* Logo */}
        <div className="flex justify-center mb-4 ">
          <img
            src="/assets/picsart-icon-logo-EE8CEAAED8-seeklogo.com.png"
            alt="Logo"
            className="h-10"
          />
        </div>

        {/* Title */}
        <h2 className="text-center text-lg font-semibold mb-4">
          Sign in to your account
        </h2>

        {/* Google Sign-in Button */}

        <button className="w-full flex items-center justify-between bg-green-300 text-black py-2 rounded-md mb-2">
          <img
            src="https://yt3.googleusercontent.com/FJI5Lzbf2dMd32xOqhoKpJArJooZhoX6v2qOcFO-wjSZUvs3H9xqq2gK4DQ47X0KnYgf7X2rpdU=s900-c-k-c0x00ffffff-no-rj"
            alt="Google Logo"
            className="h-7 w-7 ml-2 "
          />
          <div className="flex-grow text-center text-lg font-semibold">
            Sign in with Google
          </div>
        </button>

        {/* Divider */}
        <p className="text-center text-gray-500 text-sm my-2">
          or continue with email
        </p>

        {/* Email Input */}
        <div className="mb-3">
          <label className="text-sm text-gray-600">Email Address</label>
          <input required
            type="email"
            placeholder="your@email.com"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label className="text-sm text-gray-600">Password</label>
          <input
            required
            type="password"
            placeholder="********"
            className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>

        {/* Forgot Password */}
        <p className="text-sm text-gray-500 text-left mb-4 cursor-pointer hover:underline">
          Password forgotten?
        </p>

        {/* Sign-in Button */}
        <NavLink to="/signup/Landing" className="w-full bg-green-300 text-black py-2 rounded-md font-semibold hover:bg-green-400 block text-center">
          SIGN IN
        </NavLink>

        {/* Sign-up Link */}
        <p className="text-center text-gray-600 text-sm mt-4">
          Do not have an account yet?{" "}
          <span className="text-green-500 cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>

      {/* Chat Icon in Bottom Right */}
      <div className="absolute bottom-5 right-5">
        <div className="bg-black p-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-800">
          <MessageCircle size={24} color="white" />
        </div>
      </div>
    </div>
  );
}

export default Credentials;
