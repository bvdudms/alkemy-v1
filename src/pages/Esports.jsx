import React from 'react';
import PageNav from '../util/PageNav';
import logo from '../../image/logo.png';
import esportsbackground from '../../image/esportsbackground.jpg';
import typing from '../../image/typing.jpeg';
import valo from '../../image/valorant.jpeg';
import rocket from '../../image/rocket league.jpg';
import tekken from '../../image/tekken.jpg';
import fifa from '../../image/fifa.jpg';
import bgmi from '../../image/bgmi.jpeg';
import codm from '../../image/codm.jpg';
import clash from '../../image/clash royale.jpg';
import stumble from '../../image/stumble guys.jpg';
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
      name: "Valorant",
      date: "06/03/2024",
      mode: "Squad(Offline)",
      entryFee: "₹500",
      img: `${valo}`,
      url1: "https://drive.google.com/file/d/1FnUJRrGjFoHorP_VHvrjfJp4tVBPWcdi/view?usp=drive_link",
      url2: "https://forms.gle/UtzhJLM11ZE4iT8p7"
    },
    {
      id: 2,
      name: "Rocket League",
      date: "06/03/2024",
      mode: "Solo, Duo, Trio(Offline)",
      entryFee: "₹50, ₹100, ₹150",
      img: `${rocket}`,
      url1: "https://drive.google.com/file/d/1Vz3zaE7BpTmmPgPuTbAwRJS1E4JCU5D4/view?usp=drive_link",
      url2: "https://forms.gle/WFFF3V5wL1xXiGL8A"
    },
    {
      id: 3,
      name: "Tekken",
      date: "06/03/2024",
      mode: "Solo(Offline)",
      entryFee: "₹100",
      img: `${tekken}`,
      url1: "https://drive.google.com/file/d/1fMJ6pRPLtHtzXrWaa8ocBf0ZwJrqaoJr/view?usp=drive_link",
      url2: "https://forms.gle/PHeaDwVBmj7wT7APA"
    },
    {
      id: 4,
      name: "Fifa",
      date: "06/03/2024",
      mode: "Solo(Offline)",
      entryFee: "₹100",
      img: `${fifa}`,
      url1: "https://drive.google.com/file/d/1_5ZjT_HT1HdyzqUMVqeLxMK6whXCDCuz/view?usp=drive_link",
      url2: "https://forms.gle/f9MxCXVsdmKURbiT7"
    },    // Add more events as needed
  ];
  const events1 = [
    {
      id: 1,
      name: "Battlegrounds Mobile India",
      date: "06/03/2024",
      mode: "Squad(Offline)",
      entryFee: "₹200",
      img: `${bgmi}`,
      url1: "https://drive.google.com/file/d/1rt33W14ocwkgc5adI6xeKmbf48DVcGu_/view?usp=drive_link",
      url2: "https://forms.gle/jPbJMY3XpKcvCDFa9"
    },
    {
      id: 2,
      name: "Call of Duty Mobile",
      date: "06/03/2024",
      mode: "Squad(Offline)",
      entryFee: "₹250",
      img: `${codm}`,
      url1: "https://drive.google.com/file/d/14OybBBYyN5KMCLSjcyUpVaH_FbQK8JoY/view?usp=drive_link",
      url2: "https://forms.gle/zozCiyjoAW9QD7eX6"
    },
    {
      id: 3,
      name: "Clash Royale",
      date: "06/03/2024",
      mode: "Solo(Offline)",
      entryFee: "₹50",
      img: `${clash}`,
      url1: "https://drive.google.com/file/d/1DscWNtwM3-pEImFo34Te2RuyjWZqK8I5/view?usp=drive_link",
      url2: "https://forms.gle/dwW9oDVcKcFqR6ad7"
    },
    {
      id: 4,
      name: "Stumble Guys",
      date: "06/03/2024",
      mode: "Solo(Offline)",
      entryFee: "₹25",
      img: `${stumble}`,
      url1: "https://drive.google.com/file/d/1nW-acWbYNxb-5JgFrvu_f5pyvaZZM7YP/view?usp=drive_link",
      url2: "https://forms.gle/Ekivy38QVRVZp7eT7"
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
        <p className='font-bold text-xl font-homo max-sm:text-lg'>JETRA VYAS: 7600049861</p>
        <p className='font-bold text-xl font-homo max-sm:text-lg'>RITIJ SHAH: 7841896621</p>
      </div>
      <div className="max-sm:px-1">
      <FollowUs></FollowUs>
      </div>
    </>
  )
}

export default Esports