import React from "react";
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
      description: "Designing interiors that invite slow living, gentle movement, mindful rituals, and an atmosphere of effortless calm.",
    },
    {
      id: 2,
      title: "TEXTURES OF STILLNESS",
      image: image2,
      description: "Layering subtle materials, soft finishes, and grounded tones to create spaces that feel restful, tactile, and deeply centered.",
    },
    {
      id: 3,
      title: "LIGHT AS A MATERIAL",
      image: image3,
      description: "Shaping each room through the poetry of natural light—soft shadows, warm highlights, and luminous calm that guides the mood.",
    },
    {
      id: 4,
      title: "THE BEAUTY OF RESTRAINT",
      image: image4,
      description: "Embracing minimal gestures, refined choices, and purposeful simplicity to reveal elegance in what is left unspoken."
    },
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
          <h1
            className="xl:text-[4rem] lg:text-[4rem] md:text-[4rem] text-[2.8rem]  text-center font-serif text-[#2b1d12] leading-tight mt-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: "-2px",
            }}
          >
            NOTES FROM THE{" "}
            <span
              style={{
                fontFamily: "'My Soul', cursive",

                fontWeight: "lighter",
              }}
            >
              S
            </span>
            TUDIO
          </h1>

          <div className="journal-gallery mt-12 max-w-7xl mx-auto">
            <div
              className="
      grid gap-4 h-[80vh]
      grid-cols-1 
      sm:grid-cols-2
      lg:grid-cols-9 lg:grid-rows-7
    "
            >
              <div
                className="
  lg:col-start-1 lg:col-end-4 
  lg:row-start-1 lg:row-end-7 
  relative group overflow-hidden cursor-pointer
"
              >
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-[90%] h-[90%] p-3 gap-3.5 bg-white text-black flex flex-col items-center justify-center 
                    text-lg font-light tracking-wide shadow-lg 
                    opacity-0 scale-95 transition-all duration-300
                    group-hover:opacity-100 group-hover:scale-100"
                  >
                   <h2 className="text-[2rem] text-[#2b1d12] leading-tight text-center font-medium"  style={{
              fontFamily: "'Cormorant Garamond', serif",
             
            }}>{articles[0].title} </h2>
                    <p className="text-center text-gray-600 text-sm leading-5 ">{articles[0].description}</p>
                     <button className="w-fit  text-[#2b1d12] text-[1rem] font-medium tracking-wide hover:text-[#a67b5b] hover:border-[#a67b5b] transition-all duration-300">
              READ MORE →
            </button>
                 
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 ">
                  <p className="text-white text-sm tracking-wide font-light">
                    {articles[0].title}
                  </p>
                </div>
              </div>

              <div
                className="
  lg:col-start-4 lg:col-end-6 
  lg:row-start-1 lg:row-end-5
  relative group overflow-hidden cursor-pointer
"
              >
                <img
                  src={articles[1].image}
                  alt={articles[1].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-[90%] h-[90%] p-1 bg-white text-black flex flex-col items-center justify-center 
                    text-lg font-light tracking-wide shadow-lg 
                    opacity-0 scale-95 transition-all duration-300
                    group-hover:opacity-100 group-hover:scale-100"
                  >
                     <h2 className="text-[1.5rem] text-[#2b1d12] leading-tight text-center font-medium"  style={{
              fontFamily: "'Cormorant Garamond', serif",
             
            }}>{articles[1].title} </h2>
                    <p className="text-center text-gray-600 text-sm leading-5 ">{articles[0].description}</p>
                     <button className="w-fit  text-[#2b1d12] text-[1rem] font-medium tracking-wide hover:text-[#a67b5b] hover:border-[#a67b5b] transition-all duration-300">
              READ MORE →
            </button>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-sm tracking-wide font-light">
                    {articles[1].title}
                  </p>
                </div>
              </div>

              <div
                className="
  lg:col-start-6 lg:col-end-8 
  lg:row-start-3 lg:row-end-7
  relative group overflow-hidden cursor-pointer
"
              >
                <img
                  src={articles[2].image}
                  alt={articles[2].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-[90%] h-[90%] p-1 bg-white text-black flex flex-col items-center justify-center 
                    text-lg font-light tracking-wide shadow-lg 
                    opacity-0 scale-95 transition-all duration-300
                    group-hover:opacity-100 group-hover:scale-100"
                  >
                    
                     <h2 className="text-[1.5rem] text-[#2b1d12] leading-tight text-center font-medium"  style={{
              fontFamily: "'Cormorant Garamond', serif",
             
            }}>{articles[2].title} </h2>
                    <p className="text-center text-gray-600 text-sm leading-5">{articles[2].description}</p>
                     <button className="w-fit  text-[#2b1d12] text-[1rem] font-medium tracking-wide hover:text-[#a67b5b] hover:border-[#a67b5b] transition-all duration-300">
              READ MORE →
            </button>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-sm tracking-wide font-light">
                    {articles[2].title}
                  </p>
                </div>
              </div>

              <div
                className="
  lg:col-start-8 lg:col-end-10 
  lg:row-start-1 lg:row-end-5
  relative group overflow-hidden cursor-pointer
"
              >
                <img
                  src={articles[3].image}
                  alt={articles[3].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-[90%] h-[90%] p-1 bg-white text-black flex flex-col items-center justify-center 
                    text-lg font-light tracking-wide shadow-lg 
                    opacity-0 scale-95 transition-all duration-300
                    group-hover:opacity-100 group-hover:scale-100"
                  >
                
                     <h2 className="text-[1.5rem] text-[#2b1d12] leading-tight text-center font-medium"  style={{
              fontFamily: "'Cormorant Garamond', serif",
             
            }}>{articles[3].title} </h2>
                    <p className="text-center text-gray-600 text-sm leading-5">{articles[3].description}</p>
                     <button className="w-fit  text-[#2b1d12] text-[1rem] font-medium tracking-wide hover:text-[#a67b5b] hover:border-[#a67b5b] transition-all duration-300">
              READ MORE →
            </button>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 ">
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
  );
};

export default Journal;
