import React from "react";
import Image from "next/image";
import Button from "@/components/buttons/Button";
import TextInput from "@/components/TestInput/TextInput";
import {
  footertext,
  socialMedia,
  usefulLinks,
  community,
  subscribeText,
  subscribeButtonText,
} from "@/constant";

function Footer() {
  return (
    <footer className=" grid w-full grid-cols-1 bg-brand_footer px-4 pt-10 pb-20 md:grid-cols-4 md:px-[120px] md:pt-[166px] md:pb-[347px]">
      <section>
        <Image
          src="/images/logo.png"
          priority
          height={30}
          width={60}
          className="mb-2 w-[100px]"
          alt="TechTime logo"
        />
        <p className="normal-text w-[80%] text-white">{footertext}</p>
        <div className="mt-4 flex flex-row md:grid md:grid-cols-5">
          {socialMedia.map(({ id, text, icon }) => {
            return (
              <span key={id} className="mr-6 md:mr-0">
                {icon}
              </span>
            );
          })}
        </div>
      </section>
      <section className="mt-8 md:mt-0">
        {usefulLinks.map(({ id, text }) => {
          if (id !== 1) {
            return (
              <p key={id} className="normal-text my-3 text-white">
                {text}
              </p>
            );
          } else {
            return (
              <p key={id} className="header-text mb-3 text-white">
                {text}
              </p>
            );
          }
        })}
      </section>

      <section className="mt-8 md:mt-0">
        {community.map(({ id, text }) => {
          if (id !== 1) {
            return (
              <p key={id} className="normal-text my-3 text-white">
                {text}
              </p>
            );
          } else {
            return (
              <p key={id} className="header-text mb-3 text-white">
                {text}
              </p>
            );
          }
        })}
      </section>

      <section className="mt-8 md:mt-0 md:ml-[-10%] md:w-[110%]">
        <p className="header-text mb-6 text-white">{subscribeText}</p>
        <div className="flex flex-row">
          <TextInput variant="subscribe" />
          <Button variant="subscribe">{subscribeButtonText}</Button>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
