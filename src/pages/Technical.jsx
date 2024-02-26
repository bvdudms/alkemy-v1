import React from 'react';
import PageNav from '../util/PageNav';
import logo from '../../image/logo.png';
import technical from '../../image/technicalbg.jpg';
import typing from '../../image/typing.jpeg';
import shark from '../../image/shark tank.jpeg';
import coding from '../../image/code wars.jpg';
import web from '../../image/web.jpeg';
import treasure from '../../image/treasure.jpeg';
import graphic from '../../image/ui.jpeg';
import meme from '../../image/meme.jpeg';
import relay from '../../image/code relay.png';
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
      name: "Keyboard Kombat",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "₹50",
      img: `${typing}`,
      url1: "https://drive.google.com/file/d/1aPZ7yINnUkBEa8NVKb2nMPdh6e7jSngd/view",
      url2: "https://forms.gle/mYHr8Wss67YhBRvQ6"
    },
    {
      id: 2,
      name: "Coding Battlefield",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "₹50",
      img: `${coding}`,
      url1: "https://drive.google.com/file/d/1P3zzUf5ArmjvYEQfvQ0WY3qIkyFowUWZ/view",
      url2: "https://forms.gle/1B1vCMoVQMnSPDXa6"
    },
    {
      id: 3,
      name: "Webathon",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "₹100",
      img: `${web}`,
      url1: "https://drive.google.com/file/d/17_Ve6E3ICUJYSOwt6MaI0cizQy4v2Z0z/view",
      url2: "https://forms.gle/DXSwx4eDbxnkXxGx8"
    },
    {
      id: 4,
      name: "Treasure Hunt",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "₹200",
      img: `${treasure}`,
      url1: "https://drive.google.com/file/d/1tf7HJ-FcxbokrsQHhbY_lVpiog5-iQeX/view",
      url2: "https://forms.gle/pdq3G7JGmdcyKFcn8"
    },
    {
      id: 5,
      name: "Avengers Artistry Affairs",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "₹50",
      img: `${graphic}`,
      url1: "https://drive.google.com/file/d/1DWNAcI3_-XqklDJn-rQd7YGWR-5AskCf/view",
      url2: "https://forms.gle/kkq5JouK8Fx5BMrc6"
    },
    {
      id: 6,
      name: "Meme Mayhem",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "₹50",
      img: `${meme}`,
      url1: "https://drive.google.com/file/d/1Enr2ukGFt5PXD0O1CBAqGmwu97GvikO-/view?usp=drive_link",
      url2: "https://forms.gle/h5yDwWo1awj2e5pk8"
    },
    {
      id: 7,
      name: "Code Relay",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "₹200",
      img: `${relay}`,
      url1: "https://drive.google.com/file/d/1TfBTQhPz56J4uHUri4P1I8MzjgnTzCQB/view?usp=drive_link",
      url2: "https://forms.gle/k52tdDtQwUwiQbH36"
    },
    {
      id: 8,
      name: "Heroic Venture Vault",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "₹100",
      img: `${shark}`,
      url1: "https://drive.google.com/file/d/1PewA9K1dXW_ngmR_0xlVLiCJKiv_3a0y/view?usp=drive_link",
      url2: "https://forms.gle/uw15AMayMA5e3xxJ7"
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
            <div key={event.id} className="mb-9 text-white font-mono font-bold flex flex-col justify-center items-center text-center">
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
        <p className='font-bold text-xl font-homo max-sm:text-lg'>JETRA VYAS: 7600049861</p>
        <p className='font-bold text-xl font-homo max-sm:text-lg'>SUMEET DUBE: 9769796120</p>
        <p className='font-bold text-xl font-homo max-sm:text-lg'>KRITANSH TANK: 9430300890</p>
      </div>
      <div className="max-sm:px-1">
      <FollowUs></FollowUs>
      </div>
    </>
  )
}

export default Technical