import React from "react";
import { motion } from "framer-motion";

const navItemVariant = {
  hidden: { y: 18, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

const Navbar = () => {
  const handleScroll = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 text-white relative z-20">
      <motion.h2
        className="font-bold text-xl"
        initial={{ y: 12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        style={{ willChange: "transform, opacity" }}
      >
        SERENA & CO
      </motion.h2>

      <motion.nav
        initial="hidden"
        animate="show"
        style={{ willChange: "transform, opacity" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
        }}
      >
        <motion.ul className="flex gap-6 items-center">
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
        className="font-semibold"
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.65 }}
        style={{ willChange: "transform, opacity" }}
      >
        CONTACTS
      </motion.a>
    </header>
  );
};

export default Navbar;
