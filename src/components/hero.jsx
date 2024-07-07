import { useRef } from "react";
import {
  useGsapShutterUnveil,
  useGsapPhotoScroller,
  useGsapPhotoLevitate,
} from "../hooks/gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);
  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);
  const photo3Ref = useRef(null);
  const photo4Ref = useRef(null);
  const photo5Ref = useRef(null);

  const photosArr = [photo1Ref, photo2Ref, photo3Ref, photo4Ref, photo5Ref];

  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.3, heroRef);
  useGsapPhotoScroller(photosArr);
  useGsapPhotoLevitate(photosArr, heroRef);

  return (
    <section className="hero wrapper" ref={heroRef}>
      <div className=" text-amber-500 font-bold leading-normal tracking-widest font-playfair text-5xl md:text-5xl lg:text-6xl xl:text-8xl overflow-hidden cursor-zoom-in">
        <h1 className="titan">
          TITAN <span ref={shutter1}></span>
        </h1>
        <h1 className="world">
          WORLD <span ref={shutter2}></span>
        </h1>
      </div>
      <p className="subtext font-arvo ">
        Timeless Precision, Unmatched Elegance
      </p>
      <div className="photos">
        <div
          ref={photo1Ref}
          className="photo one"
          style={{
            backgroundImage: 'url("/images/5.jpg")',
          }}
        ></div>
        <div
          ref={photo2Ref}
          className="photo two"
          style={{
            backgroundImage: 'url("/images/1.jpg")',
          }}
        ></div>
        <div
          ref={photo3Ref}
          className="photo three"
          style={{
            backgroundImage: 'url("/images/3.jpg")',
          }}
        ></div>
        <div
          ref={photo4Ref}
          className="photo four"
          style={{
            backgroundImage: 'url("/images/prod5.webp")',
          }}
        ></div>
        <div
          ref={photo5Ref}
          className="photo five"
          style={{
            backgroundImage: 'url("/images/8.jpg")',
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
