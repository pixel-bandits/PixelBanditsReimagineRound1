import React, { useState, useEffect } from "react";
import { navLists } from "../constants";
const Navbar = ({ scrollToAbout, scrollToHighlights, scrollToFooter }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const body = document.body;
    const scrollPosition = window.scrollY;

    if (isMenuOpen) {
      // document.body.style.overflowY = "hidden";
      body.style.position = "fixed";
      body.style.top = `-${scrollPosition}px`;
      body.style.width = "100%";
    } else {
      // document.body.style.overflowY = "auto";
      body.style.position = "";
      body.style.top = "";
      window.scrollTo(0, scrollPosition);
    }
    return () => {
      // document.body.style.overflowY = "auto";
      body.style.position = "";
      body.style.top = "";
      window.scrollTo(0, scrollPosition);
    };
  }, [isMenuOpen]);
  return (
    <header className=" w-full pt-5 sm:px-10 px-5 flex justify-between items-center bg-zinc-900 font-poppins">
      <nav className="flex sticky z-999 top-0 w-full screen-max-width z-[999] ">
        <img
          src="./titan white logo.jpg"
          alt="Titan Logo"
          className="h-12 w-18 mr-20"
        />
        <button
          className="md:hidden z-[99] lg:hidden flex items-center justify-end flex-1 pr-4 text-2xl "
          onClick={toggleMenu}
        >
          {isMenuOpen ? " " : "☰"}
        </button>
        {/* Desktop menu */}
        <div className="hidden md:flex flex-1 justify-center  items-center">
          {navLists.map((nav, index) => (
            <button
              onClick={() => {
                if (nav === "About") scrollToAbout();
                if (nav === "Products") scrollToHighlights();
                if (nav === "Support") scrollToFooter();
              }}
              key={index}
              className={`px-5 text-base cursor-pointer text-white hover:text-amber-500 transition-all ${
                index === 4 && "lg:ml-80 md:ml-50"
              }`}
            >
              {nav}
            </button>
          ))}
        </div>
        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-zinc-900 overlay-nav bg-nav-bg z-50 flex flex-col items-start justify-center p-6">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>
            {navLists.map((nav, index) => (
              <button
                onClick={() => {
                  if (nav === "About") scrollToAbout();
                  if (nav === "Products") scrollToHighlights();
                  if (nav === "Support") scrollToFooter();
                  toggleMenu();
                }}
                key={index}
                className="px-5 py-3 text-xl cursor-pointer text-white hover:text-amber-500 transition-all"
              >
                {nav}
              </button>
            ))}
          </div>
        )}
        {/* Shop icon for larger screens */}
        <div className="hidden md:flex flex-1 justify-end items-end">
          <img src="./shop white.jpg" alt="Shop Icon" className="h-12 w-14 " />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
