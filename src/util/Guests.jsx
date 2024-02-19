import React from 'react'
import DhananjayTech from '../../image/DhananjayTech.jpg'
import { FaInstagram, FaYoutube } from 'react-icons/fa';
const Guests = () => {
    return (
        <div className='max-md:hidden'>
            <div className="flex justify-center mt-6">
                <hr className='border border-t-4 border-yellow-400 w-[60vw]' />
            </div>
            <div className="flex justify-center my-2">
                <h3 className='text-center text-4xl text-yellow-300 font-bold'>Guests</h3>
            </div>
            <div className="flex justify-center">
                <hr className='border border-t-4 border-yellow-400 w-[60vw]' />
            </div>

            <div className="flex justify-center mt-8 gap-6">
                <div className="w-[220px] h-[320px] flex flex-col gap-1">
                    <img src={DhananjayTech} alt="" className='w-[200px] h-[250px] rounded-3xl self-center' />
                    <p className='text-xl text-center font-bold font-homo text-yellow-500'>DhananjayTech</p>
                    <div className="flex justify-center space-x-4 self-center">
                        <a href="#" className="text-pink-500 hover:text-pink-700">
                            <FaInstagram className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-red-500 hover:text-red-700">
                            <FaYoutube className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div className="w-[220px] h-[320px] flex flex-col gap-1">
                    <img src={DhananjayTech} alt="" className='w-[200px] h-[250px] rounded-3xl self-center' />
                    <p className='text-xl text-center font-bold font-homo text-yellow-500'>DhananjayTech</p>
                    <div className="flex justify-center space-x-4 self-center">
                        <a href="#" className="text-pink-500 hover:text-pink-700">
                            <FaInstagram className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-red-500 hover:text-red-700">
                            <FaYoutube className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div className="w-[220px] h-[320px] flex flex-col gap-1">
                    <img src={DhananjayTech} alt="" className='w-[200px] h-[250px] rounded-3xl self-center' />
                    <p className='text-xl text-center font-bold font-homo text-yellow-500'>DhananjayTech</p>
                    <div className="flex justify-center space-x-4 self-center">
                        <a href="#" className="text-pink-500 hover:text-pink-700">
                            <FaInstagram className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-red-500 hover:text-red-700">
                            <FaYoutube className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div className="w-[220px] h-[320px] flex flex-col gap-1">
                    <img src={DhananjayTech} alt="" className='w-[200px] h-[250px] rounded-3xl self-center' />
                    <p className='text-xl text-center font-bold font-homo text-yellow-500'>DhananjayTech</p>
                    <div className="flex justify-center space-x-4 self-center">
                        <a href="#" className="text-pink-500 hover:text-pink-700">
                            <FaInstagram className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-red-500 hover:text-red-700">
                            <FaYoutube className="h-6 w-6" />
                        </a>
                    </div>
                </div>
               

            </div>
        </div>

    )
}

export default Guests