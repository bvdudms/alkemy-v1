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
import cc from '../../image/cc.png';
import sf from '../../image/sf.png';
import bq from '../../image/bq.png';
import ibp from '../../image/ibp.png';
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
      entryFee: "--",
      img: `${typing}`,
      url1: "#_",
      url2: "https://forms.gle/mYHr8Wss67YhBRvQ6"
    },
    {
      id: 2,
      name: "Coding Wars",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "--",
      img: `${coding}`,
      url1: "#_",
      url2: "https://forms.gle/1B1vCMoVQMnSPDXa6"
    },
    {
      id: 3,
      name: "Webathon 1.0",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "--",
      img: `${web}`,
      url1: "#_",
      url2: "https://forms.gle/DXSwx4eDbxnkXxGx8"
    },
    {
      id: 4,
      name: "Treasure Hunt",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "--",
      img: `${treasure}`,
      url1: "#_",
      url2: "https://forms.gle/pdq3G7JGmdcyKFcn8"
    },
    {
      id: 5,
      name: "Graphic Designing",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "--",
      img: `${graphic}`,
      url1: "#_",
      url2: "https://forms.gle/kkq5JouK8Fx5BMrc6"
    },
    {
      id: 6,
      name: "Meme Wars",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "--",
      img: `${meme}`,
      url1: "#_",
      url2: "https://forms.gle/h5yDwWo1awj2e5pk8"
    },
    {
      id: 7,
      name: "Code Relay",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "--",
      img: `${relay}`,
      url1: "#_",
      url2: "https://forms.gle/k52tdDtQwUwiQbH36"
    },
    {
      id: 8,
      name: "Shark Tank",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "--",
      img: `${shark}`,
      url1: "#_",
      url2: "https://forms.gle/uw15AMayMA5e3xxJ7"
    },
    // Add more events as needed
  ];
  const dms = [
    {
      id: 9,
      name: "Coding Competition",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "Free",
      img: `${cc}`,
      url1: "https://drive.google.com/file/d/18JwZgkeJDMp4cGN5BLdSCZdoKwI51p7A/view?usp=sharing",
      url2: "https://www.google.com/url?q=https://forms.gle/QgEt4qu9VwamirYS7&sa=D&source=editors&ust=1708854910201628&usg=AOvVaw3c_VsIv6rOv0KwnJlQ69np"
    },
    {
      id: 10,
      name: "Short Film Making",
      date: "05/03/2024",
      mode: "Offline",
      entryFee: "Free",
      img: `${sf}`,
      url1: "https://drive.google.com/file/d/1H-_60SH_yzs2haVA9ovgFC2HVupF-yCE/view?usp=sharing",
      url2: "https://www.google.com/url?q=https://forms.gle/hE1fNjDVpRnidU697&sa=D&source=editors&ust=1708854910200667&usg=AOvVaw2ggnvIuZDzz17ZMBko4Sh_"
    },
    {
      id: 11,
      name: "Business Quiz",
      date: "07/03/2024",
      mode: "Offline",
      entryFee: "Free",
      img: `${bq}`,
      url1: "https://drive.google.com/file/d/1N7LgyRAaZCADzNQ9Pl5sv4MIHpRcPwi4/view?usp=sharing",
      url2: "https://www.google.com/url?q=https://forms.gle/Dx83texwyzvzF2oT9&sa=D&source=editors&ust=1708854910201407&usg=AOvVaw0jgBUDGwNv7kye-9edH-3u"
    },
    {
      id: 12,
      name: "Internship/Blackbook Project",
      date: "06/03/2024",
      mode: "Offline",
      entryFee: "Free",
      img: `${ibp}`,
      url1: "https://drive.google.com/file/d/1mRjiOIatfFpVC49UGP5c6z-kwXO9Adjt/view?usp=sharing",
      url2: "https://www.google.com/url?q=https://surl.li/qsnoo&sa=D&source=editors&ust=1708854910200983&usg=AOvVaw0HCeOb43JtfRAn4guMQNbn"
    },
  ]

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
        <div className="flex justify-center ">
          <hr className='border border-t-4 border-blue-700 w-[60vw]' />
        </div>
        <div className="flex justify-center my-2">
          <h3 className='text-center text-4xl max-sm:text-xl text-[dodgerblue] font-bold font-homo'>EVENTS BY DMS</h3>
        </div>
        <div className="flex justify-center">
          <hr className='border border-t-4 border-blue-700 w-[60vw]' />
        </div>
        <div className="max-md:hidden mt-8 grid grid-cols-4 justify-center items-center">
          {dms.map(event => (
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
            <TSlider events={dms} imageWidth={200} imageHeight={200} />
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