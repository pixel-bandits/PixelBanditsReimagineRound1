import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const el = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray(".about-panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  }, []);

  useEffect(() => {
    // Typed.js effect
    const typed = new Typed(el.current, {
      strings: ["Enhance your elegance.", "Meet our team, know our mission."],
      startDelay: 300,
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 100,
      showCursor: false,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <h1
        ref={el}
        className="text-2xl lg:text-4xl font-semibold h-[10vh] text-center mt-14 cursor-text"
      ></h1>
      <div className="about-panel flex flex-col sm:flex-row sm:h-auto mb-16 items-center p-4 bg-black">
        <div className="team-img flex justify-cente cursor-none">
          <img
            src="https://www.titancompany.in/sites/default/files/Overview%20sample%202.png"
            alt="Team Image"
            className="w-4/5 object-center"
          />
        </div>
        <div className="team-details flex flex-col justify-start mb-10 h-auto items-center flex-1 p-4 cursor-text">
          <h2 className="section-heading text-xl font-semibold lg:text-3xl">
            Titan Overview
          </h2>
          <div className=" text-justify mb-10 first-letter:text-3xl ">
            Titan is India's leading lifestyle company and among the most
            admired and respected corporates in the country. Titan has come a
            long way since 1984 when we started with one product category.
          </div>
          <button className="btn">Read More</button>
        </div>
      </div>

      <div className="about-panel flex flex-col sm:flex-row items-center justify-center sm:gap-10 h-auto mb-16 gap-4 p-6 bg-black">
        <div className="about-img flex-1  flex justify-center bg-black cursor-none">
          <img
            src="/about-watch-img.jpg"
            className="w-1/2 md:w-full"
            alt="watch image"
          />
        </div>
        <div className="about-details flex flex-col justify-center items-center h-auto flex-1 bg-black cursor-text">
          <h2 className="section-heading text-xl font-semibold lg:text-3xl">
            Our Heritage
          </h2>
          <div className="mb-10  text-justify bg-black first-letter:text-3xl">
            A journey of over 30 years that saw Titan Watch Project becoming
            Titan Watches, to Titan Industries, and to what’s today known as the
            Titan Company Limited. With hitting the 15 million mark every year
            in production, each year saw new technologies and innovations. The
            company's commitment to quality and excellence has made it a trusted
            name in the industry. Titan continues to set new benchmarks in
            design and craftsmanship, reflecting its enduring legacy.
          </div>
          <button className="btn">Read More</button>
        </div>
      </div>
    </>
  );
};

export default About;
