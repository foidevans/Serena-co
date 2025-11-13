import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import '../App.scss';

const Home = () => {

      const [spotLight, setSpotLight] = useState({ x: 0, y: 0 });
      return (
        <>
    
          <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat "
            style={{
              backgroundImage: `url('/landingpage.jpg')`,
            }}
            onMouseMove={(e) => {
              setSpotLight({ x: e.clientX, y: e.clientY });
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div
              className="relative inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(150px at ${spotLight.x}px ${spotLight.y}px, rgba(255,255,255,0.50), transparent 60%)`,
              }}
            ></div>

            <Navbar />
            <hr className='text-white bg-white font-bold' />
            <main className="flex justify-center h-[calc(100vh-80px)] relative m-auto px-10 text-white"> 
              <div className="flex justify-center items-center relative">
              <h1 className="text-7xl font-semibold absolute top-2/9 right-[60%] font-serif">MATERIAL.</h1>
              <div className="absolute top-5/15 left-2/5">
              <h1 className="text-7xl font-semibold font-serif">MEANING.</h1>
              <h1 className="text-7xl font-semibold font-serif">MOOD.</h1>
              <div  className="flex min-w-2.5 flex-col">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                recusandae quo, 
              </p>
              <div className=" flex justify-between pt-7">
                <p>GET IN TOUCH</p>
                <link rel="stylesheet" href="" />&#8594;
              </div>
              </div>
              <hr />
              </div>
              </div>
            </main>
          </div>
    
        </>
      );
};

export default Home

