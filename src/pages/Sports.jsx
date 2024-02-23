import React from 'react';
import PageNav from '../util/PageNav';
import logo from '../../image/logo.png';
import sportsbg from '../../image/sportsbg.jpg';
import typing from '../../image/typing.jpeg';
import cricket from '../../image/cricket.jpg'
import volleyball from '../../image/volleyball.jpg'
import kabbadi from '../../image/kabbadi.jpg'
import football from '../../image/football.jpg'
import sportslogo from '../../image/sportslogo.png';
import CustomButton from '../util/CustomButton';
import CustomButton1 from '../util/CustomButton1';
import FollowUs from '../util/FollowUs';
import TSlider from '../util/TSlider';
import { Link } from 'react-router-dom';
const sports = ({ isMenuOpen, toggleMenu, closeMenu, handleScroll, isSmallScreen }) => {
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
    {
      id: 5,
      name: "Typing Competition",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "150;",
      img: `${typing}`,
      url1: "#_",
      url2: "#_"
    },    // Add more events as needed
    {
      id: 6,
      name: "Typing Competition",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "150;",
      img: `${typing}`,
      url1: "#_",
      url2: "#_"
    }, // Add more events as needed
  ];
  const events1 = [
    {
      id: 1,
      name: "Cricket(boys/girls)",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "150;",
      img: `${typing}`,
      url1: "#_",
      url2: "#_"
    },
    {
      id: 2,
      name: "Cricket(boys/girls)",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "150;",
      img: `${typing}`,
      url1: "#_",
      url2: "#_"
    },
    {
      id: 3,
      name: "Cricket(boys/girls)",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "150;",
      img: `${typing}`,
      url1: "#_",
      url2: "#_"
    },
    {
      id: 4,
      name: "Cricket(boys/girls)",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "150;",
      img: `${typing}`,
      url1: "#_",
      url2: "#_"
    },    // Add more events as needed
    {
      id: 5,
      name: "Cricket(boys/girls)",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "150;",
      img: `${typing}`,
      url1: "#_",
      url2: "#_"
    },    // Add more events as needed
    {
      id: 6,
      name: "Cricket(boys/girls)",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "150;",
      img: `${typing}`,
      url1: "#_",
      url2: "#_"
    },    // Add more events as needed
    {
      id: 7,
      name: "Cricket(boys/girls)",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "150;",
      img: `${typing}`,
      url1: "#_",
      url2: "#_"
    },    // Add more events as needed
    {
      id: 8,
      name: "Cricket(boys/girls)",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "150;",
      img: `${typing}`,
      url1: "#_",
      url2: "#_"
    },    // Add more events as needed
    {
      id: 9,
      name: "Cricket(boys/girls)",
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
        <img className="bg1 min-h-screen -z-50 " src={sportsbg} alt="" />
        <PageNav toggleMenu={toggleMenu} closeMenu={closeMenu} isMenuOpen={isMenuOpen} handleScroll={handleScroll} logo={logo} buttonColor={"red"}></PageNav>
        <hr className='border border-t-2 border-[red]' />

        <div className="min-h-[90vh] lg:min-h-screen flex flex-col items-center max-sm:justify-center">
          <img src={sportslogo} className="w-[60vw] max-w-[300px] h-auto mt-8 mb-1 rounded-full" alt="" />
          <p className='text-center text-[red] text-8xl font-bold max-sm:text-5xl'>Sports Zone</p>
          <p className='text-white text-3xl font-bold mt-5 lg:px-[500px] text-center max-sm:text-xl max-sm:px-[10vw]'>Unleash the magic ⚡️ within at Alkemy! ⚽️ Transform your game, level up your spirit.</p>
        </div>
        <div className="flex justify-center ">
          <hr className='border border-t-4 border-red-600 w-[60vw]' />
        </div>
        <div className="flex justify-center my-2">
          <h3 className='text-center text-4xl max-sm:text-xl text-[red] font-bold font-homo'>UPCOMING EVENTS</h3>
        </div>
        <div className="flex justify-center">
          <hr className='border border-t-4 border-red-600 w-[60vw]' />
        </div>

        <div className="font-semibold px-40 max-sm:px-5 max-sm:text-2xl text-3xl text-[red] text-center underline mt-8">
          <p>Inter College Events</p>
        </div>

        <div className="max-md:hidden mt-8 grid grid-cols-3 justify-center items-center px-48">
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
        <div className="max-sm:hidden font-semibold px-40 text-3xl text-[red] text-center underline">
          <p>Intra College Events</p>
        </div>

        <div className="max-md:hidden mt-8 grid grid-cols-3 justify-center items-center px-32">
          {events1.map(event => (
            <div key={event.id} className="mb-9 text-white font-mono font-medium flex flex-col justify-center items-center">
              <img className='w-[200px] rounded-xl' src={event.img} alt="" />
              <p className='text-2xl text-center'>{event.name}</p>
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
        <div className="max-sm:px-5 lg:hidden max-sm:text-2xl font-semibold px-40 text-3xl text-[red] text-center underline">
          <p>Intra College Events</p>
        </div>
        {isSmallScreen && (
          <div className="max-sm:mt-5">
            <TSlider events={events1} imageWidth={200} imageHeight={200} />
          </div>
        )}

        <div className="flex justify-center items-center mt-6 max-sm:mt-4">
          <button className='bg-red-600 hover:bg-[red] w-40 p-2 text-white rounded-full font-semibold text-lg'>
            <Link to="/allcouncil">
              View Council &gt;
            </Link></button>
        </div>
      </div>
      <div className="mt-3 lg:pl-[8vw] max-sm:text-center text-white">
        <p className='underline text-[red] mb-2 text-4xl max-sm:text-3xl font-sp font-bold'>Contact Us</p>
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

export default sports