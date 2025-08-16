import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import React from "react";

const AboutEasytel = () => {
  return (
    <div className=" px-6  min-h-screen flex justify-center bg-gray-100 py-10">
      <div className="flex flex-col items-center">
        <div className="text-black/90 font-[Poppins] font-bold text-3xl  lg:text-6xl flex justify-center pb-3 md:pb-5">
          About &nbsp;EasyTel
        </div>
        <div className="text-black/70 font-[Poppins] text-lg sm:text-xl lg:text-2xl text-center tracking-[0.3rem] lg:tracking-[0.8rem] flex justify-center font-semibold">
          AS EASY AS YOU GO
        </div>
        <div className="text-black/70 font-[Poppins] text-lg  text-justify flex flex-col items-center gap-8 px-2 py-5 sm:p-10  ">
          <p>
            Easytel stands at the forefront of Internet telephony in India,
            revolutionizing communication with our cutting-edge VoIP solutions
            for both businesses and residential users. Leveraging our
            proprietary network infrastructure, we deliver unparalleled voice
            quality and the most competitive international rates in the market.
            With flexible, low-cost monthly plans, our customers can enjoy
            seamless communication from anywhere in the world with a broadband
            connection.
          </p>
          <p>
            As a Next Generation Internet Telephony Provider, Easytel introduces
            state-of-the-art Hosted IP PBX services, bringing innovative voice
            and advanced real-time communication solutions to a global audience.
            Our commitment to excellence ensures that our clients benefit from
            the latest in Internet telephony technology, fostering efficient and
            cost-effective communication.
          </p>
          <button className=" text-[#0d6efd]  rounded-3xl px-3 py-1 underline  cursor-pointer">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutEasytel;
