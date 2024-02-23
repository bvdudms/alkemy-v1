import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const CouncilSlider = ({ slides, imageWidth, imageHeight }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative px-8">
      <Slider {...settings} className="">
        {slides.map((slide, index) => (
          <div key={index} className="focus:outline-none">
            <div className="rounded-lg p-2 md:p-3 flex flex-col justify-center items-center">
              <img src={slide.image} alt="Image" style={{ width: imageWidth, height: imageHeight }} className="rounded-3xl" />
              <p className="text-center mt-2 text-white text-2xl font-homo font-bold">{slide.name}</p>
              <p className="text-center text-white text-lg font-bold">{slide.role}</p>
              <p className="text-center text-white text-lg font-bold">{slide.year}</p>
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
      className="absolute text-yellow-500 top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-20 h-20 flex justify-center items-center focus:outline-none z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft className="w-16 h-16" />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute text-yellow-500 top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-6 w-20 h-20 flex justify-center items-center focus:outline-none z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowRight className="w-16 h-16" />
    </button>
  );
};


export default CouncilSlider;
