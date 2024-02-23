import React from 'react';
import patang from '../../image/founder.jpg';
import dms from '../../image/dom_logo.png';
import detlogo from '../../image/det_logo.jpeg';
import bharati from '../../image/BV_Logo1.png';

const About = () => {
  return (
    <div className='mt-8 flex flex-wrap lg:px-16 lg:pl-20 justify-between'>
      <div className="w-full lg:w-[60%] lg:pl-12 max-sm:px-7">
        <div className="">
          <p className='lg:text-6xl  max-sm:text-3xl font-bold font-homo text-[yellow] underline'>About Us</p>
          <p className='text-white lg:text-lg max-sm:text-xs lg:mt-12 max-sm:mt-3 tracking-wide font-serif'>
            BHARATI VIDYAPEETH IS AN ORGANIZATION ESTABLISHED IN THE YEAR
            1964 BY DR. PATANGRAOJI KADAM. EMINENT IN THE FIELD OF
            EDUCATION, BHARATI VIDYAPEETH IS ONE OF THE LARGEST NETWORKS OF
            EDUCATIONAL INSTITUTIONS IN INDIA AND OVERSEAS. THE BHARATI
            VIDYAPEETH DEEMED UNIVERSITY IS A NETWORK OF EDUCATIONAL
            INSTITUTIONS IN INDIA AND OVERSEAS, FOUNDED IN 1964 TO
            PROVIDE QUALITY EDUCATION IN DIFFERENT AREAS OF KNOWLEDGE. THE
            UNIVERSITY FOCUSES ON BRIDGING THE GAP BETWEEN ACADEMIA AND
            INDUSTRY-ORIENTED EXPERIENCE, AND NURTURING STUDENTS TO BE
            COMPETENT PROFESSIONALS AND RESPONSIBLE CITIZENS.</p>
          <div className=" flex">
            <p className='text-white max-sm:text-md lg:text-4xl mt-5 lg:pr-32 tracking-widest font-serif'>MESSAGE BY HON'BLE DR. PATANGRAO KADAM:</p>
            <img src={patang} alt="" className='sm:hidden w-[70px] rounded-xl' />
          </div>

          <p className='text-white lg:text-lg lg:mt-5 max-sm:mt-2 max-sm:text-xs tracking-wide font-serif'>BHARATI VIDYAPEETH (DEEMED TO BE UNIVERSITY) IS COMMITTED TO BRINGING ABOUT SOCIAL EMPOWERMENT THROUGH DYNAMIC EDUCATION. IT HAS BEEN ABLE TO STAND TALL IN THE FIELD OF EDUCATION IN THE PAST AS WELL AS IN MODERN TIMES. OUR JOURNEY OF FOUR DECADES HAS EARNED PRIDE FOR US AS A UNIVERSITY. WE, AT BHARATI VIDYAPEETH (DEEMED TO BE UNIVERSITY), HAVE BEEN WORKING RELENTLESSLY TOWARDS FULFILLING OUR MISSION 'SOCIAL TRANSFORMATION THROUGH DYNAMIC EDUCATION'. WHILE PURSUING THIS MISSION, WE ARE PREPARED TO ACCEPT NEW CHALLENGES POSITIVELY.</p>
          <p className='text-white lg:text-lg mt-5 max-sm:text-xs tracking-wide font-serif'>LET US STRIVE TOGETHER TO BUILD OUR NATION!</p>
        </div>
      </div>
      <div className="w-full lg:w-1/3 gap-4 flex flex-col justify-center items-center">
        <div className="self-center flex flex-col justify-center max-sm:hidden">
          <img src={patang} alt="" className='w-[180px] self-center rounded-3xl' />
          <p className='text-white font-serif font-bold px-12 text-center text-lg'>Hon'ble Dr. Patangrao Kadam
            (Founder, Bharati Vidyapeeth, Pune)</p>
        </div>
        <div className="flex flex-col justify-center gap-8 max-sm:gap-2 max-sm:mt-5">
          <div className=" self-center">
            <img src={bharati} alt="" className='w-[100px]' />
          </div>
          <div className="flex items-center gap-12">
            <a href="https://www.bvuniversity.edu.in/doemumbai/">
              <img src={detlogo} alt="" className='w-[100px] h-[40px]' />
            </a>
            <a href="https://www.bvuniversity.edu.in/dommumbai/">
              <img src={dms} alt="" className='w-[100px]' />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
