import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Day1Items({ 
  autoplaySpeed = 3000, 
  pauseOnHover = true,
  centerMode = true,
  centerPadding = "60px",
  slidesToShow = 3,
  rows = 2
}) {
  const logos = [
    "/Optima-gallery-photos/day1-images/Copy of IMG_7913.jpg",
    "/Optima-gallery-photos/day1-images/Copy of IMG_9783.jpg",
    "/Optima-gallery-photos/day1-images/Copy of IMG_9790.jpg",
    "/Optima-gallery-photos/day1-images/Copy of IMG_9800.jpg",
    "/Optima-gallery-photos/day1-images/Copy of IMG_9808.jpg",
    "/Optima-gallery-photos/day1-images/Copy of IMG_9811.jpg",
    "/Optima-gallery-photos/day1-images/IMG_0732.jpg",
    "/Optima-gallery-photos/day1-images/IMG_0739.jpg",
    "/Optima-gallery-photos/day1-images/IMG_0765.jpg",
    "/Optima-gallery-photos/day1-images/IMG_0771.jpg",
    "/Optima-gallery-photos/day1-images/IMG_0794.jpg",
    "/Optima-gallery-photos/day1-images/IMG_0732.jpg"
  ];

  const settings = {
    centerMode,
    infinite: true,
    centerPadding,
    slidesToShow,
    speed: 500,
    rows,
    autoplay: true,
    autoplaySpeed,
    pauseOnHover,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, centerPadding: "50px" }},
      { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "40px" }},
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "30px" }}
    ],
    customPaging: (i) => (
      <div className="w-3 h-3 bg-gray-400 rounded-full mx-1 hover:bg-gray-600 transition-all"></div>
    )
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {logos.map((src, index) => (
          <div 
            key={index} 
            className="w-48 h-56 overflow-hidden p-2 transition-all duration-300 ease-in-out hover:scale-105"
          >
            <img 
              src={src} 
              alt={`Image description ${index + 1}`} 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Day1Items;
