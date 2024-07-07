import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import "./App.css";
import gsap from "gsap";
import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Heritage from "./components/heritage";
import Highlights from "./components/highlights";
import Products from "./components/products";
const App = () => {
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const footerRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 110) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToAbout() {
    let pos = aboutRef.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
  function scrollToHighlights() {
    let pos = productsRef.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
  function scrollToFooter() {
    let pos = footerRef.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
  return (
    <main className="">
      <Navbar
        scrollToAbout={scrollToAbout}
        scrollToHighlights={scrollToHighlights}
        scrollToFooter={scrollToFooter}
      />
      <Hero />
      <div ref={aboutRef}>
        <About />
      </div>

      <Highlights />
      <Heritage />
      <div ref={productsRef}>
        <Products />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed z-1900 bottom-4 scroll-bar right-4 p-3 bg-gray-500 text-black rounded-full  transform hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </main>
  );
};

export default App;
