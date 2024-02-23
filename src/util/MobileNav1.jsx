import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileNav = ({ isMenuOpen, closeMenu, handleScroll }) => {
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  // Update activeLink state when location changes
  useEffect(() => {
    setActiveLink(location.pathname.slice(1)); // Remove leading '/'
  }, [location]);

  const handleLinkClickWithScroll = (item) => {
    closeMenu(); // Close the menu after clicking a menu item
  };

  // Render mobile navigation only when isMenuOpen is true
  return (
    <>
      {isMenuOpen && (
        <div className='min-h-screen w-full fixed inset-0 flex flex-col md:hidden text-white justify-center items-center font-homo bg-black gap-4 z-50'>
          <ul className="list-none flex flex-col justify-center items-center text-3xl gap-4 font-bold">
            <li className={`${activeLink === '' ? 'text-yellow-500' : ''}`}>
              <Link to="/" onClick={() => {setActiveLink(''); handleLinkClickWithScroll('home')}}>Home</Link>
            </li>
            <li className={`${activeLink === 'sports' ? 'text-yellow-500' : ''}`}>
              <Link to="/sports" onClick={() => {setActiveLink('sports'); handleLinkClickWithScroll('sports')}}>Sports</Link>
            </li>
            <li className={`${activeLink === 'technical' ? 'text-yellow-500' : ''}`}>
              <Link to="/technical" onClick={() => {setActiveLink('technical'); handleLinkClickWithScroll('technical')}}>Technical</Link>
            </li>
            <li className={`${activeLink === 'esports' ? 'text-yellow-500' : ''}`}>
              <Link to="/esports" onClick={() => {setActiveLink('esports'); handleLinkClickWithScroll('esports')}}>Esports</Link>
            </li>
            <li className={`${activeLink === 'cultural' ? 'text-yellow-500' : ''}`}>
              <Link to="/cultural" onClick={() => {setActiveLink('cultural'); handleLinkClickWithScroll('cultural')}}>Cultural</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileNav;
