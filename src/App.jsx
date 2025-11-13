// import React, { useEffect, useRef } from 'react';
// import { Outlet } from "react-router-dom";
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';
// import './App.scss';


// const App = () => {
//   const scrollContainerRef = useRef(null);
  
//     useEffect(() => {
//       const locomotiveScroll = new LocomotiveScroll({
//         el: scrollContainerRef.current,
//         smooth: true,
//         multiplier: 1,
//         class: 'is-revealed',
//         lerp: 0.05,
//       });
  
//       return () => {
//         locomotiveScroll.destroy();
//       };
//     }, []);

//   return (
//     <>
//         <div ref={scrollContainerRef} data-scroll-container>
//           <Outlet />
//         </div>
//     </>
//   )
// }

// export default App


import React, { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";
import "./App.scss";

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08, // smoothing intensity
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {/* <Navbar /> */}
      <Home />
      <AboutUs />
      <Services />
      <Journal />
      <Contact />
    </div>
  );
};

export default App;

