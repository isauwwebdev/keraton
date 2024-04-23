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
type Props = any;

const Carousel = ({ right, content, imgs }: Props) => {
  // 1. useEmblaCarousel returns a emblaRef and we must attach the ref to a container.
  // EmblaCarousel will use that ref as basis for swipe and other functionality.
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true});
  const [emblaRefImage, emblaApiImage] = useEmblaCarousel({loop: true, watchDrag: false});
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
  emblaApiImage?.scrollTo(selectedIndex);
  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRefImage}>
        <div className="flex">
          {imgs.map((item: any, i: number) => {
            return (
              <Image
              src={item}
              alt="Landing Image"
              width={200}
              height={200}
              key={i}
              className="flex-[0_0_100%]"
            />
            );
          })}
        </div>
      </div>


      <div className="bg-red w-1/2 relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {content.map((item: any, i: number) => {
              return (
                <div className="bg-red h-64 flex-[0_0_100%]" key={i}>
                  <h1 className="text-lg text-white">
                    {item}
                  </h1>
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
