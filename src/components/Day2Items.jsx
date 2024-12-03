import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Day2Items({ 
  autoplaySpeed = 3000, 
  pauseOnHover = true,
  centerMode = true,
  centerPadding = "60px",
  slidesToShow = 3,
  rows = 2
}) {
  const logos = [
    "/Optima-gallery-photos/day2-images/71a791ce-5e2c-4f34-8c2f-30d71519281b.jpg",
    "/Optima-gallery-photos/day2-images/78f1ecdc-7bc1-49f0-b7b3-43500776f432.jpg",
    "/Optima-gallery-photos/day2-images/20231007_171230.jpg",
    "/Optima-gallery-photos/day2-images/20231007_173511.jpg",
    "/Optima-gallery-photos/day2-images/20231007_180155.jpg",
    "/Optima-gallery-photos/day2-images/20231008_140617.jpg",
    "/Optima-gallery-photos/day2-images/20231008_170302.jpg",
    "/Optima-gallery-photos/day2-images/Copy of IMG_20231007_152800.jpg",
    "/Optima-gallery-photos/day2-images/DSC00275.JPG",
    "/Optima-gallery-photos/day2-images/IMG_20231007_115121.jpg",
    "/Optima-gallery-photos/day2-images/IMG_20231007_120320.jpg",
    "/Optima-gallery-photos/day2-images/IMG_20231007_143221.jpg",
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

export default Day2Items;