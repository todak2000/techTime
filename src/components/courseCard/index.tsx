import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";

type CourseItem = {
  id: number;
  author: string;
  category: string;
  title: string;
  image: string;
  lessons: number;
  rating: number;
  total: number;
  price: number;
  hours: number;
};

const currencyFormat = (a: number) => {
  return a.toLocaleString("en-US", { style: "currency", currency: "USD" });
};

const Card = ({
  id,
  author,
  category,
  title,
  image,
  lessons,
  rating,
  total,
  price,
  hours,
}: CourseItem) => (
  <div className="m-1 w-[46%] rounded-lg bg-white p-2 shadow md:w-[32%] md:p-5">
    <Image
      src={image}
      priority
      height={100}
      width={100}
      className=" h-[110px] w-full rounded-sm md:h-[200px]"
      alt="preview images"
    />
    <div className="flex flex-row items-center justify-between md:my-2">
      <p className="flex h-[9px] w-[29px] flex-row items-center justify-center rounded-full bg-[#BDCAE0] font-primary text-[4px] leading-[5px] text-brand_primary_color md:h-[24px] md:w-[115px] md:text-[12px] md:leading-[16px]">
        {category}
      </p>
      <p className="inline-flex items-center text-[4px] font-thin text-[#A1A1A1] md:text-[12px]">
        {rating} <AiFillStar className="mx-1 text-[#F6B435]" /> ({total / 1000}
        k+)
      </p>
    </div>
    <p className="header-text text-[8px] leading-[10px] md:text-[20px] md:leading-[25px]">
      {title}
    </p>
    <div className="flex flex-row items-center justify-between md:my-2">
      <p className="inline-flex items-center text-[4px] font-thin text-[#A1A1A1] md:text-[12px]">
        <IoMdTime className="mx-1" />{" "}
        {`${Math.floor(hours)} hrs ${Math.round(
          (hours - Math.floor(hours)) * 60
        )} mins`}
      </p>
      <p className="inline-flex items-center text-[4px] font-thin text-[#A1A1A1] md:text-[12px]">
        <MdMenuBook className="mx-1" /> {lessons} Lessons
      </p>
    </div>
    <div className="flex flex-row items-center justify-between md:my-2">
      <span className="inline-flex items-center text-[6px] font-medium leading-[8px] md:text-[16px] md:leading-[22px]">
        <Image
          src={image}
          priority
          height={30}
          width={30}
          className=" mr-2 h-[16px] w-[16px] rounded-full md:h-[30px] md:w-[30px]"
          alt="preview images"
        />
        {author}
      </span>
      <p className="inline-flex items-center font-secondary text-[8px] font-semibold leading-[25px] text-brand_primary_color md:text-[20px]">
        {" "}
        {currencyFormat(price)}
      </p>
    </div>
  </div>
);

export default Card;
