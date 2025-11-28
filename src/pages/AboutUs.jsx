import React from 'react';
import img1 from '../assets/images/photo_5811932539768212676_y.jpg';
import img2 from '../assets/images/photo_5811932539768212677_y.jpg';

const AboutUs = () => {
  return (
    <section data-scroll-section  id="about" className="cover-section relative min-h-screen bg-white">
      
      <div 
        data-scroll 
      
      
        className="cover-slide-fast min-h-screen bg-white z-50 flex flex-col px-6 lg:px-15  "
      >
        <div className="pt-15">
          <h2 className=" lg:text-sm md:text-sm text-[11px] tracking-[0.2em] text-gray-500 uppercase">
            About us
          </h2>
        </div>

        <div className=' lg:flex  flex-col lg:items-end justify-between gap-15 flex-1 pb-20'>
          
          <div className="flex flex-col gap-6 flex-1 lg:max-w-[50%]">
            <h1 className="lg:text-[5rem] md:text-[4rem] text-[3rem]  text-[#2b1d12] leading-tight"  
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: "-2px"
            }}>
                 <span
                style={{
                  fontFamily: "'My Soul', cursive",
                
                  fontWeight: "lighter",
                }}
              >
                D
              </span> ESIGN WITH INTENTION
            </h1>
            
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed ">
              At Serena & co, we believe that interior design is not just about how a
              space looks – it's about how it makes you feel. We approach each
              project as a layered composition of light, form, and purpose, where
              clarity meets quiet beauty.
            </p>

            <button className="my-4 w-fit border-b border-[#2b1d12] text-[#2b1d12] font-medium tracking-wide hover:text-[#a67b5b] hover:border-[#a67b5b] transition-all duration-300">
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





