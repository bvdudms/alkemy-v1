import React from 'react'
import DurgeshKeshri from '../../image/DurgeshKeshri.jpg';
import CardSlider from './CardSlider';
const MadeBy = ({ isSmallScreen }) => {
  const slides = [
    {
      image: `${DurgeshKeshri}`,
      name: "DURGESH KESHRI",
      role: "(FRONTEND)",
      year: "SY BCA"
    },
    {
      image: `${DurgeshKeshri}`,
      name: "DURGESH KESHRI",
      role: "(FRONTEND)",
      year: "SY BCA"
    },
    {
      image: `${DurgeshKeshri}`,
      name: "DURGESH KESHRI",
      role: "(FRONTEND)",
      year: "SY BCA"
    },
    // Add more slides as needed
  ];
  return (
    <div>
      <div className="flex justify-center mt-6">
        <hr className='border border-t-4 border-yellow-400 w-[60vw]' />
      </div>
      <div className="flex justify-center my-2">
        <h3 className='text-center text-4xl text-yellow-300 font-bold'>Made By</h3>
      </div>
      <div className="flex justify-center">
        <hr className='border border-t-4 border-yellow-400 w-[60vw]' />
      </div>

      <div className="mt-8 flex justify-center max-md:hidden">

        <div className="grid grid-cols-3 gap-8">

          <div className="w-[250px] h-[250px] flex flex-col gap-2 items-center mb-6">
            <img src={DurgeshKeshri} alt="" className='w-[200px] h-[200px] rounded-3xl' />
            <p className='text-center text-white text-lg font-homo font-bold'>DURGESH KESHRI</p>
            <p className='-mt-1 text-center text-white text-sm font-bold'>(FRONTEND)</p>
            <p className='-mt-1 text-center text-white text-sm font-bold'>SY BCA</p>
          </div>
          <div className="w-[250px] h-[250px] flex flex-col gap-2 items-center mb-6">
            <img src={DurgeshKeshri} alt="" className='w-[200px] h-[200px] rounded-3xl' />
            <p className='text-center text-white text-lg font-homo font-bold'>DURGESH KESHRI</p>
            <p className='-mt-1 text-center text-white text-sm font-bold'>(FRONTEND)</p>
            <p className='-mt-1 text-center text-white text-sm font-bold'>SY BCA</p>
          </div>
          <div className="w-[250px] h-[250px] flex flex-col gap-2 items-center mb-6">
            <img src={DurgeshKeshri} alt="" className='w-[200px] h-[200px] rounded-3xl' />
            <p className='text-center text-white text-lg font-homo font-bold'>DURGESH KESHRI</p>
            <p className='-mt-1 text-center text-white text-sm font-bold'>(FRONTEND)</p>
            <p className='-mt-1 text-center text-white text-sm font-bold'>SY BCA</p>
          </div>
          <div className="w-[250px] h-[250px] flex flex-col gap-2 items-center mb-6">
            <img src={DurgeshKeshri} alt="" className='w-[200px] h-[200px] rounded-3xl' />
            <p className='text-center text-white text-lg font-homo font-bold'>DURGESH KESHRI</p>
            <p className='-mt-1 text-center text-white text-sm font-bold'>(FRONTEND)</p>
            <p className='-mt-1 text-center text-white text-sm font-bold'>SY BCA</p>
          </div>
          <div className="w-[250px] h-[250px] flex flex-col gap-2 items-center mb-6">
            <img src={DurgeshKeshri} alt="" className='w-[200px] h-[200px] rounded-3xl' />
            <p className='text-center text-white text-lg font-homo font-bold'>DURGESH KESHRI</p>
            <p className='-mt-1 text-center text-white text-sm font-bold'>(FRONTEND)</p>
            <p className='-mt-1 text-center text-white text-sm font-bold'>SY BCA</p>
          </div>
          <div className="w-[250px] h-[250px] flex flex-col gap-2 items-center mb-6">
            <img src={DurgeshKeshri} alt="" className='w-[200px] h-[200px] rounded-3xl' />
            <p className='text-center text-white text-lg font-homo font-bold'>DURGESH KESHRI</p>
            <p className='-mt-1 text-center text-white text-sm font-bold'>(FRONTEND)</p>
            <p className='-mt-1 text-center text-white text-sm font-bold'>SY BCA</p>
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
  )
}

export default MadeBy