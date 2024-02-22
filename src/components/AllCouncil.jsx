import React from 'react';
import PageNav from '../util/PageNav';
import logo from '../../image/logo.png';
import mainbg from '../../image/mainbg.png';
import DurgeshKeshri from '../../image/DurgeshKeshri.jpg';
import dms from '../../image/dom_logo.png';
import detlogo from '../../image/det_logo.jpeg';
import FollowUs from '../util/FollowUs';
import CouncilSlider from '../util/CouncilSlider';
import CardSlider from '../util/CardSlider';
const AllCouncil = ({ isMenuOpen, toggleMenu, closeMenu, handleScroll, isSmallScreen }) => {
  const slides = [
    {
      image: `${DurgeshKeshri}`,
      name: "DURGESH KESHRI",
      role: "(TECHNICAL CO-SEC)",
      year: "SY BCA"
    },
    {
      image: `${DurgeshKeshri}`,
      name: "DURGESH KESHRI",
      role: "(TECHNICAL CO-SEC)",
      year: "SY BCA"
    },
    {
      image: `${DurgeshKeshri}`,
      name: "DURGESH KESHRI",
      role: "(TECHNICAL CO-SEC)",
      year: "SY BCA"
    },
    // Add more slides as needed
  ];
  const slides1 = [
    {
      image: `${DurgeshKeshri}`,
      name: "DURGESH KESHRI",
      role: "(TECHNICAL CO-SEC)",
      year: "SY BCA"
    },
    {
      image: `${DurgeshKeshri}`,
      name: "DURGESH KESHRI",
      role: "(TECHNICAL CO-SEC)",
      year: "SY BCA"
    },
    {
      image: `${DurgeshKeshri}`,
      name: "DURGESH KESHRI",
      role: "(TECHNICAL CO-SEC)",
      year: "SY BCA"
    },
    // Add more slides as needed
  ];
  const slides2 = [
    {
      image: `${DurgeshKeshri}`,
      name: "DURGESH KESHRI",
      role: "(TECHNICAL CO-SEC)",
      year: "SY BCA"
    },
    {
      image: `${DurgeshKeshri}`,
      name: "DURGESH KESHRI",
      role: "(TECHNICAL CO-SEC)",
      year: "SY BCA"
    },
    {
      image: `${DurgeshKeshri}`,
      name: "DURGESH KESHRI",
      role: "(TECHNICAL CO-SEC)",
      year: "SY BCA"
    },
    // Add more slides as needed
  ];
  return (
    <>
      <div className=''>
        <img className="bg min-h-screen -z-50 " src={mainbg} alt="" />
        <PageNav toggleMenu={toggleMenu} closeMenu={closeMenu} isMenuOpen={isMenuOpen} handleScroll={handleScroll} logo={logo} buttonColor={"#7c3AED"}></PageNav>
        <hr className='border border-t-2 border-purple-600' />

        <div className="min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-center">
          <div className="flex justify-center items-center gap-4">
            <img className='w-[120px] h-[50px]' src={detlogo} alt="" />
            <img className='w-[100px]' src={dms} alt="" />
          </div>
          <p className='text-center text-purple-600 text-8xl font-bold max-sm:text-4xl'>Student Council</p>
          <p className='text-white text-3xl font-bold mt-5 lg:px-96 text-center max-sm:text-lg max-sm:px-5'>Passion, innovation, excitement - witness our student council's marvels: sports, culture, tech, esports - each event resonates with excellence. 🏆🌟</p>
        </div>

        <div className="flex justify-center ">
          <hr className='border border-t-4 border-purple-700 w-[60vw]' />
        </div>
        <div className="flex justify-center my-2">
          <h3 className='text-center text-4xl max-sm:text-xl text-purple-600 font-bold font-homo'>COUNCIL HEADS</h3>
        </div>
        <div className="flex justify-center">
          <hr className='border border-t-4 border-purple-700 w-[60vw]' />
        </div>
        <div className="">
          <div className=" max-sm:hidden px-32 mt-8">
            <CouncilSlider slides={slides} imageWidth={250} imageHeight={250} ></CouncilSlider>
          </div>
          <div>
          {isSmallScreen && (
              <div className="max-sm:mt-5">
                <CardSlider slides={slides} imageWidth={250} imageHeight={250} />
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-center ">
          <hr className='border border-t-4 border-purple-700 w-[60vw]' />
        </div>
        <div className="flex justify-center my-2">
          <h3 className='text-center text-4xl max-sm:text-xl text-purple-600 font-bold font-homo'>SECRETARIES</h3>
        </div>
        <div className="flex justify-center">
          <hr className='border border-t-4 border-purple-700 w-[60vw]' />
        </div>
        <div className="">
          <div className=" max-sm:hidden px-32 mt-8">
            <CouncilSlider slides={slides1} imageWidth={250} imageHeight={250} ></CouncilSlider>
          </div>
          <div>
          {isSmallScreen && (
              <div className="max-sm:mt-5">
                <CardSlider slides={slides1} imageWidth={250} imageHeight={250} />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center ">
          <hr className='border border-t-4 border-purple-700 w-[60vw]' />
        </div>
        <div className="flex justify-center my-2">
          <h3 className='text-center text-4xl max-sm:text-xl text-purple-600 font-bold font-homo'>MEMBERS</h3>
        </div>
        <div className="flex justify-center">
          <hr className='border border-t-4 border-purple-700 w-[60vw]' />
        </div>
        <div className="">
          <div className=" max-sm:hidden px-32 mt-8">
            <CouncilSlider slides={slides2} imageWidth={250} imageHeight={250} ></CouncilSlider>
          </div>
          <div>
          {isSmallScreen && (
              <div className="max-sm:mt-5">
                <CardSlider slides={slides2} imageWidth={250} imageHeight={250} />
              </div>
            )}
          </div>
        </div>


      </div>
      <FollowUs></FollowUs>
    </>
  )
}

export default AllCouncil