import React from 'react';

const Footer = () => {

  const InfiniteScrollText = ({ text, speed = 20 }) => {
    return (
      <div className="w-full overflow-hidden bg-green py-3 border-y border-gray-200">
        <div 
          className="whitespace-nowrap animate-marquee flex"
          style={{ animationDuration: `${speed}s` }}
        >
          {Array(15).fill(text).map((item, index) => (
            <span key={index} className="mx-6 text-gray-700 font-medium">
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <footer data-scroll-section className=' bg-[#f1e7d8] py-6 px-8 '>

      <div className='flex flex-col xl:flex-row lg:flex-row justify-between'>
        <div className='w-[20rem]'><h2>SERENA & CO</h2></div>
        
        <div className='flex flex-col xl:flex-row lg:flex-row justify gap-5'>
          <div><p>MENU</p></div>
          <div>
            <ul className="">
          <li><a href="#about" onClick={(e) => handleScroll(e, "#about")}>ABOUT US</a></li>
          <li><a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")}>PORTFOLIO</a></li>
          <li><a href="#services" onClick={(e) => handleScroll(e, "#services")}>SERVICES</a></li>
          <li><a href="#journal" onClick={(e) => handleScroll(e, "#journal")}>JOURNAL</a></li>
        </ul>
          </div>
        </div>
          <div className='flex flex-col xl:flex-row lg:flex-row justify gap-5'>
          <div><p>FOLLOW US</p></div>
          <div>
            <ul className="">
          <li><a href="#about" onClick={(e) => handleScroll(e, "#about")}>INSTAGRAM</a></li>
          <li><a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")}>PINTEREST</a></li>
          <li><a href="#services" onClick={(e) => handleScroll(e, "#services")}>BEHANCE</a></li>
          <li><a href="#journal" onClick={(e) => handleScroll(e, "#journal")}>LINKEDIN</a></li>
        </ul>
          </div>
        </div>
          <div className='flex flex-col xl:flex-row lg:flex-row   gap-5'>
          <div><p>CONTACT</p></div>
          <div>
            <ul className="">
          <li>RUA DE SAO BENTO 142, LISBON, PORTUGAL</li>
          <li>HELLO@SERENACO STUDIO</li>
          <li>+351 912 345 678</li>
      
        </ul>
          </div>
        </div>
      </div>
      {/* Use the component */}
      {/* <InfiniteScrollText text="GET IN TOUCH" speed={15} /> */}
    
    </footer>
  );
};

export default Footer;