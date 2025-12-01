import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";
import img1 from "../assets/images/photo_5811932539768212676_y.jpg";
import img2 from "../assets/images/photo_5811932539768212677_y.jpg";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-80px" });

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.8
      },
    },
  };

  const revealVariant = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      data-scroll-section
      id="about"
      className="cover-section relative min-h-screen bg-white"
    >
      <div
        data-scroll
        className="cover-slide-fast min-h-screen bg-white z-50 flex flex-col px-6 lg:px-15  "
      >
        <div className="pt-15">
          <motion.h2
            className=" lg:text-sm md:text-sm text-[11px] tracking-[0.2em] text-gray-500 uppercase"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ willChange: "transform, opacity" }}
          >
            About us
          </motion.h2>
        </div>

        <div className=" lg:flex-row flex flex-col lg:items-end justify-between gap-15 flex-1 pb-20">
          <div className="flex flex-col gap-6 flex-1 lg:max-w-[50%]">
            <motion.h1
              className="xl:text-[4rem] lg:text-[4rem] md:text-[4rem] text-[3rem]  text-[#2b1d12] leading-tight"
              initial={{ y: -80, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: "-2px",
              }}
            >
              <span
                style={{
                  fontFamily: "'My Soul', cursive",
                  fontWeight: "lighter",
                }}
              >
                D
              </span>{" "}
              ESIGN WITH INTENTION
            </motion.h1>

            <motion.p
              className="text-gray-600 text-sm lg:text-base xl:text-base md:text-base leading-relaxed "
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ willChange: "transform, opacity" }}
            >
              At Serena & co, we believe that interior design is not just about
              how a space looks – it's about how it makes you feel. We approach
              each project as a layered composition of light, form, and purpose,
              where clarity meets quiet beauty.
            </motion.p>

            <button className="my-4 w-fit border-b border-[#2b1d12] text-[#2b1d12] font-medium tracking-wide hover:text-[#a67b5b] hover:border-[#a67b5b] transition-all duration-300">
              LEARN MORE →
            </button>
          </div>

          <motion.div
            className="grid grid-cols-[3fr_1.8fr] grid-rows-[2fr_1.5fr] gap-6 flex-1 min-h-[400px]"
            variants={containerVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="row-span-2 overflow-hidden"
              variants={revealVariant}
            >
              <img
                src={img1}
                alt="Interior 1"
                className="w-full h-full object-cover block"
              />
            </motion.div>
            <motion.div
              className="row-span-1 overflow-hidden"
              variants={revealVariant}
            >
              <img
                src={img2}
                alt="Interior 2"
                className="w-full h-full object-cover block"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
