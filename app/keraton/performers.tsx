"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import KeratonHeader from "./components/KeratonHeader";
import { Icon } from "./icons";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Performers() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="bg-red max-h-max pt-12"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="content-center w-5/6 lg:w-2/3 justify-center items-center mx-auto">
        <KeratonHeader title={"OUR PERFORMERS"} red={true} />
        <div className="content-center justify-center items-center mx-auto flex gap-5">
          <div
            className="flex flex-col text-center item-center w-40 lg:w-96 mx-auto flex-initial hover:animate-wiggle"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <Image
              className="pb-8"
              src="/images/rocco.png"
              width={32}
              height={32}
              layout="responsive"
              alt="LYN LAPID"
            />
            <p
              className="text-3xl lg:text-8xl bg-gradient-to-r from-[#CBAA2F] to-white text-transparent 
                        bg-clip-text text-center font-bold  inline-block"
            >
              SUNKIS
            </p>
            <p
              className="text-3xl lg:text-8xl text-transparent 
                        bg-clip-text text-center font-bold lg:inline-block text-opacity-0 text-white hidden"
            >
              SUNKIS
            </p>
          </div>
          <div
            className="text-center item-center w-40 lg:w-96 mx-auto flex-initial hover:animate-wiggle"
            data-aos="flip-left"
            data-aos-duration="2000"
          >
            <Image
              className="pb-8"
              src="/images/emilysie.png"
              width={32}
              height={32}
              layout="responsive"
              alt="EMILY SIE"
            />
            <p
              className="text-3xl lg:text-8xl bg-gradient-to-r from-[#CBAA2F] to-white text-transparent 
                        bg-clip-text text-center font-bold  inline-block"
            >
              KEENAN TE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
