import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Day1Items({ 
  autoplaySpeed = 3000, 
  pauseOnHover = true,
  centerMode = true,
  centerPadding = "60px"
}) {
  const logos = [
    "/sponslogos23/Vicon.png",
    "/sponslogos23/ORMAE.jpeg",
    "/sponslogos23/OPTYM.jpg"
  ];

  // Duplicate logos to ensure enough slides
  const repeatedLogos = [
    ...logos, ...logos, ...logos, ...logos, ...logos, ...logos
  ];

  const settings = {
    className: "center",
    centerMode,
    infinite: true,
    centerPadding,
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    autoplay: true,
    autoplaySpeed,
    pauseOnHover,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px"
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px"
        }
      }
    ],
    customPaging: (i) => (
      <div className="custom-dot"></div>
    )
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {repeatedLogos.map((src, index) => (
          <div 
            key={index} 
            className={`
              w-48 h-56 overflow-hidden p-2 
              transition-all duration-300 ease-in-out hover:scale-105
            `}
          >
            <img 
              src={src} 
              alt={`Image description ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Day1Items;