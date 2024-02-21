import React from 'react'
import { Link } from 'react-router-dom';
import DurgeshKeshri from '../../image/DurgeshKeshri.jpg';
import CardSlider from './CardSlider';
import CouncilSlider from './CouncilSlider';
const Council = ({ isSmallScreen }) => {
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
    return (
        <>
            <div>
                <div className="flex justify-center mt-6">
                    <hr className='border border-t-4 border-yellow-400 w-[60vw]' />
                </div>
                <div className="flex justify-center my-2">
                    <h3 className='text-center text-4xl text-yellow-300 font-bold'>Council</h3>
                </div>
                <div className="flex justify-center">
                    <hr className='border border-t-4 border-yellow-400 w-[60vw]' />
                </div>

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
                <div className="flex justify-center mt-6">
                <button className='bg-yellow-500 hover:bg-yellow-600 w-40 p-2 text-white rounded-full font-semibold text-lg'>
                <Link to="/allcouncil">
                View Council &gt;
              </Link>
                </button>
            </div>
            </div>
        </>
    )

}

export default Council