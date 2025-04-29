"use client";

import React from "react"; // Removed useEffect as it wasn't used
import VendorCarousel from "./components/carousel/VendorCarousel";
import KeratonHeader from "./components/KeratonHeader";
import foodData from "../../public/data/food.json";
import drinkData from "../../public/data/drinks.json";
import merchData from "../../public/data/merch.json";

interface VendorMenuItem {
  item: string;
  price: number;
  img: string;
}

interface VendorData {
  name: string;
  img: string;
  menu: VendorMenuItem[];
}

export default function Vendors() {
  const foods: VendorData[] = foodData as VendorData[];
  const drinks: VendorData[] = drinkData as VendorData[];
  const merch: VendorData[] = merchData as VendorData[];

  return (
    <div className="bg-yellow py-10 lg:py-18">
      <div className="mx-auto justify-center w-5/6 lg:w-2/3">
        <KeratonHeader title={"VENDORS"} red={false} />

        <div className="w-full mx-auto py-10 lg:py-20">
          <div className="flex flex-col justify-center gap-10 lg:gap-24">
            <VendorCarousel right={false} vendors={foods} desc={"FOODS"} />
            <VendorCarousel right={true} vendors={drinks} desc={"DRINKS"} />
            <VendorCarousel right={false} vendors={merch} desc={"MERCH"} />
          </div>
        </div>
      </div>
    </div>
  );
}
