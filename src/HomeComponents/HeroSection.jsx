import React from "react";
import Navbar from "./Navbar";
import { IconArrowRight, IconPhoneFilled } from "@tabler/icons-react";
import Hero from "./Hero";

const HeroSection = () => {
  return (
    <div className="">
      <div className='bg-[url("/images/Hero_Bg.png")] bg-no-repeat bg-center bg-cover h-full px-4 py-3'>
        <div className="flex justify-between items-center text-white px-6">
          <div className="">
            <img src="/images/Easytel_logo.png" alt="" className="w-50" />
          </div>
          <div className="">
            <ul className="lg:flex hidden  lg:gap-10 items-center justify-center text-lg ">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>How it works</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex items-center  justify-center">
            <button className="hover:bg-[#39b54a]  px-4 py-1 rounded-3xl hidden xl:flex gap-2 items-center border-3 hover:border-[#39b54a] cursor-pointer text-xl">
              <IconPhoneFilled /> 1300 132 288
            </button>
          </div>
        </div>

        <div className="mt-6 px-6 min-h-[80vh] flex">
          <div className="flex flex-col gap-8 items-start justify-center text-center">
            <p className="text-3xl md:text-6xl font-semibold mb-5 leading-[3rem] md:leading-[5rem] text-start ">
              Make your business <br className="hidden md:block" />
              communication way
              <br className="hidden md:block" /> better with VoIP phones.
            </p>
            {/* <p className="text-lg md:text-xl mb-6">
                  Your one-stop solution for all telecommunication needs.
                </p> */}
            <button className="border-2 text-white px-6 py-3 rounded-lg hover:bg-[#32a43f] hover:border-[#32a43f] transition duration-300 cursor-pointer flex gap-2 items-center text-lg">
              Get Quote
              <IconArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
