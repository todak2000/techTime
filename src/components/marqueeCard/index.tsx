import React from "react";
import Image from "next/image";

type CardItem = {
  id: number;
  icon: any;
};
interface CardProps {
  items: CardItem[];
}
const Card: React.FC<CardProps> = ({ items }) => {
  return (
    <div className="flex flex-row items-center justify-center rounded-lg bg-[#CCDBF0] p-4">
      {items.map((item) => {
        return (
          <Image
            key={item.id}
            src={item?.icon}
            priority
            height={48}
            width={48}
            className="mr-3 w-[50px] md:mr-8 md:w-[130px]"
            alt="marque images"
          />
        );
      })}
    </div>
  );
};

export default Card;
