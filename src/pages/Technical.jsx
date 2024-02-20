import React from 'react'
import PageNav from '../util/PageNav';
import logo from '../../image/logo.png';
import technical from '../../image/technicalbg.jpg'
import technicallogo from '../../image/technical_logo.png';


const Technical = ({ isMenuOpen, toggleMenu, closeMenu, handleScroll }) => {
  return (
    <>
    <div className=''>
      <img className="bg1 -z-50 " src={technical} alt="" />
      <PageNav toggleMenu={toggleMenu} closeMenu={closeMenu} isMenuOpen={isMenuOpen} handleScroll={handleScroll} logo={logo} ></PageNav>
      <hr className='border border-t-2 border-blue-500' />
      
      <div className="min-h-[90vh] lg:min-h-screen flex flex-col items-center max-sm:justify-center">
        <img src={technicallogo} className="w-[60vw] max-w-[300px] h-auto mt-8 mb-1 rounded-full" alt="" />
        <p className='text-center text-[dodgerblue] text-8xl font-bold max-sm:text-5xl'>Technical Zone</p>
        <p className='text-white text-3xl font-bold mt-5 lg:px-96 text-center max-sm:text-xl max-sm:px-5'>Alkemy ignites!  Code. Create. Connect. Anime tech event for future alchemists.  #TechCollege #Innovation ✨</p>
      </div>
      <div className="flex justify-center ">
            <hr className='border border-t-4 border-blue-700 w-[60vw]' />
          </div>
          <div className="flex justify-center my-2">
            <h3 className='text-center text-4xl max-sm:text-xl text-[dodgerblue] font-bold font-homo'>UPCOMING EVENTS</h3>
          </div>
          <div className="flex justify-center">
            <hr className='border border-t-4 border-blue-700 w-[60vw]' />
          </div>
    </div> 

        </>
  )
}

export default Technical