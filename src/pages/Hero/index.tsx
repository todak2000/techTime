import React from "react";
import Image from "next/image";
import Button from "@/components/buttons/Button";
import {
  callToActionArray,
  previewImagesArray,
  previewValueText,
  previewValue,
} from "@/constant";

import { heroHeaderText, heroNormalText } from "@/constant";

function Hero() {
  return (
    <section className="bg-desktop h-screen w-full bg-brand_primary_color px-4 pt-[60px] md:flex md:flex-col md:justify-center  md:px-[120px]">
      <div className="flex flex-col items-center justify-center md:w-1/2 md:items-start md:justify-start">
        <p className="header-text-medium text-center text-white md:text-left md:text-[64px] md:leading-[82px]">
          {heroHeaderText}
        </p>
        <p className="normal-text mt-4 w-[70%] text-center text-[8px] leading-[15px] text-[#E7E7E7] md:w-[85%] md:text-left md:text-[16px] md:leading-[26px]">
          {heroNormalText}
        </p>

        <div className="mt-4 flex flex-row items-center justify-between md:mt-8">
          {callToActionArray.map(({ id, text, icon, variant }) => {
            return (
              <Button
                className="mr-4 md:mr-10"
                size="hero"
                key={id}
                variant={text === "Get Started Now" ? "hero" : "hero-two"}
              >
                {text}
                {icon !== null && <span className="ml-2">{icon}</span>}
              </Button>
            );
          })}
        </div>
        <div className="mt-4 flex flex-row items-center md:mt-8">
          {previewImagesArray.map(({ id, image }) => {
            return (
              <Image
                key={id}
                src={image}
                priority
                height={30}
                width={30}
                className=" ml-[-7px] h-8 w-8 rounded-full border border-white md:ml-[-20px] md:h-16 md:w-16"
                alt="preview images"
              />
            );
          })}
          <div className="ml-2">
            <p className="font-secondary text-right text-[16px] font-bold leading-[20px] text-white md:text-left md:text-[24px] md:leading-[30px]">
              {previewValue}k+
            </p>
            <p className="normal-text mt-[-0.4rem] w-[70%] text-right text-[8px] leading-[15px] text-[#E7E7E7] md:w-[85%] md:text-left md:text-[16px] md:leading-[26px]">
              {previewValueText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
