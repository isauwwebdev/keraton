"use client";
// components/Carousel.tsx
// import the hook and options type
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { useState, useEffect } from "react";
import VendorImage from "./VendorImage";
import Image from "next/image";
import Dots from "./Dots";
import React from "react";

// Define the props
type Props = any & EmblaOptionsType;

const Carousel = ({ right, content, imgs, ...options }: Props) => {
  // 1. useEmblaCarousel returns a emblaRef and we must attach the ref to a container.
  // EmblaCarousel will use that ref as basis for swipe and other functionality.
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      // selectedScrollSnap gives us the current selected index.
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const length = content.length;

  return (
    <div className="relative w-full">
      <VendorImage right={right} imgs={imgs} selectedIndex={selectedIndex} />
      <div className="bg-red w-full relative z-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {content.map((item: any, i: number) => {
              return (
                <div className="bg-red h-64 flex-[0_0_100%]" key={i}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <Dots itemsLength={length} selectedIndex={selectedIndex} />
      </div>
    </div>
  );
};
export default Carousel;
