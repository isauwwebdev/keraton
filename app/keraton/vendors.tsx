"use client";

import React, { useEffect } from "react";
import VendorCarousel from "../components/carousel/VendorCarousel";

const content: string[] = ["1", "2", "3"];

const imgs: string[] = [
  "/images/keraton2.png",
  "/images/charlieburg.png",
  "/images/careerFair.png",
];

export default function Vendors() {
  return (
    <div className="bg-yellow py-10 lg:py-32">
      <div className="mx-auto justify-center w-5/6 relative">
        <div className="flex flex-col pt-8">
          <div className="bg-gradient-to-r from-red to-goldBright text-white font-medium p-1 align-middle justify-center content-center aspect-18/1 rounded-lg lg:rounded-3xl">
            <span className="flex w-full bg-yellow text-red from-red to-goldBright p-1 font-sans text-center mx-auto justify-center text-xl lg:text-4xl h-full rounded-lg lg:rounded-3xl items-center font-semibold text-3xl">
              VENDORS
            </span>
          </div>

          <div className="w-full mx-auto py-10 lg:py-32">
            <div className="flex flex-col justify-center gap-10 lg:gap-24">
              <VendorCarousel
                right={false}
                content={content}
                imgs={imgs}
                desc={"FOODS"}
              />
              <VendorCarousel
                right={true}
                content={content}
                imgs={imgs}
                desc={"DRINKS"}
              />
              <VendorCarousel
                right={false}
                content={content}
                imgs={imgs}
                desc={"????"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
