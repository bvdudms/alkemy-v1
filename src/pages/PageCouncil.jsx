import React from 'react'
import DurgeshKeshri from '../../image/DurgeshKeshri.jpg';
import CardSlider from '../util/CardSlider';
const TechCouncil = ({ isSmallScreen }) => {
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


                <div className="max-sm:hidden">


                    <div className="mt-8 flex justify-center">

                        <div className="grid grid-cols-4 gap-8">

                            <div className="w-[250px] h-[250px] flex flex-col gap-1 items-center mb-6">
                                <img src={DurgeshKeshri} alt="" className='w-[200px] h-[200px] rounded-3xl' />
                                <p className='text-center text-white text-lg font-homo font-bold'>DURGESH KESHRI</p>
                                <p className=' text-center text-white text-sm font-bold'>(TECHNICAL CO-SEC)</p>
                                <p className=' text-center text-white text-sm font-bold'>SY BCA</p>
                            </div>
                            <div className="w-[250px] h-[250px] flex flex-col gap-1 items-center mb-6">
                                <img src={DurgeshKeshri} alt="" className='w-[200px] h-[200px] rounded-3xl' />
                                <p className='text-center text-white text-lg font-homo font-bold'>DURGESH KESHRI</p>
                                <p className=' text-center text-white text-sm font-bold'>(TECHNICAL CO-SEC)</p>
                                <p className=' text-center text-white text-sm font-bold'>SY BCA</p>
                            </div>
                            <div className="w-[250px] h-[250px] flex flex-col gap-1 items-center mb-6">
                                <img src={DurgeshKeshri} alt="" className='w-[200px] h-[200px] rounded-3xl' />
                                <p className='text-center text-white text-lg font-homo font-bold'>DURGESH KESHRI</p>
                                <p className=' text-center text-white text-sm font-bold'>(TECHNICAL CO-SEC)</p>
                                <p className=' text-center text-white text-sm font-bold'>SY BCA</p>
                            </div>
                            <div className="w-[250px] h-[250px] flex flex-col gap-1 items-center mb-6">
                                <img src={DurgeshKeshri} alt="" className='w-[200px] h-[200px] rounded-3xl' />
                                <p className='text-center text-white text-lg font-homo font-bold'>DURGESH KESHRI</p>
                                <p className=' text-center text-white text-sm font-bold'>(TECHNICAL CO-SEC)</p>
                                <p className=' text-center text-white text-sm font-bold'>SY BCA</p>
                            </div>
                            <div className="w-[250px] h-[250px] flex flex-col gap-1 items-center mb-6">
                                <img src={DurgeshKeshri} alt="" className='w-[200px] h-[200px] rounded-3xl' />
                                <p className='text-center text-white text-lg font-homo font-bold'>DURGESH KESHRI</p>
                                <p className=' text-center text-white text-sm font-bold'>(TECHNICAL CO-SEC)</p>
                                <p className=' text-center text-white text-sm font-bold'>SY BCA</p>
                            </div>
                            <div className="w-[250px] h-[250px] flex flex-col gap-1 items-center mb-6">
                                <img src={DurgeshKeshri} alt="" className='w-[200px] h-[200px] rounded-3xl' />
                                <p className='text-center text-white text-lg font-homo font-bold'>DURGESH KESHRI</p>
                                <p className=' text-center text-white text-sm font-bold'>(TECHNICAL CO-SEC)</p>
                                <p className=' text-center text-white text-sm font-bold'>SY BCA</p>
                            </div>
                            <div className="w-[250px] h-[250px] flex flex-col gap-1 items-center mb-6">
                                <img src={DurgeshKeshri} alt="" className='w-[200px] h-[200px] rounded-3xl' />
                                <p className='text-center text-white text-lg font-homo font-bold'>DURGESH KESHRI</p>
                                <p className=' text-center text-white text-sm font-bold'>(TECHNICAL CO-SEC)</p>
                                <p className=' text-center text-white text-sm font-bold'>SY BCA</p>
                            </div>
                            <div className="w-[250px] h-[250px] flex flex-col gap-1 items-center mb-6">
                                <img src={DurgeshKeshri} alt="" className='w-[200px] h-[200px] rounded-3xl' />
                                <p className='text-center text-white text-lg font-homo font-bold'>DURGESH KESHRI</p>
                                <p className=' text-center text-white text-sm font-bold'>(TECHNICAL CO-SEC)</p>
                                <p className=' text-center text-white text-sm font-bold'>SY BCA</p>
                            </div>


                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                        <div className="grid grid-cols-5 gap-8 ">
                            <div className=" w-[250px] h-[250px] flex flex-col gap-1 items-center">
                            </div>
                            <div className="w-[250px] h-[250px] flex flex-col gap-1 items-center mb-6">
                                <img src={DurgeshKeshri} alt="" className='w-[200px] h-[200px] rounded-3xl' />
                                <p className='text-center text-white text-lg font-homo font-bold'>DURGESH KESHRI</p>
                                <p className=' text-center text-white text-sm font-bold'>(TECHNICAL CO-SEC)</p>
                                <p className=' text-center text-white text-sm font-bold'>SY BCA</p>
                            </div>
                            <div className="w-[250px] h-[250px] flex flex-col gap-1 items-center mb-6">
                                <img src={DurgeshKeshri} alt="" className='w-[200px] h-[200px] rounded-3xl' />
                                <p className='text-center text-white text-lg font-homo font-bold'>DURGESH KESHRI</p>
                                <p className=' text-center text-white text-sm font-bold'>(TECHNICAL CO-SEC)</p>
                                <p className=' text-center text-white text-sm font-bold'>SY BCA</p>
                            </div>
                            <div className="w-[250px] h-[250px] flex flex-col gap-1 items-center mb-6">
                                <img src={DurgeshKeshri} alt="" className='w-[200px] h-[200px] rounded-3xl' />
                                <p className='text-center text-white text-lg font-homo font-bold'>DURGESH KESHRI</p>
                                <p className=' text-center text-white text-sm font-bold'>(TECHNICAL CO-SEC)</p>
                                <p className=' text-center text-white text-sm font-bold'>SY BCA</p>
                            </div>

                            <div className="w-[250px] h-[250px] flex flex-col gap-1 items-center">
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {isSmallScreen && (
                        <div className="max-sm:mt-5">
                            <CardSlider slides={slides} imageWidth={250} imageHeight={250} />
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-center mt-6">
                <button className='bg-yellow-500 w-40 p-2 text-white rounded-full font-semibold text-lg'><a href="">View More &gt;</a></button>
            </div>
        </>
    )

}

export default TechCouncil