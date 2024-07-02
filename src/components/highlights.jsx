import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { imageDetails } from "../constants/index.js"; // Adjust the path as needed

function Highlights() {
  const imageRef = useRef([]);
  const imageContainerRef = useRef();

  const imageSection = imageDetails.map((image, index) => (
    <div
      key={index}
      className="sm:w-[60vh] md:w-[66vh] lg:w-[64vh] h-[45vh] sm:h-[55vh] md:h-[64vh] lg:h-[64vh] shrink-0 rounded-3xl overflow-hidden object-fit relative"
      ref={(ref) => (imageRef.current[index] = ref)}
    >
      <img src={image.src} className="w-full h-full object-cover" />
      <div className="info absolute inset-0 bg-black  bg-opacity-50 text-white flex items-end pb-8 pl-4 opacity-0 transition-opacity duration-300">
        <p>{image.info}</p>
      </div>
    </div>
  ));

  // gsap
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Scroll animation
    gsap.to(imageRef.current, {
      xPercent: -100 * (imageRef.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        scrub: 1,
        end: "+=" + imageContainerRef.current.offsetWidth,
        pin: true,
        snap: 1 / (imageRef.current.length - 1),
      },
    });

    // Hover animation
    imageRef.current.forEach((ref) => {
      const info = ref.querySelector(".info");
      gsap.set(info, { opacity: 0 });

      ref.addEventListener("mouseenter", () => {
        gsap.to(info, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
      });

      ref.addEventListener("mouseleave", () => {
        gsap.to(info, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // lenis
  const lenis = new Lenis();
  lenis.on("scroll", () => {});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return (
    <main className="bg-black w-full overflow-x-hidden relative">
      <section className="flex justify-center items-center p-6">
        <h1 className="font-bold text-8xl text-white font-cormorant">
          Highlights
        </h1>
      </section>
      <p className="text-center text-white mt-8 text-lg md:text-xl lg:text-2xl leading-relaxed font-light tracking-wide px-4 lg:px-20">
        <span className="block font-semibold text-2xl md:text-3xl mb-2">
          Discover Our Collection
        </span>
        of elegant and finely crafted watches. Elevate your style with pieces
        that are more than just timekeepers; they're statements of
        sophistication.
      </p>
      <section
        className="min-h-3/4 h-4/6 flex flex-nowrap items-start m-10 space-x-10 px-16"
        ref={imageContainerRef}
        style={{ width: "calc(100vw * 6)" }}
      >
        {imageSection}
      </section>
      <section className="w-full min-h-1/2"></section>
    </main>
  );
}

export default Highlights;
