import React, { useState } from 'react';

const MobileNav = ({ isMenuOpen, closeMenu, handleScroll }) => {
  const [activeLink, setActiveLink] = useState(null);
  
  const handleLinkClickWithScroll = (item) => {
    handleScroll(item.toLowerCase());
    setActiveLink(item);
    closeMenu(); // Close the menu after clicking a menu item
  };

  // Render mobile navigation only when isMenuOpen is true
  return (
    <>
      {isMenuOpen && (
        <div className='min-h-screen w-full fixed inset-0 flex flex-col md:hidden text-white justify-center items-center font-homo bg-black gap-4 z-50'>
          <ul className="list-none flex flex-col justify-center items-center text-3xl gap-4 font-bold font-serif">
            <li className={`${activeLink === 'home' ? 'text-yellow-500' : ''}`} onClick={() => handleLinkClickWithScroll('home')}>Home</li>
            <li className={`${activeLink === 'events' ? 'text-yellow-500' : ''}`} onClick={() => handleLinkClickWithScroll('events')}>Events</li>
            {/* <li className={`${activeLink === 'sponsors' ? 'text-yellow-500' : ''}`} onClick={() => handleLinkClickWithScroll('sponsors')}>Sponsors</li> */}
            <li className={`${activeLink === 'council' ? 'text-yellow-500' : ''}`} onClick={() => handleLinkClickWithScroll('council')}>Council</li>
            <li className={`${activeLink === 'pastevents' ? 'text-yellow-500' : ''}`} onClick={() => handleLinkClickWithScroll('pastevents')}>Past Events</li>
            <li className={`${activeLink === 'aboutus' ? 'text-yellow-500' : ''}`} onClick={() => handleLinkClickWithScroll('aboutus')}>About Us</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileNav;
