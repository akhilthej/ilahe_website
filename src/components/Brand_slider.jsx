import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { logo1,logo2,logo3,logo4,logo5,logo6,logo7 } from '../assets/ClientLogos/clientlogodata';

const BrandCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToScroll: 1,
    slidesToShow: window.innerWidth < 768 ? 3 : 6,
  };

  const brandImages = [
    logo1,logo2,logo3,logo4,logo5,logo6,logo7,
    
    // Add more image URLs here
  ];

  return (
    <div className="py-10 bg-gray-100">
      <p className='text-center font-bold pb-5'>OUR CLIENTS</p>
      <div className="container mx-auto ">
        <Slider {...settings}>
          {brandImages.map((imageUrl, index) => (
            <div key={index}>
              <img 
                src={imageUrl}
                alt={`Brand Logo ${index + 1}`}
                width={200} // Set the desired width
                height={200}  // Set the desired height
                className="mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandCarousel;