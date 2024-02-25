import React from 'react';
import sports from '../../image/sports.jpg';
import cultural from '../../image/cultural.jpg';
import tech from '../../image/tech.jpg';
import esports from '../../image/esports.jfif';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className='min-h-screen'>
      <div className="flex justify-center mt-2">
        <hr className='border border-t-4 border-yellow-400 w-[60vw]' />
      </div>
      <div className="flex justify-center my-2">
        <h3 className='text-center text-4xl text-yellow-300 font-bold'>Zones</h3>
      </div>
      <div className="flex justify-center">
        <hr className='border border-t-4 border-yellow-400 w-[60vw]' />
      </div>
      <div className="flex flex-col items-center justify-center">

        <div className="grid grid-cols-2 max-sm:gap-5 gap-4 px-44 max-sm:px-4 max-md:grid-cols-1 mt-8">
          <div className="flex flex-col gap-5 w-[440px] max-sm:w-[320px]">
            <img src={sports} alt="" className='self-center w-[400px] max-sm:w-[300px] rounded-xl' />
            <p className='text-center text-[#FF543E] text-5xl font-bold'>Sports</p>
            <button className='self-center w-[200px] text-2xl font-bold text-white bg-yellow-400 hover:bg-yellow-500 rounded-3xl py-2'>
              <Link to="/sports" className='py-2 px-[16px]'>
                Explore Now &#10097;
              </Link>
            </button>
          </div>
          <div className="flex flex-col gap-5 w-[440px] max-sm:w-[320px]">
            <img src={tech} alt="" className='self-center w-[400px] max-sm:w-[300px] rounded-xl' />
            <p className='text-center text-[dodgerblue] text-5xl font-bold'>Technical</p>
            <button className='self-center w-[200px] text-2xl font-bold text-white bg-yellow-400 hover:bg-yellow-500 rounded-3xl py-2'>
            <Link to="/technical" className='py-2 px-[16px]'>
                Explore Now &#10097;
              </Link>
            </button>
          </div>
          <div className="flex flex-col gap-5 w-[440px] max-sm:w-[320px]">
            <img src={esports} alt="" className='self-center w-[400px] max-sm:w-[300px] rounded-xl' />
            <p className='text-center text-[orange] text-5xl font-bold'>eSports</p>
            <button className='self-center w-[200px] text-2xl font-bold text-white bg-yellow-400 hover:bg-yellow-500 rounded-3xl py-2'>
            <Link to="/esports" className='py-2 px-[16px]'>
                Explore Now &#10097;
              </Link>
            </button>
          </div>
          <div className="flex flex-col gap-5 w-[440px] max-sm:w-[320px]">
            <img src={cultural} alt="" className='self-center w-[400px] max-sm:w-[300px] rounded-xl' />
            <p className='text-center text-[cyan] text-5xl font-bold'>Cultural</p>
            <button className='self-center w-[200px] text-2xl font-bold text-white bg-yellow-400 hover:bg-yellow-500 rounded-3xl py-2'>
            <Link to="/cultural" className='py-2 px-[16px]'>
                Explore Now &#10097;
              </Link>
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Events;
