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
      className="w-[90vw] sm:w-[60vh] md:w-[66vh] lg:w-[64vh] h-[45vh] sm:h-[55vh] md:h-[64vh] lg:h-[64vh] shrink-0 rounded-3xl overflow-hidden relative mx-4"
      ref={(ref) => (imageRef.current[index] = ref)}
    >
      <img
        src={image.src}
        className="w-full h-full object-cover"
        alt={image.info}
      />
      <div className="info absolute inset-0 bg-black bg-opacity-50 text-white flex items-end pb-8 pl-4 opacity-0 transition-opacity duration-300">
        <p>{image.info}</p>
      </div>
    </div>
  ));

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (imageRef.current.length > 0) {
      const totalWidth = imageRef.current.reduce(
        (acc, img) => acc + img.offsetWidth,
        0
      );
      const extraScroll =
        window.innerWidth -
        imageRef.current[imageRef.current.length - 1].offsetWidth;

      gsap.to(imageRef.current, {
        x: () => -(totalWidth - extraScroll),
        ease: "none",
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top top",
          end: () => `+=${totalWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: (progress) => {
              const snapPoints = imageRef.current.map(
                (_, index) => index / (imageRef.current.length - 1)
              );
              return snapPoints.reduce((prev, curr) =>
                Math.abs(curr - progress) < Math.abs(prev - progress)
                  ? curr
                  : prev
              );
            },
            duration: { min: 0.2, max: 0.3 },
            delay: 0.1,
            ease: "power1.inOut",
          },
        },
      });

      // Hover animation (unchanged)
      imageRef.current.forEach((ref) => {
        if (ref) {
          const info = ref.querySelector(".info");
          gsap.set(info, { opacity: 0 });

          ref.addEventListener("mouseenter", () => {
            gsap.to(info, { opacity: 1, duration: 0.3, ease: "power2.inOut" });
          });

          ref.addEventListener("mouseleave", () => {
            gsap.to(info, { opacity: 0, duration: 0.3, ease: "power2.inOut" });
          });
        }
      });
    }

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
        <h1 className="font-bold text-6xl  md:text-8xl text-white font-cormorant">
          Highlights
        </h1>
      </section>
      <p className="text-center text-white mt-6 text-lg md:text-xl lg:text-2xl leading-relaxed font-light tracking-wide px-4 lg:px-20">
        <span className="block font-semibold text-2xl md:text-3xl mb-2">
          Crafted for Excellence
        </span>
        our watches embody meticulous craftsmanship and timeless design,
        ensuring every piece reflects precision and sophistication
      </p>
      <section
        className="flex flex-nowrap items-start overflow-x-hidden py-10 mx-8"
        ref={imageContainerRef}
      >
        {imageSection}
      </section>
      <section className="w-full md:h-full sm:h-2/4"></section>
    </main>
  );
}

export default Highlights;
