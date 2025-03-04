import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between  p-4  text-black">
        {/* Logo Section */}
        <div>
          <img
            className="h-10 w-auto rounded-3xl"
            src="/assets/picsart-icon-logo-EE8CEAAED8-seeklogo.com.png" // Public folder fix
            alt="logo"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 font-bold">
          <a href="#" className="hover:text-gray-400">
            Tools
          </a>
          <a href="#" className="hover:text-gray-400">
            Explore
          </a>
          <a href="#" className="hover:text-gray-400">
            Stocks
          </a>
          <a href="#" className="hover:text-gray-400">
            Pricing
          </a>
          <a href="#" className="hover:text-gray-400">
            Blog
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 items-center ">
          <NavLink
            to="/signup"
            className="text-gray-900 font-medium hover:text-gray-600"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="px-4 py-2 border w-[100px] border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition hover:font-bold"
          >
            Sign up
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
