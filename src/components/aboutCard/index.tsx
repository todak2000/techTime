import React from "react";
import Image from "next/image";

type CardItem = {
  id: number;
  title: string;
  text: string;
  image: any;
};

const Card = ({ id, title, image, text }: CardItem) => (
  <div className="rounded-lg bg-white p-4">
    <Image
      src={image}
      priority
      height={48}
      width={48}
      className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]"
      alt="preview images"
    />
    <p className="header-text mt-4 text-[12px] leading-[16px] md:text-[16px] md:leading-[22px]">
      {title}
    </p>

    <p className="font-primary text-[8px] font-thin leading-[16px] text-[#A1A1A1] md:text-[12px] md:leading-[28px]">
      {text}
    </p>
  </div>
);

export default Card;
