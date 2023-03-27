import React, { useState } from "react";
import {
  coursesHeaderText,
  coursesArray,
  coursesMiddleText,
  buttonText,
  coursesCategories,
} from "@/constant";
import Card from "@/components/courseCard";

import Button from "@/components/buttons/Button";

const Courses = () => {
  const [data, setData] = useState(coursesArray);

  const [activeCategory, setActiveCategory] = useState("all categories");

  const handleCategoryClick = (category: string) => {
    console.log(category, "cate");
    setActiveCategory(category);
  };

  return (
    <section className="bg-course w-full bg-[#F8F9FC] pt-[40px] md:flex md:flex-col md:justify-center md:py-[80px] md:pt-[80px] ">
      <div className="flex flex-col items-center  justify-center px-4 md:px-[200px]">
        <p className="header-text text-center text-[24px] leading-[30px] text-[#000F24] md:text-left md:text-[46px] md:leading-[69px]">
          {coursesHeaderText}
        </p>
        <p className="normal-text w-[70%] text-center text-[8px] leading-[16px]  text-[#A1A1A1] md:text-[16px] md:leading-[28px]">
          {coursesMiddleText}
        </p>
      </div>

      <div className="my-2 flex flex-col items-center md:my-0">
        <div className="flex justify-center">
          {coursesCategories.map((item, index) => {
            if (activeCategory === item) {
              return (
                <Button
                  key={index}
                  className="capitalize"
                  size="hero"
                  variant="category"
                  onClick={() => handleCategoryClick(item)}
                >
                  {item}
                </Button>
              );
            } else {
              return (
                <Button
                  key={index}
                  className="capitalize"
                  size="hero"
                  variant="neutral"
                  onClick={() => handleCategoryClick(item)}
                >
                  {item}
                </Button>
              );
            }
          })}
        </div>
        <div className="flex flex-row flex-wrap px-4 md:px-[120px]">
          {data
            .filter((card) =>
              activeCategory === "all categories"
                ? card
                : card.category.toLocaleLowerCase() ===
                  activeCategory.toLocaleLowerCase()
            )
            .map((card) => (
              <Card
                key={card.id}
                id={card.id}
                author={card.author}
                category={card.category}
                title={card.title}
                image={card.image}
                lessons={card.lessons}
                rating={card.rating}
                total={card.total}
                price={card.price}
                hours={card.hours}
              />
            ))}
        </div>
      </div>
      <div className="mt-4 flex flex-col  items-center justify-center px-4 md:px-[200px]">
        <Button className="capitalize" size="hero" variant="course">
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default Courses;
