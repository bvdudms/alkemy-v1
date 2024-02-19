import React, { useState } from 'react';

const MobileNav = ({ isMenuOpen, closeMenu, handleScroll }) => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClickWithScroll = (item) => {
    handleScroll(item);
    setActiveLink(item); // Set the active link state to the clicked item
    closeMenu();
  };

  // Render mobile navigation only when isMenuOpen is true
  return (
    <>
      {isMenuOpen && (
        <div className='min-h-screen w-full fixed inset-0 flex flex-col md:hidden  text-white justify-center items-center font-homo bg-slate-950 gap-4 z-50'>
          <ul className="list-none flex flex-col justify-center items-center text-3xl gap-4 font-bold">
            <li><a className={`${activeLink === 'home' ? 'text-yellow-500' : ''}`} onClick={() => handleLinkClickWithScroll('home')} href="">Home</a></li>
            <li><a className={`${activeLink === 'events' ? 'text-yellow-500' : ''}`} onClick={() => handleLinkClickWithScroll('events')} href="">Events</a></li>
            <li><a className={`${activeLink === 'sponsors' ? 'text-yellow-500' : ''}`} onClick={() => handleLinkClickWithScroll('sponsors')} href="">Sponsors</a></li>
            <li><a className={`${activeLink === 'council' ? 'text-yellow-500' : ''}`} onClick={() => handleLinkClickWithScroll('council')} href="">Council</a></li>
            <li><a className={`${activeLink === 'pastevents' ? 'text-yellow-500' : ''}`} onClick={() => handleLinkClickWithScroll('pastevents')} href="">Past Events</a></li>
            <li><a className={`${activeLink === 'aboutus' ? 'text-yellow-500' : ''}`} onClick={() => handleLinkClickWithScroll('aboutus')} href="">About Us</a></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileNav;
