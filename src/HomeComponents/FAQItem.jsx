import React from 'react'

const FAQItem = ({ item, onClick, isOpen }) => {
  return (
    <div
      className="border-b border-gray-300 py-4 last:border-0 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-black  sm:text-xl ">
          {item.question}
        </h3>
        <p
          className={` ${
            isOpen ? "rotate-180 text-[#c13a18]" : "text-[#39b54a]"
          } ease-in-out transition-all duration-300`}
        >
          {isOpen ? "-" : "+"}
        </p>
      </div>
      {
        <div
          className={`mt-2 ${
            isOpen ? "max-h-fit" : "max-h-0 overflow-hidden"
          } ease-in-out transition-all `}
        >
          <p className="text-gray-600">{item.answer}</p>
        </div>
      }
    </div>
  );
}

export default FAQItem