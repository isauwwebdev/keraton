"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Dots from "./Dots";
import React from "react";

// Define interfaces for the JSON structure
interface VendorMenuItem {
  item: string;
  price: number;
  img: string; // Assuming menu items might have images later
}

interface VendorData {
  name: string;
  img: string;
  menu: VendorMenuItem[];
}

// Update Props to use the new VendorData interface
type Props = {
  right: boolean;
  vendors: VendorData[]; // Changed from content and imgs
  desc: string;
};

export default function VendorCarousel({ right, vendors, desc }: Props) {
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
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  interface MenuItemProps {
    item: string;
    price: number;
    img: string;
  }

  const MenuItem: React.FC<MenuItemProps> = ({ item, price, img }) => {
    return (
      <div className="flex items-center text-xl md:text-xl mb-2 justify-stretch">
        {img && (
          <div
            className="relative aspect-square w-10 mr-2 overflow-hidden rounded-lg border"
            style={{ borderColor: "#FEFDEA" }}
          >
            {" "}
            {/* Container for image size */}
            <Image
              src={img}
              alt={item} // Use item name as alt text
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        {/* Item name and price */}
        <p className="">
          {item} - ${price.toFixed(2)}{" "}
        </p>
      </div>
    );
  };

  // Sync the image carousel with the content carousel's selected index
  useEffect(() => {
    if (emblaApiImage && emblaApi) {
      emblaApiImage.scrollTo(selectedIndex);
    }
  }, [selectedIndex, emblaApiImage, emblaApi]);

  const length = vendors.length;
  return (
    <div
      className={
        "relative w-3/4 aspect-auto " + (right ? "self-start" : "self-end")
      }
    >
      {/* Vendor Image Carousel (synced) */}
      <div
        className={
          "absolute top-[5%] z-20 w-1/3 " +
          (right ? "-right-[30%]" : "-left-[30%]")
        }
      >
        <div
          className="overflow-hidden bg-yellow border-yellow border-4 lg:border-8 rounded-xl lg:rounded-3xl shadow-lg"
          ref={emblaRefImage}
        >
          <div className="flex">
            {/* Map over vendors to get images */}
            {vendors.map((vendor, i) => {
              return (
                <div
                  key={i}
                  className="relative flex flex-[0_0_100%] aspect-square w-full h-50 sm:h-50 md:h-60"
                >
                  <Image
                    src={vendor.img || "/images/placeholder.png"} // Use vendor image, add placeholder if needed
                    alt={`${vendor.name} logo`}
                    fill={true}
                    style={{ objectFit: "cover" }} // Ensure image covers the area
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="pt-1 lg:pt-8">
          <p className="text-center font-bold text-sm lg:text-5xl bg-gradient-to-r from-gold via-[#9E4C01] to-red text-transparent bg-clip-text">
            {desc} {/* Keep the category description */}
          </p>
        </div>
      </div>

      <div
        className="h-full overflow-hidden rounded-xl lg:rounded-3xl shadow-2xl"
        ref={emblaRef}
      >
        <div className="flex h-full min-h-24 lg:min-h-96">
          {" "}
          {vendors.map((vendor, i) => {
            return (
              <div className="bg-red flex-[0_0_100%]" key={i}>
                {" "}
                <div className="text-center text-yellow">
                  <h2 className="text-2xl lg:text-4xl font-bold block mb-2 md:text-2xl">
                    {vendor.name}
                  </h2>
                  <div className="w-full h-[2px] bg-[#e9d9cb] my-2 lg:my-4"></div>{" "}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 px-6 lg:px-10 ml-12 pb-10 pt-4">
                    {vendor.menu.map((menuItem, itemIndex) => (
                      <MenuItem
                        key={itemIndex}
                        item={menuItem.item}
                        price={menuItem.price}
                        img={menuItem.img}
                      />
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
