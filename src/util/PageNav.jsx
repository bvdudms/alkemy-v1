import React from 'react';
import MobileNav1 from './MobileNav1';

const PageNav = ({ isMenuOpen, toggleMenu, closeMenu, handleScroll, logo, buttonColor }) => {
  const handleLinkClickWithScroll = (item) => {
    handleScroll(item.toLowerCase());
    closeMenu(); // Close the menu after clicking a menu item
  };
  return (
    <>
      <nav className="lg:py-4 max-sm:py-4 lg:px-3">
        <div className="container mx-auto lg:px-5 max-sm:px-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-[5vw] max-sm:w-[12vw] mr-2" />
          </div>
          <ul className="flex py-4 gap-8 text-2xl font-semibold mr-6 font-homo max-md:hidden">
            <li onClick={() => handleLinkClickWithScroll('home')}
              className="text-white cursor-pointer hover:text-yellow-400 hover:underline">Home
            </li>
            <li onClick={() => handleLinkClickWithScroll('sports')}
              className="text-white cursor-pointer hover:text-yellow-400 hover:underline">Sports
            </li>
            <li onClick={() => handleLinkClickWithScroll('technical')}
              className="text-white cursor-pointer hover:text-yellow-400 hover:underline">Technical
            </li>
            <li onClick={() => handleLinkClickWithScroll('esports')}
              className="text-white cursor-pointer hover:text-yellow-400 hover:underline">Esports
            </li>
            <li onClick={() => handleLinkClickWithScroll('cultural')}
              className="text-white cursor-pointer hover:text-yellow-400 hover:underline">Cultural
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
