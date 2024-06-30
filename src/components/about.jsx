import React from "react";
import Typed from "typed.js";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const el = useRef(null);
  const img = useRef(null);
  const aboutImg = useRef(null);
  useGSAP(() => {
    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  }, []);

  useEffect(() => {
    //types.js
    const typed = new Typed(el.current, {
      strings: ["Enhance your elegance.", "Meet our team, know our mission."],
      startDelay: 300,
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 100,
      showCursor: false,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  useEffect(() => {
    const image = img.current;
    gsap.fromTo(
      image,
      {
        opacity: 0,
        scale: 0.2,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "none",
      }
    );
  }, []);
  return (
    <>
      <h1
        ref={el}
        className="text-2xl lg:text-4xl font-semibold h-[10vh] text-center"
      ></h1>
      <div className="panel">
        <div className="team-img">
          <img
            src="https://www.titancompany.in/sites/default/files/Overview%20sample%202.png"
            alt="Team Image"
          />
        </div>
        <div className="team-details flex flex-col justify-center items-start">
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

      <div className="panel">
        <div className="about-img" ref={aboutImg}>
          <img
            src="/about-watch-img.jpg"
            className="h-[700px]"
            ref={img}
            alt=""
          />
        </div>
        <div className="about-details flex flex-col justify-center items-start">
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

      {/* <div className="panel flex flex-col">
        <h2 className="section-heading text-xl font-semibold lg:text-3xl">
          Senior Management
        </h2>
        <div className="mentor-card">
          <div className="mentor-img">
            <img src="https://picsum.photos/id/173/200/300.webp" alt="" />
          </div>
          <div className="mentor-name"></div>
          <div className="mentor-desc"></div>
        </div>
        <div className="mentor-card"></div>
        <div className="mentor-card"></div>
        <div className="mentor-card"></div>
        <div className="mentor-card"></div>
        <div className="mentor-card"></div>
      </div> */}
    </>
  );
};

export default About;
