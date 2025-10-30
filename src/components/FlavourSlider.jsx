import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { flavorlists } from "../constants";
import { useMediaQuery } from "react-responsive";

const FlavourSlider = () => {
  gsap.registerPlugin(ScrollTrigger);
  const slideRef = useRef();
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });
  useGSAP(() => {
    const scrollAmount = slideRef.current.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "2% top",
        end: `+=${scrollAmount + 1200}px`, //trigger start এর পর যতটুকু horizontal scroll দরকার, তত px scroll হলেই animation শেষ।
        scrub: true,
        pin: true,
      },
    });
    tl.to(".flavor-section", {
      x: `-${scrollAmount + 1200}px`,
      ease: "power1.inOut",
    });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });
    titleTl
      .to(".first-split-text", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-split-text",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );
  });
  return (
    <div ref={slideRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((falvors) => (
          <div
            key={falvors.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${falvors.rotation}`}
          >
            <img
              src={`/images/${falvors.color}-bg.svg`}
              className="absolute bottom-0"
            />
            <img
              src={`/images/${falvors.color}-drink.webp`}
              className="drinks"
            />
            <img
              src={`/images/${falvors.color}-elements.webp`}
              className="elements"
            />
            <h1>{falvors.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavourSlider;
