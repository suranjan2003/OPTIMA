import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Day0Items({ 
  autoplaySpeed = 3000, 
  pauseOnHover = true,
  centerMode = true,
  centerPadding = "60px",
  slidesToShow = 3,
  rows = 2
}) {
  const logos = [
    "/Optima-gallery-photos/day0-images/4.png",
    "/Optima-gallery-photos/day0-images/6.png",
    "/Optima-gallery-photos/day0-images/8.png",
    "/Optima-gallery-photos/day0-images/9.png",
    "/Optima-gallery-photos/day0-images/10.png",
    "/Optima-gallery-photos/day0-images/11.png",
    "/Optima-gallery-photos/day0-images/12.png",
    "/Optima-gallery-photos/day0-images/13.png",
    "/Optima-gallery-photos/day0-images/14.png",
    "/Optima-gallery-photos/day0-images/IMG_2518.JPG",
    "/Optima-gallery-photos/day0-images/IMG_6807.JPG",
    "/Optima-gallery-photos/day0-images/IMG_7018.JPG",
    "/Optima-gallery-photos/day0-images/IMG_9907.jpg",
    "/Optima-gallery-photos/day0-images/IMG_9912.jpg",
    "/Optima-gallery-photos/day0-images/IMG-20231010-WA0040.jpg",
    "/Optima-gallery-photos/day0-images/IMG-20231010-WA0042.jpg",
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

export default Day0Items;
