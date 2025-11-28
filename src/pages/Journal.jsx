

import React from 'react'
import image1 from "../assets/images/photo_2025-11-24_15-27-40.jpg";
import image2 from "../assets/images/photo_2025-11-24_15-27-44.jpg";
import image3 from "../assets/images/photo_2025-11-24_15-27-47.jpg";
import image4 from "../assets/images/photo_2025-11-24_15-27-36.jpg";
const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "SPACES THAT BREATHE",
      image: image1,
    },
    {
      id: 2,
      title: "TEXTURES OF STILLNESS",
      image: image2,
    },
    {
      id: 3,
      title: "LIGHT AS A MATERIAL",
      image: image3,
    },
    {
      id: 4,
      title: "THE BEAUTY OF RESTRAINT",
      image: image4,
    }
  ];

  return (
    <>
      <section
        id="journal"
        data-scroll-section
        className="relative min-h-screen bg-white text-black px-6 py-6"
      >
        <div className="mb-5">
          <h2 className=" g:text-sm md:text-sm text-[11px] tracking-[0.2em] text-center text-sm  text-gray-500 uppercase">
            JOURNAL
          </h2>
          <h1 className="lg:text-[5rem] md:text-[4rem] text-[2.8rem]  text-center font-serif text-[#2b1d12] leading-tight mt-4"
           style={{
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: "-2px"
            }}>
            NOTES FROM THE  <span
                style={{
                  fontFamily: "'My Soul', cursive",
                
                  fontWeight: "lighter",
                }}
              >
                S
              </span>TUDIO
          </h1>

          <div className="journal-gallery mt-12 max-w-7xl mx-auto">
            <div className=" grid grid-cols-9 grid-rows-7 gap-4 h-[80vh] ">
                {/* <div
    className="
      grid gap-4 h-[80vh]
      grid-cols-1 
      sm:grid-cols-2
      lg:grid-cols-9 lg:grid-rows-7
    "
  > */}

              {/* First image: col 1-4, row 1-4 */}
              <div className="col-start-1 col-end-4 row-start-1 row-end-7 relative group overflow-hidden cursor-pointer">
              {/* <div className="
  lg:col-start-1 lg:col-end-4 
  lg:row-start-1 lg:row-end-7 
  relative group overflow-hidden cursor-pointer
"> */}
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-[90%] h-[90%] bg-white text-black flex items-center justify-center 
                    text-lg font-light tracking-wide shadow-lg 
                    opacity-0 scale-95 transition-all duration-300
                    group-hover:opacity-100 group-hover:scale-100">
      {articles[0].title}
    </div>
  </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-sm tracking-wide font-light">
                    {articles[0].title}
                  </p>
                </div>
              </div>

              {/* Second image: col 4-6, row 1-3 */}
              <div className="col-start-4 col-end-6 row-start-1 row-end-5 relative group overflow-hidden cursor-pointer">
              {/* <div className="
  lg:col-start-4 lg:col-end-6 
  lg:row-start-1 lg:row-end-5
  relative group overflow-hidden cursor-pointer
"> */}
                <img 
                  src={articles[1].image} 
                  alt={articles[1].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
<div className="absolute inset-0 flex items-center justify-center">
    <div className="w-[90%] h-[90%] bg-white text-black flex items-center justify-center 
                    text-lg font-light tracking-wide shadow-lg 
                    opacity-0 scale-95 transition-all duration-300
                    group-hover:opacity-100 group-hover:scale-100">
      {articles[1].title}
    </div>
  </div>


                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-sm tracking-wide font-light">
                    {articles[1].title}
                  </p>
                </div>
              </div>

              {/* Third image: col 6-8, row 2-4 */}
              <div className="col-start-6 col-end-8 row-start-3 row-end-7 relative group overflow-hidden cursor-pointer">
              {/* <div className="
  lg:col-start-6 lg:col-end-8 
  lg:row-start-3 lg:row-end-7
  relative group overflow-hidden cursor-pointer
"> */}
                <img 
                  src={articles[2].image} 
                  alt={articles[2].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-[90%] h-[90%] bg-white text-black flex items-center justify-center 
                    text-lg font-light tracking-wide shadow-lg 
                    opacity-0 scale-95 transition-all duration-300
                    group-hover:opacity-100 group-hover:scale-100">
      {articles[2].title}
    </div>
  </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-sm tracking-wide font-light">
                    {articles[2].title}
                  </p>
                </div>
              </div>

              {/* Fourth image: col 8-10, row 1-3 */}
              <div className="col-start-8 col-end-10 row-start-1 row-end-5 relative group overflow-hidden cursor-pointer">
              {/* <div className="
  lg:col-start-8 lg:col-end-10 
  lg:row-start-1 lg:row-end-5
  relative group overflow-hidden cursor-pointer
"> */}
                <img 
                  src={articles[3].image} 
                  alt={articles[3].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
<div className="absolute inset-0 flex items-center justify-center">
    <div className="w-[90%] h-[90%] bg-white text-black flex items-center justify-center 
                    text-lg font-light tracking-wide shadow-lg 
                    opacity-0 scale-95 transition-all duration-300
                    group-hover:opacity-100 group-hover:scale-100">
      {articles[3].title}
    </div>
  </div>


                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-sm tracking-wide font-light">
                    {articles[3].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Journal