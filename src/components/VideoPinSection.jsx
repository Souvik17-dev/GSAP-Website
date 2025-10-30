import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import React from "react";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });
      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });
  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <video
          src="/videos/pin-video.mp4"
          playsInline
          muted
          loop
          autoPlay
        ></video>
        <div className="abs-center md:scale-100 scale-200">
          <img src="/images/circle-text.svg" className="spin-circle" />
          <div className="play-btn">
            <img src="/images/play.svg" className="size-[3vw] ml-[0.5vw]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
