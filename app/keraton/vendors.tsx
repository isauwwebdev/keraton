"use client";

import React, { useEffect } from "react";
import VendorCarousel from "./components/carousel/VendorCarousel";
import KeratonHeader from "./components/KeratonHeader";

const foods: string[] = [
  "Indo Cafe\nMenu:\nSate Ayam - $12\nExtra Rice - $2\nNasi Gila - $12\nPudding Lumut - $6\nGado Gado - $10\nEs Teler - $5",
  "Solar Chapter\nMenu:\nMie Lidi - $3 \nMacaroni - $4 \nKuping Gajah - $4 \nPilus - $3 \nNabati - $3 \nBawang Goreng - $4",
  "ISAUW Jasuke & Drinks \nMenu:\nJasuke - $4\nRoti Bakar - $6 \nMilo - $3 \nWater - $2.5",
  "ISAUW Indomie\nMenu:\nIndomie Single - $4\nIndomie Double - $6",
  "Rain Cafe\nMenu:\nFried Tofu - $9 \nSalted Egg - $15",
];

const drinks: string[] = [
  "Coffeeholic\nMenu:\nPurple Haze - $7\nThai Green Tea - $7\nCoffeeholic Dream - $7\nPandan Cold Foam Ca Phe Sua Da - $7\nDark Night - $7\nBerry Galaxy Refresher - $7",
  "Rain Cafe\nMenu:\nTiger Milk Tea - $7.50\nRain Black Milk Tea - $5.50\nTaro Milk Tea - $6\nAvocado Smoothie - $8.50",
];

const others: string[] = [
  "Solar Chapter\nShirts - $17\n Stickers (3pc) - $2",
  "West of Eden\nT-Shirt - $45",
];

const foodImg: string[] = [
  "/images/indocafe.png",
  "/images/solarchapter.jpg",
  "/images/isauw.png",
  "/images/isauw.png",
];

const drinkImg: string[] = ["/images/coffeeholic.png", "/images/raincafe.avif"];

const otherImg: string[] = [
  "/images/solarchapter.jpg",
  "/images/west-of-eden.jpg",
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
              content={foods}
              imgs={foodImg}
              desc={"FOODS"}
            />
            <VendorCarousel
              right={true}
              content={drinks}
              imgs={drinkImg}
              desc={"DRINKS"}
            />
            <VendorCarousel
              right={false}
              content={others}
              imgs={otherImg}
              desc={"MERCH"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
