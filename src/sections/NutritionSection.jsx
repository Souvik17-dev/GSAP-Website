import React, { useEffect, useState } from "react";
import { nutrientLists } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

const NutritionSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });
  const [lists, setlists] = useState(nutrientLists);
  useEffect(() => {
    if (isMobile) {
      setlists(nutrientLists.slice(0, 3));
    } else {
      setlists(nutrientLists);
    }
  }, [isMobile]);

  useGSAP(() => {
    const titlespilt = SplitText.create(".nutrition-title", {
      type: "chars",
    });
    const parasplit = SplitText.create(".nutrition-section p", {
      type: "words,lines",
      linesClass: "paragraph-line",
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top center",
      },
    });
    contentTl
      .from(titlespilt.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: "power1.out",
      })
      .from(parasplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
      });
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 80%",
      },
    });
    titleTl.to(".nutrition-text-scroll", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power1.inOut",
    });
  });

  return (
    <section className="nutrition-section">
      <img src="/images/footer-dip.png" className="w-full object-cover" />
      <img src="/images/big-img.png" className="big-img" />
      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 md:mt-0 mt-14">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col justify-center items-center gap-20">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title">It Still Does</h1>
            </div>
            <div
              className="nutrition-text-scroll place-self-start"
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
            >
              <div className="bg-[#a26833] md:pt-0 pb-5 md:px-5 px-3 inline-block pt-3">
                <h2 className="text-milk">Body Good</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p className="text-lg md:text-right text-balance font-paragraph">
              &nbsp;&nbsp;&nbsp;Milk contains a wide
              array of nutrients, including vitamins, minerals, and protein, and
              this is lactose free
            </p>
          </div>
        </div>
        <div className="nutrition-box">
          <div className="list-wrapper">
            {lists.map((nutrient, index) => (
              <div key={index} className="relative flex-1 col-center">
                <div className="">
                  <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                  <p className="text-sm font-paragraph mt-2">up to</p>
                  <p className="font-bold text-2xl">{nutrient.amount}</p>
                </div>

                {index !== lists.length - 1 && (
                  <div className="spacer-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
