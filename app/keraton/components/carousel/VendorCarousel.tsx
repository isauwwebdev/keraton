"use client";

import Autoplay from "embla-carousel-autoplay";
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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay({ playOnInit: true, delay: 5000 })]
  );

  const [emblaRefImage, emblaApiImage] = useEmblaCarousel({
    loop: true,
    watchDrag: false, // Disable drag events
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
    <div className={"relative w-3/4 " + (right ? "self-start" : "self-end")}>
      {/* Vendor Image */}
      <div
        className={
          "absolute top-[5%] z-20 w-1/3 " +
          (right ? "-right-[30%]" : "-left-[30%]")
        } // Position based on content carousel
      >
        <div
          className="overflow-hidden bg-yellow border-yellow border-4 lg:border-8 rounded-xl lg:rounded-3xl shadow-lg"
          ref={emblaRefImage}
        >
          <div className="flex aspect-square">
            {imgs.map((item: any, i: number) => {
              return (
                <div key={i} className="relative flex flex-[0_0_100%]">
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
      <div
        className="overflow-hidden rounded-xl lg:rounded-3xl shadow-2xl"
        ref={emblaRef}
      >
        {/* Aspect ratio might not work for some browser */}
        <div className="flex aspect-[7/4]">
          {content.map((item: any, i: number) => {
            return (
              <div className="bg-red flex-[0_0_100%] content-center" key={i}>
                <div
                  className={
                    "flex " +
                    (right
                      ? "justify-start text-start"
                      : "justify-end text-end")
                  }
                >
                  <div className="text-yellow px-5 lg:px-20 py-2 lg:py-8">
                    {item.split("\n").map((line: string, index: number) => (
                      <p
                        className={
                          index === 0
                            ? "text-xl md:text-2xl lg:text-3xl 2xl:text-7xl font-bold mb-2"
                            : "text-[8px] lg:text-lg 2xl:text-4xl"
                        }
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Dots itemsLength={length} selectedIndex={selectedIndex} />
    </div>
  );
}
