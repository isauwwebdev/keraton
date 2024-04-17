"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Carousel from "../components/carousel/VendorCarousel";

const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const content = ["1", "2", "3"];

const imgs = [
  "/images/keraton2.png",
  "/images/charlieburg.png",
  "/images/careerFair.png",
];

export default function Vendors() {
  return (
    <div className="bg-yellow mx-auto justify-center pb-8">
      <div className="flex flex-col md:px-32 px-8 pt-8">
        <div className="bg-gradient-to-r from-orange-500 to-yellow text-white font-semibold rounded-lg p-1">
          <span className="flex w-full bg-yellow text-red rounded p-3 font-sans text-center mx-auto justify-center text-2xl">
            VENDORS
          </span>
        </div>

        <div className="lg:w-full mx-auto my-2">
          <div className="flex flex-col justify-center">
            <Carousel content={content} imgs={imgs} loop />
            <Carousel content={content} imgs={imgs} loop />
          </div>
        </div>
      </div>
    </div>
  );

  /* {images.map((src, i) => {
              return (
                // 👇 style each individual slide.
                // relative - needed since we use the fill prop from next/image component
                // h-64 - arbitrary height
                // flex[0_0_100%]
                //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
                //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
                // <div className="relative h-64 flex-[0_0_100%]" key={i}>
                //   {/* use object-cover + fill since we don't know the height and width of the parent */
  //   <Image src={src} fill className="object-cover" alt="alt" />
  // </div>

  // <div className="bg-red h-64 flex-[0_0_100%]" key={i}></div>*/ */}
}
