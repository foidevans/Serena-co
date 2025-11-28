import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { supabase } from "../supabase-client";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "../App.scss";

const Portfolio = () => {
  const swiperRef = useRef(null);
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const swiperInstance = useRef(null);

  useEffect(() => {
    const fetchSupabaseData = async () => {
      try {
        console.log("Starting to fetch data from Supabase...");
        setLoading(true);

        const { data, error } = await supabase
          .from("furnitures")
          .select("*")
          .order("created_at", { ascending: true });

        if (error) {
          console.error("Supabase error:", error);
          throw error;
        }

        console.log("Data fetched successfully:", data);
        setPortfolioItems(data || []);
      } catch (err) {
        console.error("Error in fetch:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSupabaseData();
  }, []);

  useEffect(() => {
    if (!portfolioItems.length || !swiperRef.current) return;

    const waitForLoco = setInterval(() => {
      if (window.locoScroll) {
        clearInterval(waitForLoco);

        setTimeout(() => {
          swiperInstance.current = new Swiper(swiperRef.current, {
            direction: "horizontal",
            loop: true,
            slidesPerView: 1.1,
            spaceBetween: 15,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".custom next",
              prevEl: ".custom prev",
            },
            modules: [Navigation, Pagination],
            breakpoints: {
    // Mobile (default above, but you can also define it here)
    320: {
      slidesPerView: 1.1,
      spaceBetween: 15,
    },
    // Tablets
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    }, 

        // Desktop
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // Large desktop
    1280: {
      slidesPerView: 1,
      spaceBetween: 30,
    },}

          });

          swiperInstance.current.update();
          swiperInstance.current.updateSize();

          window.locoScroll.update();
        }, 50);
      }
    }, 10);

    return () => {
      clearInterval(waitForLoco);
      if (swiperInstance.current) {
        swiperInstance.current.destroy();
        swiperInstance.current = null;
      }
    };
  }, [portfolioItems]);

  console.log("Current state:", {
    loading,
    error,
    portfolioItemsCount: portfolioItems.length,
  });

  if (loading) {
    console.log("Showing loading state");
    return (
      <div className="flex justify-center items-center h-64">
        Loading portfolio items...
      </div>
    );
  }

  if (error) {
    console.log("Showing error state:", error);
    return <div className="text-red-500 text-center p-8">Error: {error}</div>;
  }

  if (portfolioItems.length === 0) {
    console.log("No portfolio items found");
  }

  console.log("Rendering portfolio with", portfolioItems.length, "items");

  return (
    <section
      id="portfolio"
      data-scroll-section
      // data-scroll
      // data-scroll-sticky
      // data-scroll-target="#services"

      className=" relative min-h-screen bg-white text-black px-6 py-6"
      // style={{ position: 'sticky', top: 0 }}
    >
      <div className="mb-5">
        <h2 className="  lg:text-sm md:text-sm text-[11px] text-center tracking-[0.2em] text-gray-500 uppercase">
          PORTFOLIO
        </h2>
        <h1 className=" xl:text-[4rem] lg:text-[4rem] md:text-[4rem] text-[2.8rem] text-center font-serif text-[#2b1d12] leading-tight mt-4"   style={{
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: "-2px"
            }}>
              
          IMPRESSIONS THAT  <span
                style={{
                  fontFamily: "'My Soul', cursive",
                
                  fontWeight: "lighter",
                }}
              >
                E 
              </span>NDURE
        </h1>
      </div>

      {/* Swiper Container */}
      <div ref={swiperRef} className="swiper">
        <div className="swiper-wrapper">
          {portfolioItems.map((item, index) => (
            <div key={item.id} className="swiper-slide">
              <div className="overall-container flex gap-7">
                <div className=" overall-container-firstImg w-[50%] h-[550px]">
                  <img
                    src={item.image_url}
                    alt={item.furniture_name || "Furniture image"}
                    className="w-full h-full object-cover block"
                    onError={(e) => {
                      console.error("Image failed to load:", item.image_url);
                      e.target.style.backgroundColor = "#f0f0f0";
                    }}
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-sm lg:text-base md:text-base xl:text-base leading-6">{item.furniture_timeline || "Timeline not specified"}</p>
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed ">
                      {(index + 1).toString().padStart(2, "0")}/
                      {portfolioItems.length.toString().padStart(2, "0")}
                    </p>
                  </div>

                  <div className="overall-container-Second flex justify-between items-start gap-5">
                    <div className="flex flex-col">
                      <h2 className="text-2xl font-bold text-[#2b1d12]"  
                      style={{
              fontFamily: "'Cormorant Garamond', serif", }}>
                        {item.furniture_name || "Untitled Project"}
                      </h2>
                      <p className="mt-2 max-w-md text-gray-600 text-sm lg:text-base md:text-base xl:text-base leading-6 ">
                        {item.furniture_description ||
                          "No description available"}
                      </p>
                    </div>
                    <div className="overall-container-SecondImg flex flex-col items-center">
                      {item.image_url_2 && (
                        <div className="w-[300px] h-[360px]">
                          <img
                            src={item.image_url_2}
                            alt={`${item.furniture_name} detail`}
                            className="w-full h-full object-cover block"
                            onError={(e) => {
                              console.error(
                                "Secondary image failed to load:",
                                item.image_url_2
                              );
                              e.target.style.display = "none";
                            }}
                          />
                        </div>
                      )}
                      <p className="mt-2 text-gray-600 text-sm lg:text-base leading-relaxed ">
                        {item.mini_furniture_description || ""}
                      </p>
                    </div>
                  </div>

                  <div className=" furniture-under flex justify-between items-center">
                    <p className=" furniture-note text-gray-600 text-sm lg:text-base leading-relaxed ">{item.furniture_note || ""}</p>
                    <div className="swiper-nav flex gap-3">
                      <div
                        className="custom-prev rounded-full w-12 h-12 border-2 border-black flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                        onClick={() => swiperInstance.current?.slidePrev()}
                      >
                        &#8592;
                      </div>
                      <div
                        className="custom-next rounded-full w-12 h-12 border-2 border-black flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
                        onClick={() => swiperInstance.current?.slideNext()}
                      >
                        &#8594;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
