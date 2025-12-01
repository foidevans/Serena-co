import React from 'react';

const Footer = () => {


  const handleScroll = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);

    if (el && window.locoScroll) {
      window.locoScroll.scrollTo(el, {
        offset: 0,
        duration: 300,
        easing: [0.6, 0.0, 0.4, 1],
      });

      setTimeout(() => window.locoScroll.update(), 900);
    }
    setOpen(false); 
  };

  return (
    <footer data-scroll-section className=' bg-[#f1e7d8] py-6 px-8 '>

      <div className='flex flex-col gap-4 md:flex-row xl:flex-row lg:flex-row justify-between'>
        <div className='w-[20rem]'><h2
             style={{
        
          fontFamily: "'Cormorant Garamond', serif",
        }}>SERENA & CO</h2></div>
        
        <div className='flex flex-col gap-2 xl:flex-row lg:flex-row justify lg:gap-5 xl:gap-5'>
          <div><p className='text-gray-600 text-base leading-relaxed'>MENU</p></div>
          <div>
            <ul className="text-xs">
          <li><a href="#about" onClick={(e) => handleScroll(e, "#about")}>ABOUT US</a></li>
          <li><a href="#portfolio" onClick={(e) => handleScroll(e, "#portfolio")}>PORTFOLIO</a></li>
          <li><a href="#services" onClick={(e) => handleScroll(e, "#services")}>SERVICES</a></li>
          <li><a href="#journal" onClick={(e) => handleScroll(e, "#journal")}>JOURNAL</a></li>
        </ul>
          </div>
        </div>
          <div className='flex flex-col gap-2 xl:flex-row lg:flex-row justify lg:gap-5 xl:gap-5'>
          <div><p className='text-gray-600 text-base leading-relaxed'>FOLLOW US</p></div>
          <div>
            <ul className="text-xs">
          <li><a href="#">INSTAGRAM</a></li>
          <li><a href="#">PINTEREST</a></li>
          <li><a href="#">BEHANCE</a></li>
          <li><a href="#">LINKEDIN</a></li>
        </ul>
          </div>
        </div>
          <div className='flex flex-col gap-2 xl:flex-row lg:flex-row justify lg:gap-5 xl:gap-5'>
          <div><p className='text-gray-600 text-base leading-relaxed'>CONTACT</p></div>
          <div>
            <ul className="text-xs">
          <li>123 EMEYAL STREET, NEAR POLO CLUB GRA, PORT-HARCOURT, NIGERIA</li>
          <li>HELLO@SERENACO STUDIO</li>
          <li>+234 234 567 890</li>
      
        </ul>
          </div>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;