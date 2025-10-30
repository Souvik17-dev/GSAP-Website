import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";
import FlavourSection from "./sections/FlavourSection";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestingmoniaSection from "./sections/TestingmoniaSection";
import FooterSection from "./sections/FooterSection";
gsap.registerPlugin(ScrollSmoother);

const App = () => {
  useGSAP(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
    setTimeout(() => {
      smoother.scrollTop(0, false);
    }, 50);
  }, []);
  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavourSection />
          <NutritionSection />
          <BenefitSection />
          <TestingmoniaSection />
          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default App;
