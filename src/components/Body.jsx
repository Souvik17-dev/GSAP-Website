import React, { useRef } from "react";
import Navbar from './Navbar';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import shoe from "../assets/shoe_image.png";
import ama from "../assets/amazon.png";
import flip from "../assets/flipkart.png";
import Button from "./Button";

function Body() {
  const navref = useRef();
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".nav-item", {
        y: -20,
        duration: 0.8,
        delay: 0.5,
        opacity: 0,
        stagger: 0.2,
        ease: "power2",
      });
    },
    { scope: navref }
  ); /// scope me .container dene se sirf container wala class chalega
  return (
    <>
      <div ref={navref}>
        <Navbar />
      </div>
      <div className="px-20 py-10 flex items-center justify-center">
        <div>
          <h1 className="font-extrabold text-[108px] leading-tight">
            YOUR FEET <br /> DESERVE <br /> THE BEST
          </h1>
          <p className="font-semibold py-5">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO <br /> HELP YOU WITH
            OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE'RE HERE TO HELP
            YOU WITH OUR <br /> SHOES.
          </p>
          <div className="text-[20px] font-semibold flex gap-10">
            <Button
              props={"Shop Now"}
              className={"text-[20px] font-semibold mr"}
            />
            {/* <button className="bg-red-500 px-4 py-1 text-white mr-8">
            Shop Now
          </button> */}
            <button className="border-1 px-4 py-1 active:scale-90 hover:cursor-pointer">
              Category
            </button>
          </div>
          <h2 className="mt-8 text-gray-700">Also Available On</h2>
          <div className="flex gap-5 mt-4 items-center">
            <a href="https://www.flipkart.com/search?q=nike%20shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off">
              <img src={flip} />
            </a>
            <a href="https://www.amazon.in/s?k=nike&crid=30W4EUEUEGRZX&sprefix=nike%2Caps%2C351&ref=nb_sb_noss_2">
              <img src={ama} />
            </a>
          </div>
        </div>
        <img className="my-20" src={shoe} alt="Shoe_image" />
      </div>
    </>
  );
}

export default Body;
