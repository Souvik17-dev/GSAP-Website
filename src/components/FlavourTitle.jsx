import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

const FlavourTitle = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-split-text h1", {
      type: "chars",
    });
    const secondTextSplit = SplitText.create(".second-split-text h1", {
      type: "chars",
    });

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });
    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
      },
    });
    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 1%",
      },
    });
  });

  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden lg:py-0 py-3 first-split-text">
        <h1>We have 6</h1>
      </div>
      <div
        style={{
          clipPath: "polygon(0 0, 0 1%, 0 100%, 0% 100%)",
        }}
        className="flavor-text-scroll"
      >
        <div className="bg-[#a26833] 2xl:pt-0 py-5 lg:px-5 px-3">
          <h2 className="text-milk">Freaking</h2>
        </div>
      </div>
      <div className="overflow-hidden lg:py-0 py-3 second-split-text">
        <h1>delicious flavors</h1>
      </div>
    </div>
  );
};

export default FlavourTitle;
