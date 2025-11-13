// import React, { useEffect, useRef } from 'react';
// import { useLocation } from 'react-router-dom';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

// const LocomotiveScrollContainer = ({ children }) => {
//   const scrollRef = useRef(null);
//   const locomotiveScroll = useRef(null);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     // Initialize Locomotive Scroll
//     if (scrollRef.current) {
//       locomotiveScroll.current = new LocomotiveScroll({
//         el: scrollRef.current,
//         smooth: true,
//         multiplier: 1,
//         class: 'is-revealed',
//         lerp: 0.05,
//       });
//     }

//     return () => {
//       if (locomotiveScroll.current) {
//         locomotiveScroll.current.destroy();
//       }
//     };
//   }, []);

//   // Update Locomotive Scroll when route changes
//   useEffect(() => {
//     if (locomotiveScroll.current) {
//       // Small delay to ensure DOM is updated
//       setTimeout(() => {
//         locomotiveScroll.current.update();
//       }, 100);
//     }
//   }, [pathname]);

//   return (
//     <div data-scroll-container ref={scrollRef}>
//       {children}
//     </div>
//   );
// };

// export default LocomotiveScrollContainer;