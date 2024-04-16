"use client";

import Image from "next/image";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const VendorPage = () => {
  // Your Keraton page content goes here
  // <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  return (
    <main className="min-h-screen">
      <div className="max-h-max">
        <div className="bg-yellow">
          <div className="mx-8 pt-8">
            <div className="bg-gradient-to-r from-orange-500 to-yellow text-white font-semibold rounded-lg p-1">
              <span className="flex w-full bg-yellow text-red rounded p-2 font-sans text-center mx-auto justify-center">
                VENDORS
              </span>
            </div>

            <div className="flex flex-col"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

// If you also need the default export to be a page by itself
const Page = () => <VendorPage />;
export default VendorPage;
