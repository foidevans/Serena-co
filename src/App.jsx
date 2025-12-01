import React, { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";
import Footer from './components/Footer';
import "./App.scss";

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
        smartphone: {
    smooth: true  // Enable on mobile
  },
  tablet: {
    smooth: true  // Enable on tablets
  }
    });
    
      window.locoScroll = scroll; //locomotive scroll is now gonna be accessible globally , thankGod

    return () => scroll.destroy();
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <Home />
      <AboutUs />
      <Portfolio />
      <Services />
      <Journal />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;



