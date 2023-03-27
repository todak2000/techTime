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
