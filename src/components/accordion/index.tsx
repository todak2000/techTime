import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface AccordionProps {
  items: { id: number; title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <div
            className={`flex h-16 cursor-pointer items-center justify-between bg-transparent py-2 ${
              activeIndex === index ? "" : "border-t border-t-[#EAEAEA]"
            } `}
          >
            <div
              className={`${
                activeIndex === index
                  ? "text-brand_primary_color "
                  : "text-[#000F24]"
              } normal-text text-left text-[14px] font-bold leading-[19px] md:text-left md:text-[20px] md:leading-[32px]`}
              onClick={() => handleClick(index)}
            >
              {item.title}
            </div>
            <div>
              {activeIndex === index ? (
                <AiOutlineMinus
                  className="text-brand_primary_color"
                  onClick={() => handleClick(index)}
                />
              ) : (
                <AiOutlinePlus
                  className="text-[#000F24]"
                  onClick={() => handleClick(index)}
                />
              )}
            </div>
          </div>
          {activeIndex === index && (
            <div className="normal-text mb-4 py-4 text-left text-[8px] leading-[16px] text-[#A1A1A1] md:text-left md:text-[16px] md:leading-[26px]">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
