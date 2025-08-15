import { IconArrowRight } from '@tabler/icons-react';
import React from 'react'

const Hero = () => {
  return (
    <div className="mt-6 px-6">
      <div className="flex flex-col gap-8 items-start justify-center h-full text-center">
        <p className="text-4xl md:text-6xl font-semibold mb-5  leading-[5rem] text-start ">
          Make your business <br className="sm:block" />
          communication way
          <br /> better with VoIP phones.
        </p>
        {/* <p className="text-lg md:text-xl mb-6">
            Your one-stop solution for all telecommunication needs.
          </p> */}
        <button className="border-2 text-white px-6 py-3 rounded-lg hover:bg-[#32a43f] transition duration-300 cursor-pointer flex gap-2 items-center text-lg">
          Get Quote
          <IconArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Hero