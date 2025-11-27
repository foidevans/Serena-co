import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import "../App.scss";

const Home = () => {
  const [spotLight, setSpotLight] = useState({ x: 0, y: 0 });
  

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/landingpage.jpg')` }}
      onMouseMove={(e) => setSpotLight({ x: e.clientX, y: e.clientY })}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(150px at ${spotLight.x}px ${spotLight.y}px, rgba(255, 230, 180, 0.25), transparent 75%)`,
        }}
      />

      <Navbar />

      {/* <motion.hr
        className="text-white bg-white h-0.5 border-none mx-6"
        style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
      /> */}

   <motion.div
   className=" border-t-2 border-t-white border-b-solid w-full h-1.5 relative "
        style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
      />


      <main className="flex justify-center h-[calc(100vh-80px)] relative m-auto px-10 text-white">
        <div className="flex justify-center items-center relative">
          <motion.h1
            className="text-7xl font-semibold absolute top-2/9 right-[60%] font-serif"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              willChange: "transform, opacity",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "5rem",
            }}
          >
            MATERIAL.
          </motion.h1>

          <div className="absolute top-5/15 left-2/5">
            <motion.h1
              className="text-7xl font-semibold font-serif"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              style={{
                willChange: "transform, opacity",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "5rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'My Soul', cursive",
                  paddingRight: "10px",
                  fontWeight: "lighter",
                }}
              >
                M
              </span>
              EANING.
            </motion.h1>

            <motion.h1
              className="text-7xl font-semibold font-serif"
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              style={{
                willChange: "transform, opacity",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "5rem",
              }}
            >
              MOOD.
            </motion.h1>

            <motion.div
              className="flex min-w-2.5 flex-col"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ willChange: "transform, opacity" }}
            >
              <div className="w-68 pt-3.5">
                <p>
                  Serena & Co is a boutique interior design studio creating
                  light-filled enotionally resonant spaces with purpose and
                  depth
                </p>
                  <div className="flex justify-between pt-7">
                <p>GET IN TOUCH</p>
                <span>&#8594;</span>
              </div>

            <motion.hr
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ willChange: "transform, opacity" }}
            />
              </div>
            
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
