import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import Layout from "@/components/layout/Layout";
import Footer from "./Footer";
import Seo from "@/components/Seo";
import Mainboard from "@/pages/common";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Questions from "./Questions";
import Community from "./Community";
import Carousel from "./Carousel";
import Courses from "./Courses";
import About from "./About";
import SubHero from "./SubHero";
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle="| Home" />
      <Seo />

      <Mainboard>
        <NavBar />
        <Hero />
        <SubHero />
        <About />
        <Courses />
        <Carousel />
        <Community />
        <Questions />
        <Footer />
      </Mainboard>
    </Layout>
  );
}
