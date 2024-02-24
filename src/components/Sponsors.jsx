import React from 'react'
import photo from '../../image/photo.jpeg';
import CardSlider from '../util/CardSlider3';
const Sponsors = ({ isSmallScreen }) => {
  const slides = [
    {
      image: `${photo}`,
      name: "Name",
      url: "google.com",

    },
    {
      image: `${photo}`,
      name: "Name",
      url: "google.com",

    },
    {
      image: `${photo}`,
      name: "Name",
      url: "google.com",

    }
    // Add more slides as needed
  ];
  return (
    <div className="">
      <div>
        <div className="flex justify-center mt-6">
          <hr className='border border-t-4 border-yellow-400 w-[60vw]' />
        </div>
        <div className="flex justify-center my-2">
          <h3 className='text-center text-4xl text-yellow-300 font-bold font-homo'>Sponsers</h3>
        </div>
        <div className="flex justify-center">
          <hr className='border border-t-4 border-yellow-400 w-[60vw]' />
        </div>
        <div className="flex flex-col items-center justify-center"></div>
      </div>

      <div className="mt-8 grid grid-cols-5 px-12 max-md:hidden">

        <div className="w-[280px] h-[350px] flex flex-col justify-center gap-2 mb-2 font-homo">
          <img src={photo} alt="" className='w-[210px] h-[240px] self-center rounded-2xl' />
          <p className='text-2xl text-center text-white font-semibold'>Name1</p>
          <button className='self-center bg-yellow-500 rounded-full w-40 p-1'>
            <a href="" className='text-xl text-white font-semibold'>Visit Now &gt;</a>
          </button>
        </div>
        <div className="w-[280px] h-[350px] flex flex-col justify-center gap-2 mb-2 font-homo">
          <img src={photo} alt="" className='w-[210px] h-[240px] self-center rounded-2xl' />
          <p className='text-2xl text-center text-white font-semibold'>Name1</p>
          <button className='self-center bg-yellow-500 rounded-full w-40 p-1'>
            <a href="" className='text-xl text-white font-semibold'>Visit Now &gt;</a>
          </button>
        </div>
        <div className="w-[280px] h-[350px] flex flex-col justify-center gap-2 mb-2 font-homo">
          <img src={photo} alt="" className='w-[210px] h-[240px] self-center rounded-2xl' />
          <p className='text-2xl text-center text-white font-semibold'>Name1</p>
          <button className='self-center bg-yellow-500 rounded-full w-40 p-1'>
            <a href="" className='text-xl text-white font-semibold'>Visit Now &gt;</a>
          </button>
        </div>
        <div className="w-[280px] h-[350px] flex flex-col justify-center gap-2 mb-2 font-homo">
          <img src={photo} alt="" className='w-[210px] h-[240px] self-center rounded-2xl' />
          <p className='text-2xl text-center text-white font-semibold'>Name1</p>
          <button className='self-center bg-yellow-500 rounded-full w-40 p-1'>
            <a href="" className='text-xl text-white font-semibold'>Visit Now &gt;</a>
          </button>
        </div>
        <div className="w-[280px] h-[350px] flex flex-col justify-center gap-2 mb-2 font-homo">
          <img src={photo} alt="" className='w-[210px] h-[240px] self-center rounded-2xl' />
          <p className='text-2xl text-center text-white font-semibold'>Name1</p>
          <button className='self-center bg-yellow-500 rounded-full w-40 p-1'>
            <a href="" className='text-xl text-white font-semibold'>Visit Now &gt;</a>
          </button>
        </div>


        <div className="col-start-2 col-span-3 flex justify-center">
          <div className="w-[280px] h-[350px] flex flex-col justify-center gap-2 mb-8 font-homo">
            <img src={photo} alt="" className='w-[210px] h-[240px] self-center rounded-2xl' />
            <p className='text-2xl text-center text-white font-semibold'>Name1</p>
            <button className='self-center bg-yellow-500 rounded-full w-40 p-1'>
              <a href="" className='text-xl text-white font-semibold'>Visit Now &gt;</a>
            </button>
          </div>        <div className="w-[280px] h-[350px] flex flex-col justify-center gap-2 mb-8 font-homo">
            <img src={photo} alt="" className='w-[210px] h-[240px] self-center rounded-2xl' />
            <p className='text-2xl text-center text-white font-semibold'>Name1</p>
            <button className='self-center bg-yellow-500 rounded-full w-40 p-1'>
              <a href="" className='text-xl text-white font-semibold'>Visit Now &gt;</a>
            </button>
          </div>        <div className="w-[280px] h-[350px] flex flex-col justify-center gap-2 mb-8 font-homo">
            <img src={photo} alt="" className='w-[210px] h-[240px] self-center rounded-2xl' />
            <p className='text-2xl text-center text-white font-semibold'>Name1</p>
            <button className='self-center bg-yellow-500 rounded-full w-40 p-1'>
              <a href="" className='text-xl text-white font-semibold'>Visit Now &gt;</a>
            </button>
          </div>
        </div>

      </div>

      <div>
        {isSmallScreen && (
          <div className="max-sm:mt-5 px-2">
            <CardSlider slides={slides} imageWidth={260} imageHeight={340} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Sponsors