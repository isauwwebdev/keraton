"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { CarouselOptions } from "materialize-css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BroughtBy() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    // Load Materialize CSS
    const link = document.createElement("link");
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Load Materialize JavaScript
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Materialize components like carousel when the script is loaded
    script.onload = () => {
      if (window.M) {
        let elems = document.querySelectorAll(".carousel");
        if (elems == null) {
          elems = {} as NodeListOf<Element>;
        }
        const options: Partial<CarouselOptions> = {
          shift: 150,
          dist: -100,
          padding: 20,
          numVisible: 4,
          duration: 200, // transition duration in milliseconds
        };
        const instances = window.M.Carousel.init(elems, options);

        // Setting up autoplay for the carousel
        const autoplay = () => {
          const interval = setInterval(() => {
            instances.forEach((instance) => {
              instance.next();
            });
          }, 3000); // moves to the next item every 3000 milliseconds
          return interval;
        };

        const interval = autoplay();

        // Cleanup to remove script, link, and clearInterval when component unmounts
        return () => {
          document.head.removeChild(link);
          document.body.removeChild(script);
          clearInterval(interval);
        };
      }
    };
  }, []);

  return (
    <div
      className="max-w-full justify-center mx-auto pb-12"
      style={{ margin: 0, padding: 0 }}
    >
      {/* Start of White BG */}
      <div className="bg-yellow mx-auto justify-center pb-8">
        <div className="bg-yellow mx-auto justify-center pb-8">
          <div className="sm:px-24 px-8 pt-12 sm:pt-32">
            <Image
              className="animate-flip-down"
              src="/images/keraton_map.png"
              width={32}
              height={32}
              layout="responsive"
              alt="keraton map"
            />
          </div>
        </div>
        <h1 className="text-center text-red font-bold text-3xl pt-8">
          BROUGHT TO YOU BY
        </h1>
        <div className="carousel" style={{ height: "250px", width: "100%" }}>
          <a className="carousel-item" href="#one!">
            <Image
              src="/images/1.png"
              alt="Landing Image"
              width={8000}
              height={8000}
              layout="responsive"
            />
          </a>
          <a className="carousel-item" href="#two!">
            <Image
              src="/images/2.png"
              alt="Landing Image"
              width={8000}
              height={8000}
              layout="responsive"
            />
          </a>
          <a className="carousel-item" href="#three!">
            <Image
              src="/images/3.png"
              alt="Landing Image"
              width={8000}
              height={8000}
              layout="responsive"
            />
          </a>
          <a className="carousel-item" href="#four!">
            <Image
              src="/images/4.png"
              alt="Landing Image"
              width={8000}
              height={8000}
              layout="responsive"
            />
          </a>
          <a className="carousel-item" href="#five!">
            <Image
              src="/images/5.png"
              alt="Landing Image"
              width={8000}
              height={8000}
              layout="responsive"
            />
          </a>
          <a className="carousel-item" href="#six!">
            <Image
              src="/images/6.png"
              alt="Landing Image"
              width={8000}
              height={8000}
              layout="responsive"
            />
          </a>
          <a className="carousel-item" href="#seven!">
            <Image
              src="/images/7.png"
              alt="Landing Image"
              width={8000}
              height={8000}
              layout="responsive"
            />
          </a>
          <a className="carousel-item" href="#eight!">
            <Image
              src="/images/8.png"
              alt="Landing Image"
              width={8000}
              height={8000}
              layout="responsive"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
