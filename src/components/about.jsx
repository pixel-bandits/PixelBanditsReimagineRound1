import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const el = useRef(null);

  useGSAP(() => {
    // Panel effect
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
        className="text-2xl lg:text-4xl font-semibold h-[10vh] text-center mt-14 "
      ></h1>
      <div className="about-panel flex flex-col md:flex-row md:h-auto mb-16 gap-4 p-4">
        <div className="team-img flex-1">
          <img
            src="https://www.titancompany.in/sites/default/files/Overview%20sample%202.png"
            alt="Team Image"
            className="w-full h-auto"
          />
        </div>
        <div className="team-details flex flex-col justify-center items-start flex-1 p-4">
          <h2 className="section-heading text-xl font-semibold lg:text-3xl">
            Titan Overview
          </h2>
          <div className="my-3 text-justify">
            Titan is India's leading lifestyle company and among the most
            admired and respected corporates in the country. Titan has come a
            long way since 1984 when we started with one product category.
            Today, with over 8,000 employees and about 38,000 in the overall
            Titan ecosystem, 16 brands and over 2,000 retail stores, we are as
            committed as ever to delivering profitable and responsible growth
            for all our stakeholders.
          </div>
          <button className="btn">Read More</button>
        </div>
      </div>

      <div className="about-panel flex flex-col md:flex-row items-center md:gap-10 md:h-auto mb-16 gap-4 p-4">
        <div className="about-img flex-1">
          <img
            src="/about-watch-img.jpg"
            className="w-full h-auto"
            alt="watch image"
          />
        </div>
        <div className="about-details flex flex-col justify-center items-start flex-1">
          <h2 className="section-heading text-xl font-semibold lg:text-3xl">
            Our Heritage
          </h2>
          <div className="my-3 text-justify">
            A journey of over 30 years that saw Titan Watch Project becoming
            Titan Watches, to Titan Industries, and to what’s today known as the
            Titan Company Limited. With hitting the 15 million mark every year
            in production, each year saw new technologies and innovations.
          </div>
          <button className="btn">Read More</button>
        </div>
      </div>
    </>
  );
};

export default About;
