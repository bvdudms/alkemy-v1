// Navbar.js
import React from 'react';
import logo from '../../image/BV_Logo1.png';

const Navbar = () => {
  
  return (
    <nav className="lg:py-4 max-sm:py-4 lg:px-3">
      <div className="container mx-auto lg:px-5 max-sm:px-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-[5vw] max-sm:w-[12vw] mr-2" />
        </div>
        <ul className="flex py-4 gap-8 text-2xl font-semibold mr-6 max-md:hidden font-homo">
          <li>
            <a href="#" className="text-white hover:text-yellow-400 hover:underline">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-yellow-400 hover:underline">Event</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-yellow-400 hover:underline">Sponsors</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-yellow-400 hover:underline">Council</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-yellow-400 hover:underline">Past Event</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-yellow-400 hover:underline">About Us</a>
          </li>
        </ul>
        <button
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-10 h-8 fill-current text-[#e6e63c]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              />
            </svg>
          </button>
      </div>
    </nav>
  );
};

export default Navbar;
