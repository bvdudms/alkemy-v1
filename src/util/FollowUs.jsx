import React from 'react';
import { FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

const FollowUs = () => {
  return (
    <>
    <p className='text-4xl font-bold text-yellow-300 lg:ml-[8.3vw] lg:mt-12 max-sm:text-center max-sm:mt-2'>Follow Us</p>
    <footer className="text-white py-8">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex flex-row space-x-8 lg:gap-4">
          <a href="#" className="text-2xl lg:text-4xl"><FaMapMarkerAlt className="text-green-700" /></a>
          <a href="#" className="text-2xl lg:text-4xl"><FaInstagram className="text-pink-700" /></a>
          <a href="#" className="text-2xl lg:text-4xl"><FaFacebook className="text-blue-500" /></a>
          <a href="#" className="text-2xl lg:text-4xl"><FaLinkedin className="text-blue-500" /></a>
          <a href="#" className="text-2xl lg:text-4xl"><FaYoutube className="text-red-500" /></a>
        </div>
      </div>
    </footer>
    <p className='text-gray-300 font-mono text-xl max-sm:text-xs max-sm:-mt-2 text-center font-medium'>Copyright © 2024 BVDU. All rights reserved</p>
    </>
  );
}

export default FollowUs;
