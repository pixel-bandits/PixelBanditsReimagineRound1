import React from "react";
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
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />

      <Heritage />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
