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
    <div
      className={
        "relative w-3/4 aspect-auto " + (right ? "self-start" : "self-end")
      }
    >
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
          <div className="flex">
            {imgs.map((item: any, i: number) => {
              return (
                <div
                  key={i}
                  className="relative flex flex-[0_0_100%] aspect-square w-full h-50 sm:h-50 md:h-60"
                >
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
        className="h-full overflow-hidden rounded-xl lg:rounded-3xl  shadow-2xl"
        ref={emblaRef}
      >
        <div className="flex h-full min-h-24 lg:min-h-96">
          {content.map((item: any, i: number) => {
            return (
              <div className="bg-red flex-[0_0_100%]" key={i}>
                <div className="text-center px-5 lg:px-20">
                  <h1 className="text-xs lg:text-lg text-yellow">
                    {item.split("\n").map((line: string, index: number) => (
                      <React.Fragment key={index}>
                        {index === 0 ? (
                          <span className="text-xl lg:text-3xl font-bold block mb-2 md:text-2xl">
                            {line}
                          </span>
                        ) : (
                          <span className="block">{line}</span>
                        )}
                      </React.Fragment>
                    ))}
                  </h1>
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