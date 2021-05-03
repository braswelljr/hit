import React from "react";
import HInstitute from "../assets/logos/logo-w.png";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="px-8 py-20 text-3xl text-white md:justify-between md bg-footer pt-28 md:px-12 xl:px-28 lg:px-20">
        <div className="space-y-12">
          <img src={HInstitute} alt="Hive Institute" className="block w-auto h-20 mx-auto" />
          <hr className="border-2 rounded" />
          <div className="flex flex-col justify-center px-10 mx-auto space-y-7 lg:space-y-0 lg:justify-between lg:flex-row">
            <div className="text-left">
              <h3 className="text-xl font-medium uppercase">Stay Connected</h3>
              <div className="mt-4 text-base font-medium">Contact Us</div>
              <div className="flex mt-2">
                <a href="#" className="block">
                  <FaTwitter className="w-auto h-7" />
                </a>
                <a href="#" className="block">
                  <FaFacebookF className="w-auto h-6" />
                </a>
                <a href="#" className="block">
                  <FaLinkedinIn className="w-auto h-7" />
                </a>
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-medium uppercase">About the Hive</h3>
              <a href="#" className="block mt-1 text-base font-medium text-footer-text">
                Apply
              </a>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-medium uppercase">Programs</h3>
              <a href="#" className="block mt-1 text-base font-medium text-footer-text">
                IOT
              </a>
              <a href="#" className="block mt-1 text-base font-medium text-footer-text">
                ICT & Programmming
              </a>
              <a href="#" className="block mt-1 text-base font-medium text-footer-text">
                Digital Fabrication
              </a>
              <a href="#" className="block mt-1 text-base font-medium text-footer-text">
                Digital Marketing
              </a>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-medium uppercase">News and Events</h3>
              <a href="#" className="block mt-1 text-base font-medium text-footer-text">
                Workshops
              </a>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-medium uppercase">Location</h3>
              <a href="#" className="block mt-1 text-base italic font-medium text-footer-text">
                Kentinkron Hs 49
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 text-2xl text-center text-white bg-gray-800">
        Copyright reserved for KUMASI HIVE © 2021
      </div>
    </>
  );
};

export default Footer;
