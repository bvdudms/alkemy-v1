import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomButton from './CustomButton';
import CustomButton1 from './CustomButton1';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const TSlider = ({ events, imageWidth, imageHeight }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768, // Adjust as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative px-7">
      <Slider {...settings} className=''>
        {events.map((event, index) => (
          <div key={event.id} className="focus:outline-none">
            <div className="rounded-lg p-2 md:p-3 flex flex-col justify-center items-center">
              <img src={event.img} alt="Image" style={{ width: imageWidth, height: imageHeight }} className='rounded-3xl' />
              <h2 className="text-center text-white text-2xl font-homo tracking-wide font-bold">{event.name}</h2>
              <p className=" text-center text-white text-lg font-bold">Date: {event.date}</p>
              <p className=" text-center text-white text-lg font-bold">Mode: {event.mode}</p>
              <p className=" text-center text-white text-lg font-bold">Entry Fee: {event.entryfee}</p>
              <CustomButton1 link={event.url1} />
              <CustomButton link={event.url2} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute text-yellow-500 top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6  w-8 h-8 md:w-8 md:h-8 flex justify-center items-center focus:outline-none"
      onClick={onClick}
    >
      <MdOutlineKeyboardArrowLeft className='w-16 h-16'/>
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute text-yellow-500 top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-6 w-8 h-8 md:w-8 md:h-8 flex justify-center items-center focus:outline-none"
      onClick={onClick}
    >
      <MdOutlineKeyboardArrowRight className='w-16 h-16'/>
    </button>
  );
};

export default TSlider;
