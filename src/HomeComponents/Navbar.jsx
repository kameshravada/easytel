import { IconPhone, IconPhoneCall, IconPhoneFilled } from "@tabler/icons-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-white px-6">
      <div className="">
        <img src="./public/images/Easytel_logo.png" alt="" className="w-50" />
      </div>
      <div className="">
        <ul className="flex gap-10 items-center justify-center text-lg ">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>How it works</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="flex items-center  justify-center">
        <button className="hover:bg-[#39b54a]  px-4 py-1 rounded-3xl flex gap-2 items-center border-3 hover:border-[#39b54a] cursor-pointer text-xl">
          <IconPhoneFilled /> 1300 132 288
        </button>
      </div>
    </div>
  );
};

export default Navbar;
