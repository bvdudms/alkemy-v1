import React from 'react';
import PageNav from '../util/PageNav';
import logo from '../../image/logo.png';
import technical from '../../image/technicalbg.jpg';
import typing from '../../image/typing.jpeg';
import technicallogo from '../../image/technical_logo.png';
import CustomButton from '../util/CustomButton';
import CustomButton1 from '../util/CustomButton1';
import FollowUs from '../util/FollowUs';
import TSlider from '../util/TSlider';
import { Link } from 'react-router-dom';
const Technical = ({ isMenuOpen, toggleMenu, closeMenu, handleScroll, isSmallScreen }) => {
  const events = [
    {
      id: 1,
      name: "Typing Competition",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "150;",
      img: `${typing}`,
      url1: "#_",
      url2: "#_"
    },
    {
      id: 2,
      name: "Typing Competition",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "150;",
      img: `${typing}`,
      url1: "#_",
      url2: "#_"
    },
    {
      id: 3,
      name: "Typing Competition",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "150;",
      img: `${typing}`,
      url1: "#_",
      url2: "#_"
    },
    {
      id: 4,
      name: "Typing Competition",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "150;",
      img: `${typing}`,
      url1: "#_",
      url2: "#_"
    },
    {
      id: 5,
      name: "Typing Competition",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "150;",
      img: `${typing}`,
      url1: "#_",
      url2: "#_"
    },
    {
      id: 6,
      name: "Typing Competition",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "150;",
      img: `${typing}`,
      url1: "#_",
      url2: "#_"
    },
    {
      id: 7,
      name: "Typing Competition",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "150;",
      img: `${typing}`,
      url1: "#_",
      url2: "#_"
    },
    {
      id: 8,
      name: "Typing Competition",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "150;",
      img: `${typing}`,
      url1: "#_",
      url2: "#_"
    },


    // Add more events as needed
  ];
  return (
    <>
      <div className=''>
        <img className="bg1 min-h-screen -z-50 " src={technical} alt="" />
        <PageNav toggleMenu={toggleMenu} closeMenu={closeMenu} isMenuOpen={isMenuOpen} handleScroll={handleScroll} logo={logo} buttonColor={"dodgerblue"}></PageNav>
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


        <div className="max-md:hidden mt-8 grid grid-cols-4 justify-center items-center">
          {events.map(event => (
            <div key={event.id} className="mb-9 text-white font-mono font-bold flex flex-col justify-center items-center">
              <img className='w-[200px] rounded-xl' src={event.img} alt="" />
              <p className='text-2xl tracking-wider'>{event.name}</p>
              <p>Date: {event.date}</p>
              <p>Mode: {event.mode}</p>
              <p>Entry fee: {event.entryFee}</p>
              <CustomButton1 link={event.url1} />
              <CustomButton link={event.url2} />
            </div>
          ))}

        </div>

        {isSmallScreen && (
          <div className="max-sm:mt-5">
            <TSlider events={events} imageWidth={200} imageHeight={200} />
          </div>
        )}

        <div className="flex justify-center items-center mt-6 max-sm:mt-4">
          <button className='bg-blue-500 hover:bg-[blue] w-40 p-2 text-white rounded-full font-semibold text-lg'>
            <Link to="/allcouncil">
              View Council &gt;
            </Link></button>
        </div>
      </div>
      <div className="mt-3 lg:pl-[8vw] max-sm:text-center text-white">
        <p className='underline text-blue-500 mb-2 text-4xl max-sm:text-3xl font-sp font-bold'>Contact Us</p>
        <p className='font-bold text-xl font-homo max-sm:text-lg'>JETRA VYAS: +911234567899</p>
        <p className='font-bold text-xl font-homo max-sm:text-lg'>JETRA VYAS: +911234567899</p>
        <p className='font-bold text-xl font-homo max-sm:text-lg'>JETRA VYAS: +911234567899</p>
      </div>
      <div className="max-sm:px-2">
      <FollowUs></FollowUs>
      </div>
    </>
  )
}

export default Technical