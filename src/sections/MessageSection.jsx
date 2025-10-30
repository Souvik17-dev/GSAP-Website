import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

const MessageSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });
    const secondMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const paraMsgSplit = SplitText.create(".message-content p", {
      type: "words,lines",
      linesClass: "paragraph-line",
    });
    gsap.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.inOut",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });
    gsap.to(secondMsgSplit.words, {
      color: "#faeade",
      ease: "power1.inOut",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
    const revealtl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
      },
    });
    revealtl.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });
    const paratl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
      },
    });
    paratl.from(paraMsgSplit.words, {
      yPercent: 500,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
    });
  });

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="h-full w-full">
          <div className="msg-wrapper">
            <h1 className="first-message">STIR UP YOUR FEARLESS PAST AND</h1>
            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
              }}
              className="msg-text-scroll"
            >
              <div className="bg-light-brown mf:pb-5 pb-3 px-5">
                <h2 className="text-red-brown">Fuel Up</h2>
              </div>
            </div>
            <h1 className="second-message">
              YOUR FUTURE WITH EVERY GULP OF PERFECT Protein
            </h1>
          </div>
          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-sm lg:px-5 px-25 flex-center md:text-[0.9rem] text-[0.7rem] overflow-hidden">
              <p>
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you're one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
