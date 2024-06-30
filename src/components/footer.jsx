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
    <div className="panel">
      <div className="h-[100vh] mx-auto">
        <div className="cta w-[40%] mx-auto">
          <h3 className="text-xl font-semibold my-5 text-center">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>
          <div className="w-full">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="border-b-neutral-400 border-b-[1px] py-[9px] focus:outline-none w-[72%]"
            />
            <button className="btn">Subscribe</button>
          </div>
        </div>
        <div className="pageLinks flex justify-between max-w-[1200px] mx-auto my-10">
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
            <FontAwesomeIcon icon={faFacebook} size="lg" className="hover" />
            <FontAwesomeIcon
              icon={faInstagram}
              className="icon hover"
              size="lg"
            />
            <FontAwesomeIcon icon={faXTwitter} size="lg" className="hover" />
            <FontAwesomeIcon
              icon={faYoutube}
              size="lg"
              className="ml-[20px] hover"
            />
          </div>
        </div>
        <div className="copyright flex justify-between">
          <div className="flex justify-between w-[27%] ">
            <p className="hover">Terms and Conditions</p>
            <p className="hover">Privacy Policy</p>
          </div>
          <p className="hover">
            &copy; 2024 Titan Company Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
