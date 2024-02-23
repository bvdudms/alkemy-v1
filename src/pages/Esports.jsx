import React from 'react';
import PageNav from '../util/PageNav';
import logo from '../../image/logo.png';
import esportsbackground from '../../image/esportsbackground.jpg';
import typing from '../../image/typing.jpeg';
import esportslogo from '../../image/esportslogo.png';
import CustomButton from '../util/CustomButton';
import CustomButton1 from '../util/CustomButton1';
import FollowUs from '../util/FollowUs';
import TSlider from '../util/TSlider';
import { Link } from 'react-router-dom';
const Esports = ({ isMenuOpen, toggleMenu, closeMenu, handleScroll, isSmallScreen }) => {
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
    },    // Add more events as needed
  ];
  const events1 = [
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
    },    // Add more events as needed
  ];
  return (
    <>
      <div className=''>
        <img className="bg1 min-h-screen -z-50 " src={esportsbackground} alt="" />
        <PageNav toggleMenu={toggleMenu} closeMenu={closeMenu} isMenuOpen={isMenuOpen} handleScroll={handleScroll} logo={logo} buttonColor={"orange"}></PageNav>
        <hr className='border border-t-2 border-[orange]' />

        <div className="min-h-[90vh] lg:min-h-screen flex flex-col items-center max-sm:justify-center">
          <img src={esportslogo} className="w-[60vw] max-w-[300px] h-auto mt-8 mb-1 rounded-full" alt="" />
          <p className='text-center text-[orange] text-8xl font-bold max-sm:text-5xl'>Esports Zone</p>
          <p className='text-white text-3xl font-bold mt-5 lg:px-[550px] text-center max-sm:text-xl max-sm:px-20'>Gear up, lock in.
            It's game time. #esports 🎮</p>
        </div>
        <div className="flex justify-center ">
          <hr className='border border-t-4 border-orange-600 w-[60vw]' />
        </div>
        <div className="flex justify-center my-2">
          <h3 className='text-center text-4xl max-sm:text-xl text-[orange] font-bold font-homo'>UPCOMING EVENTS</h3>
        </div>
        <div className="flex justify-center">
          <hr className='border border-t-4 border-orange-600 w-[60vw]' />
        </div>

        <div className="max-sm:hidden flex justify-between px-40 text-3xl text-[#ffa500] underline mt-8">
          <p>PC GAMES</p>
          <p>PS5 GAMES</p>
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

        <div className="max-sm:hidden  mb-10 text-center text-3xl text-[#ffa500] underline ">
          <p>MOBILE GAMES</p>
        </div>

        <div className="max-md:hidden mt-8 grid grid-cols-4 justify-center items-center">
          {events1.map(event => (
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
        {isSmallScreen && (
          <div className="max-sm:mt-5">
            <TSlider events={events1} imageWidth={200} imageHeight={200} />
          </div>
        )}

        <div className="flex justify-center items-center mt-6 max-sm:mt-4">
          <button className='bg-orange-400 hover:bg-orange-600 w-40 p-2 text-white rounded-full font-semibold text-lg'>
            <Link to="/allcouncil">
              View Council &gt;
            </Link></button>
        </div>
      </div>
      <div className="mt-3 lg:pl-[8vw] max-sm:text-center text-white">
        <p className='underline text-orange-400 mb-2 text-4xl max-sm:text-3xl font-sp font-bold'>Contact Us</p>
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

export default Esports