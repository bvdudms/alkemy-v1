import React from 'react'
import pastevent from '../../image/code_relay.png'
import WebChallenge from '../../image/web_challenge1.jpg'
import cultural from '../../image/cul_event.jpg'
import codewars from '../../image/code_wars.jpg'
import CardSlider from '../util/CardSlider1';
const PastEvents = ({ isSmallScreen }) => {
  const slides = [
    {
      image: `${pastevent}`,
      name: "Code Relay"
    },
    {
      image: `${WebChallenge}`,
      name: "Web Challenge"

    },
    {
      image: `${cultural}`,
      name: "Cultural Event"

    },
    {
      image: `${codewars}`,
      name: "Code Wars"

    },
    // Add more slides as needed
  ];
  return (
    <div>
      <div className="flex justify-center mt-6">
        <hr className='border border-t-4 border-yellow-400 w-[60vw]' />
      </div>
      <div className="flex justify-center my-2">
        <h3 className='text-center text-4xl text-yellow-300 font-bold'>Past Events</h3>
      </div>
      <div className="flex justify-center">
        <hr className='border border-t-4 border-yellow-400 w-[60vw]' />
      </div>

      <div className="mt-8 flex justify-center max-md:hidden">
        <div className=" flex flex-col gap-2 w-[280px] h-[350px]">
          <img src={pastevent} alt="" className='w-[220px] h-[330px] rounded-3xl self-center' />
          <p className='text-white font-homo text-3xl text-center font-homo font-semibold'>Code Relay</p>
        </div>
        <div className=" flex flex-col gap-2 w-[280px] h-[350px]">
          <img src={WebChallenge} alt="" className='w-[220px] h-[330px] rounded-3xl self-center' />
          <p className='text-white font-homo text-3xl text-center font-homo font-semibold'>Web Challenge</p>
        </div>
        <div className=" flex flex-col gap-2 w-[280px] h-[350px]">
          <img src={cultural} alt="" className='w-[220px] h-[330px] rounded-3xl self-center' />
          <p className='text-white font-homo text-3xl text-center font-homo font-semibold'>Cultural Event</p>
        </div>
        <div className=" flex flex-col gap-2 w-[280px] h-[350px]">
          <img src={codewars} alt="" className='w-[220px] h-[330px] rounded-3xl self-center' />
          <p className='text-white font-homo text-3xl text-center font-homo font-semibold'>Code Wars</p>
        </div>
      </div>
      <div>
        {isSmallScreen && (
          <div className="max-sm:mt-5">
            <CardSlider slides={slides} imageWidth={280} imageHeight={350} />
          </div>
        )}
      </div>
    </div>
  )
}

export default PastEvents