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



// import React from "react";
// import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import Portfolio from "./pages/Portfolio";
// import Services from "./pages/Services";
// import Journal from "./pages/Journal";
// import Contact from "./pages/Contact";
// import "./App.scss";

// const App = () => {
//   return (
//     <div className="stack-container">
//       {/* Home - gets covered by AboutUs */}
//       <div className="stack-section sticky-section">
//         <Home />
//       </div>
      
//       {/* Spacer to push AboutUs down */}
//       <div className="stack-spacer"></div>

//       {/* AboutUs - covers Home */}
//       <div className="stack-section cover-section">
//         <AboutUs />
//       </div>

//       {/* Portfolio - gets covered by Services */}
//       <div className="stack-section sticky-section">
//         <Portfolio />
//       </div>
      
//       {/* Spacer to push Services down */}
//       <div className="stack-spacer"></div>

//       {/* Services - covers Portfolio */}
//       <div className="stack-section cover-section">
//         <Services />
//       </div>

//       {/* Journal - normal section */}
//       <div className="stack-section">
//         <Journal />
//       </div>

//       {/* Contact - normal section */}
//       <div className="stack-section">
//         <Contact />
//       </div>
//     </div>
//   );
// };

// export default App;