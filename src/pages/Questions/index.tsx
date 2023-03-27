import React from "react";
import {
  questionsHeaderText,
  questionsNormalText,
  accordionArray,
} from "@/constant";
import Accordion from "@/components/accordion";

function Questions() {
  return (
    <section className="bg-question w-full bg-white px-4 py-[80px] md:flex md:flex-col md:justify-center  md:px-[200px]">
      <div className="flex flex-col items-center  justify-center">
        <p className="header-text text-center text-[24px] leading-[30px] text-[#000F24] md:text-left md:text-[46px] md:leading-[69px]">
          {questionsHeaderText}
        </p>
        <p className="normal-text w-[70%] text-center text-[8px] leading-[16px]  text-[#A1A1A1] md:text-[16px] md:leading-[28px]">
          {questionsNormalText}
        </p>
      </div>
      <div className="mt-4">
        <Accordion items={accordionArray} />
      </div>
    </section>
  );
}

export default Questions;
