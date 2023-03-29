import React from 'react'
import Slider from 'react-slick';
import Image from "next/legacy/image";
import animate__animated from 'animate.css'



const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 30000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };
  return (
    
  
      <div className="h-screen w-full container mx-auto -mt-[88px] ">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
  
          <Image
            src="/images/c3.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
    
          <div className=" mt-48 text-white flex flex-col items-start gap-y-10 ">
            <p className="text-6xl font-dancing mt-48 animate__animated animate__zoomInDown">Ömer Faruk Aydoğdu</p>
            <p className="animate__animated animate__fadeIn  sm:w-2/5 w-full font-sans text-2xl">
             Front-End Devoloper - React - PostgreSQL - HTML - CSS
            </p>

          </div>
        </div>
        
        <div>
          <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
          <p className="text-6xl mt-48 font-dancing animate__animated animate__zoomInUp ">Ömer Faruk Aydoğdu</p>
          <p className="animate__animated animate__fadeIn  sm:w-2/5 w-full font-sans text-2xl">
              T.C SAĞLIK BAKANLIĞI
            </p>
          
          </div>
        </div>
      </Slider>
   
      </div>
    
 
    )
    
}

export default Carousel