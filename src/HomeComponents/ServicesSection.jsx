import { IconHome, IconHomeFilled } from "@tabler/icons-react";
import React from "react";
import { serviceCards } from "../Data/Data";

const ServicesSection = () => {
  return (
    <div className=" px-6  min-h-screen flex  justify-center bg-gray-100 py-10">
      <div className="">
        <div className="text-black/90 font-bold text-2xl sm:text-3xl lg:text-6xl flex justify-center pb-10">
          It’s Easy To Choose Easy
        </div>
        <div className=" grid sm:grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-10">
          {serviceCards.map((card, index) => (
            <div
              key={index}
              className={`${(card.title==="Business Solutions")?"md:scale-107":"md:scale-100"} bg-gradient-to-b from-[#0d6efd] to-black/87 rounded-2xl flex flex-col gap-6 md:max-w-[20rem] md:w-full  py-6 md:py-8 lg:py-10 px-6 md:px-5 lg:px-10 hover:scale-103 transition-transform duration-300`}
            >
              <div className="flex flex-col gap-4 z-10">
                <div className="p-4 bg-white text-[#39b54a] rounded-full w-fit ">
                  {card.icon}
                </div>
                <div className="text-xl font-semibold">{card.title}</div>
              </div>

              <div className="">
                {card.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
