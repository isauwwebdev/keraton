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
        className="hidden sm:block parallax-container object-fill"
        style={{
          position: "relative",
        }}
      >
        <img
          src="/images/keraton_banner_desktop.png"
          alt="Keraton Banner"
          className="object-contain w-full aos-init aos-animate"
          style={{
            backgroundAttachment: "fixed",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            maxHeight: "600px",
          }}
        />
      </div>

      {/* Parallax Container for Mobile Image */}
      {/* <div
        className="sm:hidden parallax-container"
        style={{
          backgroundImage: "url('/images/KERATON_Mobile.png')",
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}>
        <div className="flex justify-center items-end h-[500px]">
          <button className="text-orange-200 text-2xl font-bold animate-bounce flex items-center">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </button>
        </div>
      </div> */}
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
