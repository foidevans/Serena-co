import React, { useEffect, useRef } from "react";
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Services = () => {
  const swiperRef = useRef(null);

  useEffect(() => {

    const swiper = new Swiper(swiperRef.current, {
    
      direction: 'horizontal', 
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      modules: [Navigation, Pagination],
    });

    return () => {
      if (swiper) {
        swiper.destroy();
      }
    };
  }, []);

  return (
    <section
      id="services"
      data-scroll-section
      className="min-h-screen bg-white text-black px-6 py-12" 
    >
      <div className="mb-12">
        <h2 className="text-center text-sm tracking-[0.2em] text-gray-500 uppercase">
          PORTFOLIO
        </h2>
        <h1 className="text-4xl text-center md:text-6xl font-serif text-[#2b1d12] leading-tight mt-4">
          IMPRESSIONS THAT ENDURE
        </h1>
      </div>

      {/* Swiper Container */}
      <div ref={swiperRef} className="swiper">
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div className="swiper-slide">
            <div className="h-96 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-2xl">
              Project 1
            </div>
          </div>
          
          {/* Slide 2 */}
          <div className="swiper-slide">
            <div className="h-96 bg-linear-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white text-2xl">
              Project 2
            </div>
          </div>
          
          {/* Slide 3 */}
          <div className="swiper-slide">
            <div className="h-96 bg-linear-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white text-2xl">
              Project 3
            </div>
          </div>
          
          {/* Slide 4 */}
          <div className="swiper-slide">
            <div className="h-96 bg-linear-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white text-2xl">
              Project 4
            </div>
          </div>
        </div>

        {/* Add pagination */}
        <div className="swiper-pagination"></div>

        {/* Navigation buttons */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>

        {/* Scrollbar (optional) */}
        {/* <div className="swiper-scrollbar"></div> */}
      </div>
    </section>
  );
};

export default Services;