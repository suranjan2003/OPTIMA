import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MultipleItems({ 
  slidesToShow = 3,
  slidesToScroll = 1,
  infinite = true,
  dots = false
}) {
  const sponsorLogos = [
    "/Optima-gallery-photos/guest-lecture-images/20231007_171230.jpg",
    "/Optima-gallery-photos/guest-lecture-images/20231007_172820.jpg",
    "/Optima-gallery-photos/guest-lecture-images/20231007_173515.jpg",
    "/Optima-gallery-photos/guest-lecture-images/20231007_180155.jpg",
    "/Optima-gallery-photos/guest-lecture-images/20231008_170302.jpg",
    "/Optima-gallery-photos/guest-lecture-images/Copy of 9ea026a5-fc92-4f8d-94dc-2805f90a9344.jpg",
    "/Optima-gallery-photos/guest-lecture-images/IMG_6807.JPG",
    "/Optima-gallery-photos/guest-lecture-images/IMG_7022.JPG",
    "/Optima-gallery-photos/guest-lecture-images/IMG-20231010-WA0044.jpg",
  ];

  const settings = {
    dots,
    infinite,
    speed: 1000,
    slidesToShow,
    slidesToScroll,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(slidesToShow, 3),
          slidesToScroll: slidesToScroll
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {sponsorLogos.map((src, index) => (
          <div 
            key={index} 
            className="w-48 h-72 overflow-hidden p-2 transition-all duration-300 ease-in-out hover:scale-105"
          >
            <img 
              src={src} 
              alt={`Guest Lecture Image ${index + 1}`} 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
