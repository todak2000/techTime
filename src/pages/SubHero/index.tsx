import React from "react";
import {
  subHeroArray,
  subHeroHeaderText,
  subHeroNormalText,
  subHeroButtonText,
  marqueArray,
} from "@/constant";
import Card from "@/components/marqueeCard";
import Image from "next/image";
import Button from "@/components/buttons/Button";
const SubHero = () => {
  return (
    <>
      <Card items={marqueArray} />
      <section className="bg-subhero w-full flex-col bg-[#F8F9FC] px-4 pt-[40px] md:flex md:flex-row md:justify-between md:px-[120px] md:py-[80px] md:pt-[80px] ">
        <div className="flex w-full flex-col items-center md:w-[50%] md:items-start">
          <p className="header-text relative text-center text-[24px] leading-[30px] text-[#000F24] md:text-left md:text-[46px] md:leading-[69px]">
            {subHeroHeaderText}
            <Image
              src="/images/crown.svg"
              priority
              height={100}
              width={100}
              className="absolute top-[-13px] left-[-7px] w-[24px] md:top-[-15px] md:left-[-30px] md:w-[43px]"
              alt="about"
            />
          </p>
          <p className="normal-text mb-2 w-full text-center text-[8px] capitalize leading-[16px]  text-[#A1A1A1] md:text-left md:text-[16px] md:leading-[28px]">
            {subHeroNormalText}
          </p>
          <Button variant="course" size="sub">
            {subHeroButtonText}
          </Button>
          {/* */}
          <div className="mt-8 grid grid-cols-2 gap-2 md:mt-2">
            {subHeroArray.map(({ id, text, icon }) => {
              return (
                <Button variant="subhero" size="sub" key={id}>
                  {icon !== null && (
                    <Image
                      src={icon}
                      priority
                      height={32}
                      width={32}
                      className="mr-4 h-[17px] w-[17px] md:h-[32px] md:w-[32px]"
                      alt="about"
                    />
                  )}
                  {text}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="mt-8 w-full md:mt-0 md:w-[50%]">
          <Image
            src="/images/subHero_img.png"
            priority
            height={600}
            width={800}
            className="w-full"
            alt="subhero img"
          />
        </div>
      </section>
    </>
  );
};

export default SubHero;
