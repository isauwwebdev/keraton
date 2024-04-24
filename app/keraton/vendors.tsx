"use client";

import React, { useEffect } from "react";
import Carousel from "../components/carousel/VendorCarousel";

const content: string[] = ["1", "2", "3"];

const imgs: string[] = [
  "/images/keraton2.png",
  "/images/charlieburg.png",
  "/images/careerFair.png",
];

export default function Vendors() {
  return (
    <div className="bg-yellow mx-auto justify-center pb-8">
      <div className="flex flex-col md:px-32 px-8 pt-8">
        <div className="bg-gradient-to-r from-red to-goldBright text-white font-medium rounded-3xl p-1 h-24 align-middle justify-center content-center">
          <span className="flex w-full bg-yellow text-red from-red to-goldBright p-1 font-sans text-center mx-auto justify-center text-2xl h-full rounded-3xl items-center font-semibold text-3xl">
            VENDORS
          </span>
        </div>

        <div className="w-full mx-auto my-2">
          <div className="flex flex-col justify-center items-center">
            <Carousel right={false} content={content} imgs={imgs} />
            <Carousel right={false} content={content} imgs={imgs} />
            <Carousel right={false} content={content} imgs={imgs} />
          </div>
        </div>
      </div>
    </div>
  );
}
