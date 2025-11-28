import React from "react";
import image1 from "../assets/images/photo_5834950562292632435_y.jpg";
import image2 from "../assets/images/photo_5834950562292632434_x.jpg";
import image3 from "../assets/images/photo_5834950562292632433_x.jpg";
import image4 from "../assets/images/photo_5834950562292632432_y.jpg";
import sectionLandingPage from "../assets/images/photo_5834950562292632431_y.jpg";

const Services = () => {
  const designCards = [
    {
      id: 1,
      name: "DESIGN PROJECT",
      description:
        "Full design package with plans, moodboards, and drawing - crafted for your lifestyle and spatial identity",
      image: image1,
    },
    {
      id: 2,
      name: "SOURCING",
      description:
        "Curating the essential materials, finishes, and foundational concepts that define your project's unique character.",
      image: image2,
    },
    {
      id: 3,
      name: "STYLING",
      description:
        "Shaping the aesthetic narrative through deliberate choices in color, texture, and form to create a cohesive visual language.",
      image: image3,
    },
    {
      id: 4,
      name: "SUPERVISION",
      description:
        "Meticulous oversight and project management to ensure flawless execution from initial concept to final installation.",
      image: image4,
    },
  ];
  return (
    <>
      <section data-scroll-section id= "services" className=" relative min-h-screen">
      <div
      
        className="cover-scroll-section relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${sectionLandingPage})`,
          position: "relative",
          zIndex: 100,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <section id= "services"className="relative z-10 px-5.5 py-5.5">
       
          <div className="flex justify-between">
          <h2 className=" lg:text-sm md:text-sm text-[11px] tracking-[0.2em] text-gray-500 uppercase ">
            services
          </h2>
             <p className=" service-text absolute bottom-10 right-0 w-[20rem] text-white">
                  Design services crafted for calm, intentional and meaningful
                  living
                </p>
        
</div>
          <div className=" service-container flex">
             <div className="flex flex-1 ">
            <div className="flex flex-col gap-5 flex-1">
              <h1 className="lg:text-[5rem] md:text-[4rem] text-[3rem]  text-white leading-tight"
                style={{
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: "-2px"
            }}>
                DESIGN THAT  <span
                style={{
                  fontFamily: "'My Soul', cursive",
                
                  fontWeight: "lighter",
                }}
              >
                R
              </span>ESONATES
              </h1>
              {/* do not forget medium screens */}
              <div className="lg:w-[80%] md:w-[70%]"> 
              <p className="text-white text-sm lg:text-base leading-relaxed">
                At Serena & co, we believe that interior design is not just
                about how a space looks – it's about how it makes you feel. We
                approach each project as a layered composition of light, form,
                and purpose, where clarity meets quiet beauty.
              </p>
              </div>

              <button className="my-4 w-fit border-b border-[#2b1d12] text-white font-medium tracking-wide hover:text-[#a67b5b] hover:border-[#a67b5b] transition-all duration-300">
                LEARN MORE →
              </button>
            </div>
            </div>
            <div className="service-div-container flex-1 flex flex-col items-end">
            <div className="service-div flex gap-2.5">

              <div className=" bg-white w-[300px] h-[350px] flex flex-col p-4">
                 <span className="text-xs text-gray-400 mb-4">01</span>
                <div className="w-40 h-40 self-end ">
                  <img
                    src={designCards[0].image}
                    alt={designCards[0].name}
                    srcset=""
                     className="w-full h-full object-cover"
                  />
                </div>

                <h3 className=" text-2xl font-bold mt-3  text-[#2b1d12] "
                style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}>{designCards[0].name}</h3>
                <p className="mt-2 max-w-md text-gray-600 text-sm lg:text-base leading-5">{designCards[0].description}</p>
              </div>

              <div className=" bg-white w-[300px] h-[350px] flex flex-col p-4">
                 <span className="text-xs text-gray-400 mb-4">02</span>
                <div className="w-40 h-40 self-end">
                  <img
                    src={designCards[1].image}
                    alt={designCards[1].name}
                    srcset=""
                     className="w-full h-full object-cover"
                  />
                </div>

                <h3 className= "text-2xl font-bold mt-3  text-[#2b1d12]"
                 style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
                >{designCards[1].name}</h3>
                <p className="mt-2 max-w-md text-gray-600 text-sm lg:text-base leading-5">{designCards[1].description}</p>
              </div>
            </div>

              <div className=" service-div flex gap-2.5 mt-3">
                <div className=" bg-white w-[300px] h-[350px] flex flex-col p-4">
                   <span className="text-xs text-gray-400 mb-4">03</span>
                <div className="w-40 h-40 self-end ">
                  <img
                    src={designCards[2].image}
                    alt={designCards[2].name}
                    srcset=""
                     className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold mt-3  text-[#2b1d12]"
                                 style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
               
                >{designCards[2].name}</h3>
                <p className="mt-2 max-w-md text-gray-600 text-sm lg:text-base leading-5">{designCards[2].description}</p>
              </div>

                <div className="bg-white w-[300px] h-[350px] flex flex-col p-4 lg:mr-78">
                   <span className="text-xs text-gray-400 mb-4">04</span>
                <div className="w-40 h-40 self-end ">
                  <img
                    src={designCards[3].image}
                    alt={designCards[3].name}
                    srcset=""
                     className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold mt-3  text-[#2b1d12]"
                 style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
                >{designCards[3].name}</h3>
                <p className="mt-2 max-w-md text-gray-600 text-sm lg:text-base leading-5">{designCards[3].description}</p>
              </div>
              
          
            </div>




          </div>
          </div>
          <div>


</div>
        </section>
      </div>
      </section>
    </>
  );
};

export default Services;





       