import React, { ReactElement, useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { navBarItems, navButtonText } from "../../constant";
import { useRouter } from "next/router";
import Button from "@/components/buttons/Button";
import Image from "next/image";

function NavBar(): ReactElement {
  const { push } = useRouter();

  const [showDropDown, setShowDropDown] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    if (width > 768) {
      setShowDropDown(false);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };
  const handleLink = (link: string) => {
    push(link);
  };

  return (
    <div className="flex  w-full flex-row items-center justify-between bg-brand_primary_color px-4 pt-[40px]  md:px-[120px]">
      <Image
        src="/images/logo.png"
        priority
        height={30}
        width={60}
        className="mb-2 w-[100px]"
        alt="TechTime logo"
      />
      <RxHamburgerMenu
        className="flex text-lg text-white md:hidden"
        onClick={handleClick}
      />

      <div
        className={` ${
          showDropDown
            ? "absolute top-16 right-4 grid w-[120px] grid-cols-1 gap-4 bg-white py-4 drop-shadow-md "
            : "hidden flex-row items-center md:flex"
        }`}
      >
        {navBarItems.map(({ id, route, name }) => {
          return (
            <p
              key={id}
              onClick={() => {
                handleLink(route);
              }}
              className="cursor-pointer text-center text-[16px] font-thin leading-[22px] text-brand_primary_color hover:font-bold hover:text-white md:mr-4 md:text-[#AAC4E6]"
            >
              {name}
            </p>
          );
        })}
        <Button variant="navButton" className="hidden md:flex">
          {navButtonText}
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
