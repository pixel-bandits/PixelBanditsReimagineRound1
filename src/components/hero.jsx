import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const textRef = useRef();

  useEffect(() => {
    const splitTextInstance = new SplitType(textRef.current, {
      types: "lines, words, chars",
      tagName: "span",
    });

    gsap.from(splitTextInstance.chars, {
      duration: 0.9,
      opacity: 0,
      y: 20,
      stagger: 0.2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <>
      <section className=" w-full h-5/6  nav-height bg-black flex justify-center items-center">
        <div className="background md:w-10/12 w-9/12  object-fit -z-1 absolute overflow-hidden mt-14 contrast-125 backdrop-contrast-200">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src="/titan-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="w-full h-full flex justify-center items-end pb-10">
          <h1
            ref={textRef}
            className="text-white font-playfair text-5xl md:text-5xl lg:text-6xl xl:text-8xl"
          >
            <span className="block md:inline">TITAN</span>{" "}
            <span className="block md:inline">WORLD</span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default Hero;
