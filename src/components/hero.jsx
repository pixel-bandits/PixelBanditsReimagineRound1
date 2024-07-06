import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  const textRef = useRef();
  const splitTextRef = useRef(null);
  useEffect(() => {
    splitTextRef.current = new SplitType(textRef.current, {
      types: "chars",
      tagName: "span",
    });
    const chars = splitTextRef.current.chars;
    gsap.set(chars, {
      yPercent: -120,
      opacity: 0,
    });
    gsap.to(chars, {
      duration: 1,
      yPercent: 0,
      opacity: 1,
      stagger: 0.05,
      ease: "power4.out",
    });
    gsap.fromTo(
      textRef.current,
      { filter: "blur(20px)" },
      { filter: "blur(0px)", duration: 2, ease: "power2.out" }
    );
    gsap.fromTo(
      textRef.current,
      { clipPath: "inset(50% 0% 50% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power4.inOut" }
    );
    // Fluid and foggy hover effect
    const createFluidFoggyEffect = () => {
      let isHovering = false;
      chars.forEach((char, index) => {
        char.addEventListener("mouseover", () => {
          isHovering = true;
          gsap.to(chars, {
            y: (i) => Math.sin((i - index) * 0.5) * 20,
            filter: "blur(1.5px) brightness(1.1)",
            duration: 0.4,
            ease: "power2.out",
          });
        });
      });
      textRef.current.addEventListener("mouseleave", () => {
        isHovering = false;
        gsap.to(chars, {
          y: 0,
          filter: "blur(0px) brightness(1)",
          duration: 0.4,
          ease: "power2.out",
        });
      });
      // Animate fog effect continuously while hovering
      gsap.ticker.add(() => {
        if (isHovering) {
          chars.forEach((char, i) => {
            gsap.to(char, {
              filter: `blur(${
                2 + Math.sin(Date.now() * 0.01 + i * 0.5) * 1
              }px) brightness(${
                1.1 + Math.sin(Date.now() * 0.01 + i * 0.5) * 0.05
              })`,
              duration: 0.1,
            });
          });
        }
      });
    };
    createFluidFoggyEffect();
    return () => {
      // Cleanup
      if (splitTextRef.current) {
        splitTextRef.current.revert();
      }
    };
  }, []);
  return (
    <section className="w-full h-4/6 nav-height bg-black flex justify-center items-center relative overflow-hidden">
      <div className="background md:w-10/12 w-9/12 absolute -z-1 overflow-hidden contrast-125 backdrop-contrast-200">
        <video
          autoPlay
          loop
          muted
          className="w-full h-5/6 video-height object-fit mb-44 md:mb-0"
        >
          <source src="/titan-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-full h-full flex justify-center items-end pb-24 md:pb-8 relative z-10">
        <h1
          ref={textRef}
          className="text-amber-500 font-semibold font-playfair text-5xl md:text-5xl lg:text-6xl xl:text-8xl overflow-hidden cursor-zoom-in"
        >
          <span className="inline block">TITAN</span>{" "}
          <span className="inline block">WORLD</span>
        </h1>
      </div>
    </section>
  );
};
export default Hero;
