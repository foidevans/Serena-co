// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const nav = [
//     { label: "ABOUT US", path: "/about" },
//     { label: "PORTFOLIO", path: "/portfolio" },
//     { label: "SERVICES", path: "/services" },
//     { label: "JOURNAL", path: "/journal" },
//   ];

//   return (
//     <>
//       <header className="flex justify-between px-3.5 py-3.5">
//         <h2>SERENA & CO</h2>

//         <nav>
//           <ul className="flex gap-5">
//             {nav.map((item, id) => (
//               <li key={id}>
//                 {/* {item} */}
//                 <NavLink to={item.path} className={({isActive}) => 'transition-colors duration-300 hover: text-gray-600 ${ isActive ? "text-blue-600 font-semibold" : "text-black" }' }>{item.label}</NavLink>
//               </li>
//             ))}
//           </ul>
//         </nav>

//           <NavLink
//         to="/contact"
//         className={({ isActive }) =>
//           `transition-colors duration-300 ${
//             isActive
//               ? "text-blue-600 font-semibold"
//               : "text-black hover:text-gray-600"
//           }`
//         }
//       >
//         CONTACTS
//       </NavLink>

//       </header>
//     </>
//   );
// };

// export default Navbar;





// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const nav = [
//     { label: "ABOUT US", path: "/about" },
//     { label: "PORTFOLIO", path: "/portfolio" },
//     { label: "SERVICES", path: "/services" },
//     { label: "JOURNAL", path: "/journal" },
//   ];

//   return (
//     <header className="flex justify-between px-3.5 py-3.5">
//       <h2>SERENA & CO</h2>

//       <nav>
//         <ul className="flex gap-5">
//           {nav.map((item, id) => (
//             <li key={id}>
//               <NavLink 
//                 to={item.path} 
//                 className={({isActive}) => 
//                   `transition-colors duration-300 hover:text-gray-600 ${
//                     isActive ? "text-blue-600 font-semibold" : "text-black"
//                   }`
//                 }
//               >
//                 {item.label}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <NavLink
//         to="/contact"
//         className={({ isActive }) =>
//           `transition-colors duration-300 ${
//             isActive
//               ? "text-blue-600 font-semibold"
//               : "text-black hover:text-gray-600"
//           }`
//         }
//       >
//         CONTACTS
//       </NavLink>
//     </header>
//   );
// };

// export default Navbar;





import React from "react";

const Navbar = () => {
  const handleScroll = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 text-white">
      <h2 className="font-bold text-xl">SERENA & CO</h2>

      <nav>
        <ul className="flex gap-6">
          <li><a href="#about" onClick={(e) => handleScroll(e, "#about")}>ABOUT US</a></li>
          <li><a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")}>PORTFOLIO</a></li>
          <li><a href="#services" onClick={(e) => handleScroll(e, "#services")}>SERVICES</a></li>
          <li><a href="#journal" onClick={(e) => handleScroll(e, "#journal")}>JOURNAL</a></li>
        </ul>
      </nav>

      <a
        href="#contact"
        onClick={(e) => handleScroll(e, "#contact")}
        className="font-semibold"
      >
        CONTACTS
      </a>
    </header>
  );
};

export default Navbar;
