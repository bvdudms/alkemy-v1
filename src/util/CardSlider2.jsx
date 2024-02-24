import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaInstagram, FaYoutube } from 'react-icons/fa';
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
    <div className="relative px-8">
      <Slider {...settings} className=''>
        {slides.map((slide, index) => (
          <div key={index} className="focus:outline-none">
            <div className="rounded-lg p-2 md:p-3 gap-2 flex flex-col justify-center items-center">
              <img src={slide.image} alt="Image" style={{ width: imageWidth, height: imageHeight }} className='rounded-3xl' />
              <h2 className="text-center text-white text-3xl font-homo font-bold">{slide.name}</h2>
              <div className="flex justify-center space-x-4 self-center">
                <a href="${slide.insta}" className="text-pink-500 hover:text-pink-700">
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="${slide.yt}" className="text-red-500 hover:text-red-700">
                  <FaYoutube className="h-6 w-6" />
                </a>
              </div>

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
      <MdOutlineKeyboardArrowLeft className='w-16 h-16' />
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
      <MdOutlineKeyboardArrowRight className='w-16 h-16' />
    </button>
  );
};

export default CardSlider;
