import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplaySpeed = 2000;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  const images = [
    "https://images.pexels.com/photos/7440054/pexels-photo-7440054.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7795791/pexels-photo-7795791.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7755530/pexels-photo-7755530.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8990462/pexels-photo-8990462.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto my-5">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[600px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
