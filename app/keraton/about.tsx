"use client";

import Image from "next/image";
import React, { useEffect } from "react";

export default function About() {
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
        const elems = document.querySelectorAll(".carousel");
        const options = {
          shift: 150,
          dist: -100,
          padding: 20,
          numVisible: 4,
          onCycleTo: null,
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
      <Image
        src="/images/keraton2.png"
        alt="Landing Image"
        layout="responsive"
        width={1000}
        height={1000}
      />
      <div className="bg-red pt-12 justify-center content-center mx-auto pb-2">
        <div className="content-center w-5/6 justify-center my-auto mx-auto">
          <div className="bg-gradient-to-r from-gold to-yellow text-white rounded-3xl p-1 h-24 align-middle justify-center content-center font-bold items-center">
            {/* <span className="flex w-full bg-red text-orange-200 p-1 text-center mx-auto justify-center text-3xl h-full rounded-3xl items-center">
             <h1 className="bg-gradient-to-r from-gold to-yellow text-transparent bg-clip-text bg-red text-3xl font-medium items-center">
               ABOUT
             </h1>
           </span> */}
            <span className="flex w-full bg-red text-orange-200 p-1 text-center mx-auto justify-center text-2xl h-full rounded-3xl items-center">
              ABOUT
            </span>
          </div>
          <p className="text-center text-yellow m-8 text-xl font-semibold">
            Welcome to Keraton, the crown jewel of ISAUW's calendar and the most
            anticipated Indonesian Festival on the West Coast!
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
