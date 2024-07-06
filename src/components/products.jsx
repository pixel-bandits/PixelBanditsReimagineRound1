import React from "react";
import { products } from "../constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-screen p-3 md:p-10 lg:p-20 z-20">
      <h1 className="text-6xl text-center md:text-right md:text-7xl lg:text-9xl mb-5 md:mb-10 z-20">
        <span className="text-orange-500">D</span>ISCOVER OUR COLLECTIO
        <span className="text-orange-500">N</span>
      </h1>
      <Slider {...settings}>
        {products.map((item, i) => (
          <div
            key={i}
            className="productItem hover:cursor-pointer w-64 mb-5 flex flex-col items-center"
          >
            <img
              className="rounded-md mb-3"
              src={item.image}
              alt={item.title}
            />

            <p className="text-lg md:text-xl font-bold">{item.price}</p>
            <h3 className="text-base md:text-xl font-semibold">{item.title}</h3>
            <p className="text-base mb-2">{item.desc}</p>
            <button className="bg-transparent border-slate-500 border rounded-sm text-white font-semibold px-5 py-2 mr-2">
              Add to Cart
            </button>
            <button className=" bg-slate-700 rounded-sm text-white font-semibold px-5 py-2">
              Buy now
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Products;
