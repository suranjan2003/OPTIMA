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
    "/sponslogos23/OPTYM.jpg",
    "/sponslogos23/Vicon.png", 
    "/sponslogos23/ORMAE.jpeg"
  ];

  const settings = {
    dots,
    infinite,
    speed: 3000,
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
          slidesToScroll: 1
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

  // Duplicate logos to ensure enough slides
  const repeatedLogos = [...sponsorLogos, ...sponsorLogos, ...sponsorLogos, ...sponsorLogos];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {repeatedLogos.map((src, index) => (
          <div key={index} className="w-48 h-72 overflow-hidden p-2">
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

export default MultipleItems;