import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Heritage = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        scrub: 2,
        start: "20% 30%",
        end: "90% 10%",
      },
    });

    tl.to(
      "#center",
      {
        height: "100vh",
      },
      "a"
    )
      .to(
        "#top",
        {
          top: "-50%",
        },
        "a"
      )
      .to(
        "#bottom",
        {
          bottom: "-50%",
        },
        "a"
      )
      .to(
        "#top-h1",
        {
          top: "130%",
        },
        "a"
      )
      .to(
        "#bottom-h1",
        {
          bottom: "-50%",
        },
        "a"
      )
      .to(
        "#center",
        {
          top: "-10%",
          opacity: 1,
          scrub: 1,
        },
        "a"
      );

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div>
      <div
        id="main"
        className="h-screen w-full  bg-[#101010] relative font-arvo"
      >
        <div id="top" className="h-2/4 w-full  absolute top-0 overflow-hidden">
          <h1
            id="top-h1"
            className=" text-6xl md:text-7xl lg:text-9xl absolute tracking-widest bottom-0 left-2/4  -translate-x-2/4 translate-y-2/4 "
          >
            HERITAGE
          </h1>
        </div>
        <div
          id="center"
          className="h-screen w-full opacity-0 duration-500 flex items-center justify-center brightness-110"
        >
          <img
            id="center-gif"
            src="heritage.gif"
            alt="Animated Gif"
            autoPlay
            className="w-3/4  h-auto"
          />
        </div>
        <div
          id="bottom"
          className="h-2/4 w-full absolute bottom-0 overflow-hidden"
        >
          <h1
            id="bottom-h1"
            className="text-6xl md:text-7xl lg:text-9xl top-0  tracking-widest left-2/4 -translate-y-2/4 -translate-x-2/4 absolute"
          >
            HERITAGE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Heritage;
