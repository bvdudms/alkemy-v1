import React from 'react'
import mainbg from '../image/mainbg.png'
const DummyComponent = () => {
  return (
    <div>
      <img className="bg min-h-screen -z-50 " src={mainbg} alt="" />
      <div className=" min-h-screen flex justify-center items-center lg:text-4xl text-2xl text-white font-bold font-homo text-center px-[15vw]">
      "Enjoy our website best on mobile or desktop. Screen size below 640px or greater than 1280px are ideal. Thanks for understanding!"
      </div>
    </div>
  )
}

export default DummyComponent