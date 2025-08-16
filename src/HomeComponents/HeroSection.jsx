import { IconArrowRight, IconMenu2, IconPhoneFilled, IconX } from "@tabler/icons-react";
import { useState } from "react";

const HeroSection = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <div className='relative bg-[url("/images/Hero_Bg.png")] bg-no-repeat bg-center bg-cover h-fit md:h-full md:px-4 py-8 md:py-3'>
        <div className="2xl:max-w-7xl mx-auto">
          <div className="flex justify-between items-center text-white px-6 ">
            <div className="">
              <img
                src="/images/Easytel_logo.png"
                alt=""
                className="w-38 md:w-50"
              />
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
            <div
              className="text-3xl cursor-pointer lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <IconX /> : <IconMenu2 />}
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden">
              <ul className="fixed right-0 w-full  backdrop-blur-sm rounded shadow-lg text-white bg-opacity-80 flex flex-col gap-4 items-center  py-5 lg:hidden ">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>How it works</li>
                <li>Contact Us</li>
              </ul>
            </div>
          )}

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
              <button className="border-2 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-2xl bg-[#0d6efd] border-[#0d6efd] hover:bg-[#32a43f] hover:border-[#32a43f] transition duration-300 cursor-pointer flex gap-2 items-center text-lg">
                Get Quote
                <IconArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
