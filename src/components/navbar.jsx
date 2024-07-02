import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-zinc-900 ">
      <nav className="flex w-full screen-max-width z-[999]">
        <img src="./titan white logo.jpg" alt="" className="h-12 w-18" />

        <div className="flex flex-1 justify-center items-center max-sm:hidden">
          {navLists.map((nav, index) => (
            <AnchorLink
              key={index}
              className={`px-5 text-nase cursor-pointer text-gray hover:text-white transition-all  ${
                index === 4 && "ml-80 "
              }`}
            >
              {nav}
              <a href="./highlights"></a>
            </AnchorLink>
          ))}
        </div>
        <div className="flex items-center  max-sm:justify-end max-sm:flex-1 ">
          <img src="./shop white.jpg" alt="" className="h-12 w-14" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
