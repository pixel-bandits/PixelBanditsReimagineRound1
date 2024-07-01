import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="panel h-fit">
      <div className="container mx-auto px-4 py-8">
        <div className="cta w-full md:w-2/3 lg:w-1/2 mx-auto text-center">
          <h3 className="text-xl font-semibold my-5">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="border-b-neutral-400 border-b-[1px] py-2 focus:outline-none w-full md:w-2/3"
            />
            <button className="btn w-full md:w-auto">Subscribe</button>
          </div>
        </div>
        <div className="pageLinks flex flex-col md:flex-row justify-between max-w-[1200px] mx-auto my-10 gap-10">
          <div>
            <h4 className="text-lg font-semibold">Collections</h4>
            <ul>
              <li>
                Titan Stellars <i className="ri-arrow-right-up-fill"></i>
              </li>
              <li>
                Raga power pearls <i className="ri-arrow-right-up-fill"></i>
              </li>
              <li>
                Nebula Jewels <i className="ri-arrow-right-up-fill"></i>
              </li>
              <li>
                Titan Automatics <i className="ri-arrow-right-up-fill"></i>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <ul>
              <li>Payment Options</li>
              <li>
                Encircle Program <i className="ri-arrow-right-up-fill"></i>
              </li>
              <li>
                Find Titan World Stores
                <i className="ri-arrow-right-up-fill"></i>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul>
              <li>
                <a href="tel:+1800-266-0123">Telephone</a>
              </li>
              <li>customercare@titan.co.in</li>
              <li>Help & Contact</li>
            </ul>
          </div>
          <div className="socials">
            <h4 className="text-lg font-semibold mb-4">Follow us</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                className="hover:text-blue-600"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className="hover:text-pink-600"
              />
              <FontAwesomeIcon
                icon={faXTwitter}
                size="lg"
                className="hover:text-blue-500"
              />
              <FontAwesomeIcon
                icon={faYoutube}
                size="lg"
                className="hover:text-red-600"
              />
            </div>
          </div>
        </div>
        <div className="copyright flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <p className="hover:underline">Terms and Conditions</p>
            <p className="hover:underline">Privacy Policy</p>
          </div>
          <p className="hover:underline">
            &copy; 2024 Titan Company Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
