import { useState } from "react";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";

const navItemVariant = {
  hidden: { y: 18, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

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
    <header className="flex items-center justify-between px-6 py-4 text-white relative z-50">
  
      <motion.h2
        className="font-bold text-xl"
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        style={{
          willChange: "transform, opacity",
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        SERENA & CO
      </motion.h2>

      
      <motion.nav
        initial="hidden"
        animate="show"
        className="hidden md:block"
        style={{ willChange: "transform, opacity" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
        }}
      >
        <motion.ul className="flex gap-6 items-center font-semibold">
          {[
            { label: "ABOUT US", id: "#about" },
            { label: "PORTFOLIO", id: "#portfolio" },
            { label: "SERVICES", id: "#services" },
            { label: "JOURNAL", id: "#journal" },
          ].map((item) => (
            <motion.li
              key={item.label}
              variants={navItemVariant}
              className="list-none"
            >
              <a href={item.id} onClick={(e) => handleScroll(e, item.id)}>
                {item.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>

      <motion.a
        href="#contact"
        onClick={(e) => handleScroll(e, "#contact")}
        className="hidden md:block font-semibold"
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.65 }}
        style={{ willChange: "transform, opacity" }}
      >
        CONTACTS
      </motion.a>


      <div className="md:hidden z-50">
        <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
      </div>


      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-sm py-6 flex flex-col items-center gap-6 text-lg font-semibold md:hidden"
        >
          {[ 
            { label: "ABOUT US", id: "#about" },
            { label: "PORTFOLIO", id: "#portfolio" },
            { label: "SERVICES", id: "#services" },
            { label: "JOURNAL", id: "#journal" },
            { label: "CONTACTS", id: "#contact" },
          ].map((item) => (
            <div
              key={item.label}
              className="cursor-pointer"
              onClick={(e) => handleScroll(e, item.id)}
            >
              {item.label}
            </div>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
