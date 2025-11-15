import React from 'react';
import img1 from '../assets/images/photo_5811932539768212676_y.jpg';
import img2 from '../assets/images/photo_5811932539768212677_y.jpg';

const AboutUs = () => {
  return (
    <section data-scroll-section className="cover-section relative min-h-screen bg-white">
      
      <div 
        data-scroll 
        data-scroll-sticky 
      
        className="cover-slide-fast min-h-screen bg-white z-50 flex flex-col"
      >
        <div className="px-8 lg:px-20 pt-15">
          <h2 className="text-sm tracking-[0.2em] text-gray-500 uppercase">
            ABOUT US
          </h2>
        </div>

        <div className='flex items-end justify-between gap-12 flex-1  max-w-6xl mx-auto pb-20'>
          
          <div className="flex flex-col gap-6 flex-1 max-w-[50%]">
            <h1 className="text-4xl md:text-6xl font-serif text-[#2b1d12] leading-tight">
              DESIGN WITH INTENTION
            </h1>
            
            <p className="text-gray-600 text-base leading-relaxed">
              At Serena & co, we believe that interior design is not just about how a
              space looks – it's about how it makes you feel. We approach each
              project as a layered composition of light, form, and purpose, where
              clarity meets quiet beauty.
            </p>

            <button className="mt-4 w-fit border-b border-[#2b1d12] text-[#2b1d12] font-medium tracking-wide hover:text-[#a67b5b] hover:border-[#a67b5b] transition-all duration-300">
              LEARN MORE →
            </button>
          </div>

          <div className="grid grid-cols-[3fr_1.8fr] grid-rows-[2fr_1.5fr] gap-6 flex-1 min-h-[400px]">
            <div className="row-span-2">
              <img src={img1} alt="Interior 1" className="w-full h-full object-cover block" />
            </div>
            <div className="row-span-1">
              <img src={img2} alt="Interior 2" className="w-full h-full object-cover block" />
            </div>
          </div>
        </div>
      </div>
  
      
    </section>
  );
};

export default AboutUs;