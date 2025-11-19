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
