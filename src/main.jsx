// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import './index.css'
// import App from './App.jsx'
// import AboutUs from './pages/AboutUs.jsx';
// import Home from './pages/Home.jsx';
// import Services from './pages/Services.jsx';
// import Contact from './pages/Contact.jsx';
// import Journal from './pages/Journal.jsx';


// const router = createBrowserRouter([
//   {
//   path: '/',
//   element: <App />,
//   children: [
//       { index: true, element: <Home /> },
//       { path: "about", element: <AboutUs /> },
//       { path: "services", element: <Services /> },
//       { path: "journal", element: <Journal /> },
//       { path: "contact", element: <Contact />}
//   ]

// }, 
// ])
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router}/>
//   </StrictMode>
// )

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import './index.css'
// import App from './App.jsx'
// import AboutUs from './pages/AboutUs.jsx';
// import Home from './pages/Home.jsx';
// import Services from './pages/Services.jsx';
// import Contact from './pages/Contact.jsx';
// import Journal from './pages/Journal.jsx';
// import Portfolio from './pages/Portfolio.jsx'; // Make sure this exists

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "about", element: <AboutUs /> },
//       { path: "services", element: <Services /> },
//       { path: "journal", element: <Journal /> },
//       { path: "contact", element: <Contact /> },
//       { path: "portfolio", element: <Portfolio /> } // Add this route
//     ]
//   }, 
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router}/>
//   </StrictMode>
// );