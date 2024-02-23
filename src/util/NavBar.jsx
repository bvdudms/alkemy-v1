import React from 'react';
import MobileNav from './MobileNav';
import logo from '../../image/BV_Logo1.png';

const Navbar = ({ isMenuOpen, toggleMenu, closeMenu, handleScroll }) => {
  const handleLinkClickWithScroll = (item) => {
    handleScroll(item.toLowerCase());
    closeMenu(); // Close the menu after clicking a menu item
  };
  const clickAndToggle = () => {
    toggleMenu();
  }
  return (
    <>
      <nav className="lg:py-4 max-sm:py-4 lg:px-3">
        <div className="container mx-auto lg:px-5 max-sm:px-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-[5vw] max-sm:w-[12vw] mr-2" />
          </div>
          <ul className="flex py-4 gap-8 text-2xl font-semibold mr-6 font-serif max-md:hidden">
            <li onClick={() => handleLinkClickWithScroll('home')}
              className="text-white cursor-pointer hover:text-yellow-400 hover:underline">Home
            </li>
            <li onClick={() => handleLinkClickWithScroll('events')}
              className="text-white cursor-pointer hover:text-yellow-400 hover:underline">Events
            </li>
            {/* <li onClick={() => handleLinkClickWithScroll('sponsors')}
              className="text-white cursor-pointer hover:text-yellow-400 hover:underline">Sponsors
            </li> */}
            <li onClick={() => handleLinkClickWithScroll('pastevents')}
              className="text-white cursor-pointer hover:text-yellow-400 hover:underline">Past Events
            </li>

            <li onClick={() => handleLinkClickWithScroll('council')}
              className="text-white cursor-pointer hover:text-yellow-400 hover:underline">Council
            </li>

            <li onClick={() => handleLinkClickWithScroll('aboutus')}
              className="text-white cursor-pointer hover:text-yellow-400 hover:underline">About Us
            </li>
          </ul>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu} // Add onClick handler to toggle the menu
          >
            <svg
              className={`w-10 h-8 fill-current text-[white] transition-transform transform duration-300 ${isMenuOpen ? 'rotate-180' : ''
                } `}
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

      <MobileNav toggleMenu={toggleMenu} closeMenu={closeMenu} isMenuOpen={isMenuOpen} handleScroll={handleScroll}></MobileNav>
    </>
  );
};

export default Navbar;
