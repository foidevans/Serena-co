import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { supabase } from "../supabase-client";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import '../App.scss';


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
          .from('furnitures')
          .select('*')
          .order('created_at', { ascending: true });

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
    console.log("portfolioItems changed:", portfolioItems);
    console.log("swiperRef current:", swiperRef.current);

    if (portfolioItems.length > 0 && swiperRef.current && !swiperInstance.current) {
      console.log("Initializing Swiper...");
      
      try {
        swiperInstance.current = new Swiper(swiperRef.current, {
          direction: "horizontal",
          loop: true,
          slidesPerView: 1,
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          modules: [Navigation, Pagination],
        });
        
        console.log("Swiper initialized successfully");
      } catch (swiperError) {
        console.error("Swiper initialization error:", swiperError);
      }
    }

    return () => {
      if (swiperInstance.current) {
        console.log("Destroying Swiper");
        swiperInstance.current.destroy();
        swiperInstance.current = null;
      }
    };
  }, [portfolioItems]);

  console.log("Current state:", { loading, error, portfolioItemsCount: portfolioItems.length });

  if (loading) {
    console.log("Showing loading state");
    return <div className="flex justify-center items-center h-64">Loading portfolio items...</div>;
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
      id="services"
      data-scroll-section
      className="min-h-screen bg-white text-black px-6 py-6"
    >
      <div className="mb-5">
        <h2 className="text-center text-sm tracking-[0.2em] text-gray-500 uppercase">
          PORTFOLIO
        </h2>
        <h1 className="text-3xl text-center md:text-6xl font-serif text-[#2b1d12] leading-tight mt-4">
          IMPRESSIONS THAT ENDURE
        </h1>
      </div>

      {/* Swiper Container */}
      <div ref={swiperRef} className="swiper">
        <div className="swiper-wrapper">
          {portfolioItems.map((item, index) => (
            <div key={item.id} className="swiper-slide">
              <div className="overall-container flex gap-7">
       
                <div className="w-[50%] h-[550px]">
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
                    <p>{item.furniture_timeline || "Timeline not specified"}</p>
                    <p>{(index + 1).toString().padStart(2, '0')}/{portfolioItems.length.toString().padStart(2, '0')}</p>
                  </div>


                  <div className="flex justify-between items-start gap-5">
                    <div className="flex flex-col">
                      <h2 className="text-2xl font-bold">{item.furniture_name || "Untitled Project"}</h2>
                      <p className="mt-2 max-w-md">{item.furniture_description || "No description available"}</p>
                    </div>
                    <div className="flex flex-col items-center">
                      {item.image_url_2 && (
                        <div className="w-[300px] h-[360px]">
                          <img
                            src={item.image_url_2}
                            alt={`${item.furniture_name} detail`}
                            className="w-full h-full object-cover block"
                            onError={(e) => {
                              console.error("Secondary image failed to load:", item.image_url_2);
                              e.target.style.display = "none";
                            }}
                          />
                        </div>
                      )}
                      <p className="mt-2 text-sm">{item.mini_furniture_description || ""}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <p>{item.furniture_note || ""}</p>
                    <div className="flex gap-3">
                      <div className="swiper-button-prev rounded-full w-8 h-8 border-2 border-black border-b-amber-900 flex items-center justify-center cursor-pointer">
                        &#8592;
                      </div>
                      <div className="swiper-button-next rounded-full w-8 h-8 border-2 border-black border-b-amber-900 flex items-center justify-center cursor-pointer">
                        &#8594;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="swiper-pagination"></div>

        <div className="swiper-button-next" style={{ display: 'none' }}></div>
        <div className="swiper-button-prev" style={{ display: 'none' }}></div>
      </div>
    </section>
  );
};

export default Portfolio;