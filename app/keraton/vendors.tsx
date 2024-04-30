"use client";

import React, { useEffect } from "react";
import VendorCarousel from "./components/carousel/VendorCarousel";
import KeratonHeader from "./components/KeratonHeader";

const content: string[] = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  "2",
  "3",
];

const imgs: string[] = [
  "/images/keraton2.png",
  "/images/keraton2.png",
  "/images/careerFair.png",
];

export default function Vendors() {
  return (
    <div className="bg-yellow py-10 lg:py-18">
      <div className="mx-auto justify-center w-5/6 lg:w-2/3">
        <KeratonHeader title={"VENDORS"} red={false} />

        <div className="w-full mx-auto py-10 lg:py-20">
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
  );
}
