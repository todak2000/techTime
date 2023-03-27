import React from "react";
import {
  carouselHeaderText,
  carouselArray,
  carouselMiddleText,
} from "@/constant";
import CardCarousel from "@/components/carousel";

function Carousel() {
  return (
    <section className=" w-full bg-[#F8F9FC] py-[80px] md:flex md:flex-col md:justify-center">
      <div className="flex flex-col items-center  justify-center  px-4 md:px-[200px] ">
        <p className="header-text text-center text-[24px] leading-[30px] text-[#000F24] md:text-left md:text-[46px] md:leading-[69px]">
          {carouselHeaderText}
        </p>
        <p className="normal-text w-[70%] text-center text-[8px] leading-[16px]  text-[#A1A1A1] md:text-[16px] md:leading-[28px]">
          {carouselMiddleText}
        </p>
      </div>
      <div className="mt-4 w-screen overflow-hidden">
        <CardCarousel items={carouselArray} />
      </div>
    </section>
  );
}

export default Carousel;
