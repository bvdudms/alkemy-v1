import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const CardSlider = ({ slides, imageWidth, imageHeight }) => {
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
    <div className="relative px-6">
      <Slider {...settings} className=''>
        {slides.map((slide, index) => (
          <div key={index} className="focus:outline-none">
            <div className="rounded-lg p-2 md:p-3 gap-2 flex flex-col justify-center items-center">
              <img src={slide.image} alt="Image" style={{ width: imageWidth, height: imageHeight }} className='rounded-xl' />
              <h2 className="text-center text-white text-3xl font-homo font-bold">{slide.name}</h2>
              <button className='self-center bg-yellow-500 rounded-full w-40 p-1'>
            <a href="${slide.url}" className='text-xl text-white font-semibold'>Visit Now &gt;</a>
          </button>
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

export default CardSlider;
