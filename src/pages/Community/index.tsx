import React from "react";
import Button from "@/components/buttons/Button";
import {
  communityHeaderText,
  communityMiddleText,
  communityNormalText,
} from "@/constant";

function Community() {
  return (
    <section className="w-full justify-center bg-brand_primary_color px-4 py-[60px] md:flex md:flex-col  md:px-[120px]">
      <div className="flex flex-col items-center justify-center ">
        <p className="normal-text w-[70%] text-center text-[8px] uppercase leading-[10px]  text-[#E7E7E7] md:w-[85%] md:text-[16px] md:leading-[26px]">
          {communityHeaderText}
        </p>
        <p className="header-text text-center text-[24px] leading-[30px] text-white md:text-[46px] md:leading-[68px]">
          {communityMiddleText}
        </p>
        <p className="normal-text w-[70%] text-center text-[8px] leading-[10px]  text-[#E7E7E7] md:w-[85%] md:text-[16px] md:leading-[26px]">
          {communityNormalText}
        </p>
        <span className="bg-community mb-8 h-[25vh] w-full md:h-[50vh]"></span>
        <Button className="capitalize" size="hero" variant="community">
          {communityHeaderText}
        </Button>
      </div>
    </section>
  );
}

export default Community;
