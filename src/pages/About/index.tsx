import React from "react";
import { aboutHeaderText, aboutNormalText, aboutArray } from "@/constant";

import Image from "next/image";
import Card from "@/components/aboutCard";

const About = () => {
  return (
    <section className="bg-about w-full flex-col bg-[#F8F9FC] px-4 pt-[80px] md:flex md:flex-row md:justify-between md:px-[120px] md:py-[80px] ">
      <div className="w-full md:w-[50%] ">
        <p className="header-text text-center text-[24px] capitalize leading-[30px] text-[#000F24] md:text-left md:text-[46px] md:leading-[69px]">
          {aboutHeaderText}
        </p>
        <p className="normal-text w-full text-center text-[8px] capitalize leading-[16px] text-[#A1A1A1]  md:text-left md:text-[16px] md:leading-[28px]">
          {aboutNormalText}
        </p>
        <Image
          src="/images/about_img.png"
          priority
          height={100}
          width={100}
          className="mt-4 w-full"
          alt="about"
        />
      </div>
      <div className="mt-8 grid w-full grid-cols-2 gap-3 md:mt-0 md:w-[47%]">
        {aboutArray.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              text={item.text}
            />
          );
        })}
      </div>
    </section>
  );
};

export default About;
