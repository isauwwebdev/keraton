"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Dots from "./Dots";
import React from "react";

type Props = {
  right: boolean;
  content: string[];
  imgs: string[];
  desc: string;
};

export default function Carousel({ right, content, imgs, desc }: Props) {
  // 1. useEmblaCarousel returns a emblaRef and we must attach the ref to a container.
  // EmblaCarousel will use that ref as basis for swipe and other functionality.
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const [emblaRefImage, emblaApiImage] = useEmblaCarousel({
    loop: true,
    watchDrag: false,
  });

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

  emblaApiImage?.scrollTo(selectedIndex);
  const length = content.length;
  return (
    <div
      className={
        "relative w-3/4 aspect-[7/3] " + (right ? "self-start" : "self-end")
      }
    >
      {/* Vendor Image */}
      <div
        className={
          "absolute top-[5%] z-20 w-1/3 " +
          (right ? "-right-[30%]" : "-left-[30%]")
        }
      >
        <div className="overflow-hidden" ref={emblaRefImage}>
          <div className="flex">
            {imgs.map((item: any, i: number) => {
              return (
                <div key={i} className="relative flex-[0_0_100%] aspect-square">
                  <Image src={item} alt="Landing Image" fill={true} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="pt-1 lg:pt-8">
          <p className="text-center font-bold text-sm lg:text-5xl bg-gradient-to-r from-gold via-[#9E4C01] to-red text-transparent bg-clip-text">
            {desc}
          </p>
        </div>
      </div>

      {/* Vendor Content Carousel */}
      <div className="h-full overflow-hidden rounded-[20px]" ref={emblaRef}>
        <div className="flex h-full">
          {content.map((item: any, i: number) => {
            return (
              <div className="bg-red flex-[0_0_100%]" key={i}>
                <h1 className="text-lg text-white">{item}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <Dots itemsLength={length} selectedIndex={selectedIndex} />
    </div>
  );
}
