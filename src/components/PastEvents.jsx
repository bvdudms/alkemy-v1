import React from 'react'
import pastevent from '../../image/code_relay.png'
const PastEvents = () => {
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

      <div className="mt-8 flex justify-center">
          <div className=" flex flex-col gap-2 w-[280px] h-[350px]">
            <img src={pastevent} alt=""  className='w-[220px] h-[330px] rounded-3xl self-center'/>
            <p className='text-white font-homo text-3xl text-center font-homo font-semibold'>Code Relay</p>
          </div>
          <div className=" flex flex-col gap-2 w-[280px] h-[350px]">
            <img src={pastevent} alt=""  className='w-[220px] h-[330px] rounded-3xl self-center'/>
            <p className='text-white font-homo text-3xl text-center font-homo font-semibold'>Code Relay</p>
          </div>
          <div className=" flex flex-col gap-2 w-[280px] h-[350px]">
            <img src={pastevent} alt=""  className='w-[220px] h-[330px] rounded-3xl self-center'/>
            <p className='text-white font-homo text-3xl text-center font-homo font-semibold'>Code Relay</p>
          </div>
          <div className=" flex flex-col gap-2 w-[280px] h-[350px]">
            <img src={pastevent} alt=""  className='w-[220px] h-[330px] rounded-3xl self-center'/>
            <p className='text-white font-homo text-3xl text-center font-homo font-semibold'>Code Relay</p>
          </div>
      </div>
    </div>
  )
}

export default PastEvents