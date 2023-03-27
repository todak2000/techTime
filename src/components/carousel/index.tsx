import React, { useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";

type CardItem = {
  id: number;
  author: string;
  portfolio: string;
  content: string;
  image: string;
};

interface CardProps {
  cardData: CardItem;
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  return (
    <div className="mr-2 w-[332px] rounded bg-white shadow-lg  md:mr-4 md:w-[600px]">
      <div className="px-6 py-4">
        <p className="normal-text text-[10px] leading-[13px] text-[#A1A1A1] md:text-[14px] md:leading-[26px]">
          {cardData?.content}
        </p>
        <div className="mt-4 flex flex-row items-center">
          <Image
            src={cardData?.image}
            priority
            height={30}
            width={30}
            className=" mr-2 h-6 w-6 rounded-full md:h-12 md:w-12"
            alt="preview images"
          />
          <div>
            <p className="normal-text text-[10px] leading-[13px] text-black md:text-[14px] md:leading-[19px]">
              {cardData?.author}
            </p>
            <p className="normal-text text-[8px] leading-[11px] text-[#A1A1A1] md:text-[12px] md:leading-[16px]">
              {cardData?.portfolio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CarouselProps {
  items: CardItem[];
}
const CardCarousel: React.FC<CarouselProps> = ({ items }) => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, -1]);

  const [index, setIndex] = useState(0);
  const [cards] = useState(items);
  const totalCards = cards.length;

  const goToSlide = (index: number) => {
    setIndex(index);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="hidden w-[170%] justify-around overflow-hidden md:flex">
        <Card cardData={cards[(index + 1) % totalCards]} />
        <Card cardData={cards[index]} />
        <Card cardData={cards[(index + 2) % totalCards]} />
        <Card cardData={cards[(index + 3) % totalCards]} />
      </div>
      <div className="flex w-[250%] justify-start overflow-hidden md:hidden">
        <Card cardData={cards[(index + 1) % totalCards]} />
        <Card cardData={cards[index]} />
        <Card cardData={cards[(index + 2) % totalCards]} />
        <Card cardData={cards[(index + 3) % totalCards]} />
        <Card cardData={cards[(index + 4) % totalCards]} />
      </div>
      <div className="relative mt-4 flex justify-center">
        {cards.map((_, i) => {
          return (
            <motion.div
              key={i}
              className="flex justify-center"
              style={{ x: yRange }}
            >
              <button
                className={`mr-1 h-[10px] w-[10px] rounded-full ${
                  i === index ? "bg-brand_primary_color" : "bg-[#CCDBF0]"
                }`}
                onClick={() => goToSlide(i)}
              ></button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CardCarousel;
