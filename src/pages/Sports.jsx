import React from 'react';
import PageNav from '../util/PageNav';
import logo from '../../image/logo.png';
import sportsbg from '../../image/sportsbg.jpg';
import cricket from '../../image/cricket.jpg'
import volleyball from '../../image/volleyball.jpg'
import kabaddi from '../../image/kabbadi.jpg'
import football from '../../image/football.jpg'
import throwball from '../../image/throw_ball.jpg'
import tug from '../../image/tug of war.jpg'
import ath1 from '../../image/100m.jpg'
import ath2 from '../../image/200m.jpg'
import chess from '../../image/chess.jpg'
import carrom from '../../image/carrom.jpg'
import badminton from '../../image/badminton.jpg'
import tt from '../../image/table tennis.jpg'
import shot from '../../image/shotput.jpg'
import disc from '../../image/disc throw.jpeg'
import dead from '../../image/deadlift.jpg'
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
      name: "Turf Cricket(Boys)",
      date: "02/03/2024",
      mode: "7+3",
      entryFee: "₹800",
      img: `${cricket}`,
      url1: "https://drive.google.com/file/d/11PUJsKwrWKTuwurc73PUT4_H1nJNcPHI/view?usp=drive_link",
      url2: "https://forms.gle/z2ApciNAvWp3GKBZA"
    },
    {
      id: 2,
      name: "Volleyball(Boys)",
      date: "02/03/2024",
      mode: "6+4",
      entryFee: "₹750",
      img: `${volleyball}`,
      url1: "https://drive.google.com/file/d/1zo2tAVD18qqE16SYn6yzL8Tz4UqjPxn9/view?usp=drive_link",
      url2: "https://forms.gle/Cs6WRbuUSYT6gzjRA"
    },
    {
      id: 3,
      name: "Futsal(Boys)",
      date: "02/03/2024",
      mode: "5+3",
      entryFee: "₹650",
      img: `${football}`,
      url1: "https://drive.google.com/file/d/17qxKkQbM1gtyZPhwZM-wI6KTP1b4NlqC/view?usp=drive_link",
      url2: "https://forms.gle/wtRLSNtJbQiMfshK6"
    },
    {
      id: 4,
      name: "Throw Ball(Girls)",
      date: "04/03/2024",
      mode: "6+3",
      entryFee: "₹500",
      img: `${throwball}`,
      url1: "https://drive.google.com/file/d/1oWOPNwMpXHLWY4CdpF5tICRmz6c6S6Hq/view?usp=drive_link",
      url2: "https://forms.gle/4sgvAb5fzccz5Gvr5"
    },    // Add more events as needed
    {
      id: 5,
      name: "Kabaddi(Boys)",
      date: "02/03/2024",
      mode: "7+3",
      entryFee: "₹700",
      img: `${kabaddi}`,
      url1: "https://drive.google.com/file/d/1hqbAI1xPLDE3EmKWHXi3HUZ5LWgXhd7y/view?usp=drive_link",
      url2: "https://forms.gle/uPKWF3HQEAHZmLUa7"
    },    // Add more events as needed
    {
      id: 6,
      name: "Tug of War(Boys/Girls)",
      date: "04/03/2024",
      mode: "8+0",
      entryFee: "₹700",
      img: `${tug}`,
      url1: "https://drive.google.com/file/d/13oove5aw4yqKFHjhp4CTAp5HHN_FIKov/view?usp=drive_link",
      url2: "https://forms.gle/GXCa81V4pxiv34ZV7"
    },
    // Add more events as needed
  ];
  const events1 = [
    {
      id: 1,
      name: "100m(Boys/Girls)",
      date: "03/03/2024",
      mode: "Singles",
      entryFee: "₹50",
      img: `${ath1}`,
      url1: "https://drive.google.com/file/d/1IYPm12cHTv57NO1-iJktfbChk7x-WS5T/view?usp=drive_link",
      url2: "https://forms.gle/9f5QrH3tjkT38H3V8"
    },
    {
      id: 2,
      name: "200m(Boys/Girls)",
      date: "03/03/2024",
      mode: "Singles",
      entryFee: "₹50",
      img: `${ath2}`,
      url1: "https://drive.google.com/file/d/1IYPm12cHTv57NO1-iJktfbChk7x-WS5T/view?usp=drive_link",
      url2: "https://forms.gle/thXpemRafD6NH5XN8"
    },
    {
      id: 3,
      name: "Chess(Boys/Girls)",
      date: "03/03/2024",
      mode: "Singles",
      entryFee: "₹50",
      img: `${chess}`,
      url1: "https://drive.google.com/file/d/1cDQoMryjSreeahdIUe_ru92AApYMkU04/view?usp=drive_link",
      url2: "https://forms.gle/Qecn33yA4F7Rv76Y7"
    },
    {
      id: 4,
      name: "Carrom(Boys/Girls)",
      date: "03/03/2024",
      mode: "Singles",
      entryFee: "₹50",
      img: `${carrom}`,
      url1: "https://drive.google.com/file/d/1cDQoMryjSreeahdIUe_ru92AApYMkU04/view?usp=drive_link",
      url2: "https://forms.gle/FzhTb4ag1GHGqVUz9"
    },    // Add more events as needed
    {
      id: 5,
      name: "Badminton(Boys/Girls)",
      date: "03/03/2024",
      mode: "Singles",
      entryFee: "₹100",
      img: `${badminton}`,
      url1: "https://drive.google.com/file/d/1Bis6jL0A0LB-pvDKoqF_jjyNWsJLxkZR/view?usp=drive_link",
      url2: "https://forms.gle/ek33LFbViiWiRPsF7"
    },    // Add more events as needed
    {
      id: 6,
      name: "Table Tennis(Boys)",
      date: "03/03/2024",
      mode: "Singles",
      entryFee: "₹50",
      img: `${tt}`,
      url1: "https://drive.google.com/file/d/1TzSVhKjr9aGU0C9GUMOrbBOTX_agCw7J/view?usp=drive_link",
      url2: "https://forms.gle/PwxPupnPfyXJRUmJ6"
    },    // Add more events as needed
    {
      id: 7,
      name: "Shotput(Boys)",
      date: "03/03/2024",
      mode: "Singles",
      entryFee: "₹50",
      img: `${shot}`,
      url1: "https://drive.google.com/file/d/11XFpgqWWh8BSzeQabv7X9nVpUhcfB1IU/view?usp=drive_link",
      url2: "https://forms.gle/3Nznb1QzCW5WmJn29"
    },    // Add more events as needed
    {
      id: 8,
      name: "Disc Throw(Boys)",
      date: "03/03/2024",
      mode: "Singles",
      entryFee: "₹50",
      img: `${disc}`,
      url1: "https://drive.google.com/file/d/11XFpgqWWh8BSzeQabv7X9nVpUhcfB1IU/view?usp=drive_link",
      url2: "https://forms.gle/Zpx2vLbHgK37VLnQA"
    },    // Add more events as needed
    {
      id: 9,
      name: "Deadlift(Boys)",
      date: "05/03/2024",
      mode: "Singles",
      entryFee: "₹100",
      img: `${dead}`,
      url1: "https://drive.google.com/file/d/18UkBe_4jPgnzmvAHqkoVj4DhbH2uJAnI/view?usp=drive_link",
      url2: "https://forms.gle/qGYgR47rh393sKT56"
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
              <p>Players+Substitute: {event.mode}</p>
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
        <p className='font-bold text-xl font-homo max-sm:text-lg'>SUMIT WAGHMARE: 9833110059</p>
      </div>
      <div className="max-sm:px-1">
      <FollowUs></FollowUs>
      </div>
    </>
  )
}

export default sports