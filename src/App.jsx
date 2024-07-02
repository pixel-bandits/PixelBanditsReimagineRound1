import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import "./App.css";
import gsap from "gsap";
import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Heritage from "./components/heritage";
import Highlights from "./components/highlights";
const App = () => {
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const footerRef = useRef(null);

  function scrollToAbout() {
    console.log("about scrolled");
    let pos = aboutRef.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
  function scrollToHighlights() {
    console.log("highlights scrolled");
    let pos = productsRef.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
  function scrollToFooter() {
    console.log("footer scrolled");
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
      <Heritage />
      <div ref={productsRef}>
        <Highlights />
      </div>

      <div ref={footerRef}>
        <Footer />
      </div>
    </main>
  );
};

export default App;
