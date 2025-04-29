"use client";
import React, { useEffect } from "react";
import KeratonHeader from "./components/KeratonHeader";
import Countdown from "./countdown";
import AOS from "aos";
import "aos/dist/aos.css";
import MultiLayerParallax from "./components/MultiLayerParallax";
import Image from "next/image";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="div">
      {/* Parallax Container for Desktop Image */}
      <div
        className="hidden sm:block parallax-container" // Removed object-fill
        style={{
          top: 0, // Stick to the top
          zIndex: 10, // Ensure it stays above other content when scrolling
          width: "100%", // Ensure container takes full width
          aspectRatio: "auto", // Adjust aspect ratio based on image, or set a specific one like '16/9' or '21/9' if needed
          // You might need to set a specific height or aspect ratio here depending on the desired layout
          // e.g., height: '500px' or aspectRatio: '21/9'
        }}
      >
        <Image
          src="/images/keraton_banner_desktop.png"
          alt="Keraton Banner"
          layout="fill" // Fill the container
          objectFit="contain" // Maintain aspect ratio and fit within bounds
          className="aos-init aos-animate" // Keep AOS animations if needed
          priority // Add priority if it's LCP (Largest Contentful Paint)
        />
      </div>

      {/* Parallax Container for Mobile Image */}
      <div className="sm:hidden">
        <MultiLayerParallax />
      </div>

      {/* About Section */}
      <div className="bg-red pt-4 justify-center content-center mx-auto pb-2 animate-fade-up">
        <div className="mx-auto">
          <Countdown />
        </div>

        <div className="content-center w-5/6 lg:w-2/3 justify-center my-auto mx-auto pt-8">
          <KeratonHeader title={"ABOUT"} red={true} />
          <p className="text-center text-yellow m-8 text-xl font-semibold ">
            Welcome to Keraton, the crown jewel of ISAUW&apos;s calendar and the
            most anticipated Indonesian Festival on the West Coast!
          </p>
          <p className="text-center text-yellow m-8 text-xl font-semibold">
            Held annually at the University of Washington since 2011, Keraton
            boasts a stellar lineup of performers, featuring past stars like
            Jeremy Passion, Dhruv and most recently, Charlie Burg.
          </p>
          <p className="text-center text-yellow m-8 text-xl font-semibold pb-4">
            Immerse yourself in a culinary adventure with diverse Indonesian
            food trucks, and engage in traditional games that add an extra layer
            of excitement. Join us in celebrating the rich tapestry of
            Indonesian culture, creating unforgettable memories that transcend
            borders.
          </p>
        </div>
      </div>
    </div>
  );
}
