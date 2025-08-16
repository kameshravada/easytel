import React, { useState } from 'react'
import { FAQData } from '../Data/Data';
import FAQItem from './FAQItem';

const FAQSection = () => {

    const [activeAnswerId, setActiveAnswerId] = useState(null);

    const showAnswer = (id) => {
        setActiveAnswerId(activeAnswerId === id ? null : id);
    }

  return (
    <div className="px-6 min-h-screen flex flex-col justify-center bg-gray-100 pt-12 py-10">
      <div className="">
        <h2 className="text-black/90 text-center font-bold text-2xl sm:text-3xl lg:text-6xl flex justify-center  bg-gray-100 pb-10 md:pb-16">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="mx-auto max-w-5xl">
        {
            FAQData.map((item) => (
                <FAQItem key={item.id} item={item} onClick={() => showAnswer(item.id)} isOpen={activeAnswerId === item.id} />
            ))}
      </div>
    </div>
  );
}

export default FAQSection