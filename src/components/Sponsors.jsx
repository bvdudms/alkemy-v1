import React from 'react'
import photo from '../../image/photo.jpeg';
const Sponsors = () => {
  return (
    <div className="min-h-screen">
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

      <div className="mt-8 grid grid-cols-5 px-12">

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
    </div>
  )
}

export default Sponsors