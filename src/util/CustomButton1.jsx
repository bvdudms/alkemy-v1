import React from 'react';

const CustomButton = ({ link}) => {
  return (
    <button>
      <a href={link} className=" font-mono mt-2 text-xl relative inline-flex items-center justify-center  py-[6px] px-[52px]  overflow-hidden font-medium text-red-900 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-gradient-to-r from-red-600 via-red-400 to-red-600 group-hover:translate-x-0 ease">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Know More</span>
        <span className="relative invisible">Know More</span>
      </a>
    </button>
  );
};

export default CustomButton;
