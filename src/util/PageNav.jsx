import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import MobileNav1 from './MobileNav1';
const PageNav = ({ isMenuOpen, toggleMenu, closeMenu, handleScroll, logo, buttonColor }) => {
  const handleLinkClickWithScroll = () => {
    closeMenu(); // Close the menu after clicking a menu item
  };

  return (
    <>
      <nav className="lg:py-4 max-sm:py-4 lg:px-3">
        <div className="container mx-auto lg:px-5 max-sm:px-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className=""><Link to="/" className="block">
              <img src={logo} alt="Logo" className="w-[5vw] max-sm:w-[12vw] mr-2" />
            </Link>
            </div>
          </div>
          <ul className="flex py-4 gap-8 text-2xl font-semibold mr-6 font-homo max-md:hidden">
            {/* Use Link for each menu item */}
            <li onClick={handleLinkClickWithScroll}>
              <Link to="/" className="text-white hover:text-yellow-400 hover:underline">Home</Link>
            </li>
            <li onClick={handleLinkClickWithScroll}>
              <Link to="/sports" className="text-white hover:text-yellow-400 hover:underline">Sports</Link>
            </li>
            <li onClick={handleLinkClickWithScroll}>
              <Link to="/technical" className="text-white hover:text-yellow-400 hover:underline">Technical</Link>
            </li>
            <li onClick={handleLinkClickWithScroll}>
              <Link to="/esports" className="text-white hover:text-yellow-400 hover:underline">Esports</Link>
            </li>
            <li onClick={handleLinkClickWithScroll}>
              <Link to="/cultural" className="text-white hover:text-yellow-400 hover:underline">Cultural</Link>
            </li>
          </ul>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu} // Add onClick handler to toggle the menu
          >
            <svg
              className="w-10 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={{ color: buttonColor }} // Set the color using the prop
            >
              <path
                fillRule="evenodd"
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              />
            </svg>
          </button>
        </div>
      </nav>

      <MobileNav1 toggleMenu={toggleMenu} closeMenu={closeMenu} isMenuOpen={isMenuOpen} handleScroll={handleScroll}></MobileNav1>
    </>
  );
};

export default PageNav;
