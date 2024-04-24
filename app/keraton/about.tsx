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
          shift: 100,
          dist: -100,
          padding: 20,
          numVisible: 5,
        }; // Specify any options here
        window.M.Carousel.init(elems, options);
      }
    };

    // Cleanup to remove script and link when component unmounts
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
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
            {/* <span className="flex w-full bg-red text-orange-200 p-1 font-sans text-center mx-auto justify-center text-3xl h-full rounded-3xl items-center">
              <h1 className="bg-gradient-to-r from-gold to-yellow text-transparent bg-clip-text bg-red text-3xl font-medium items-center">
                ABOUT
              </h1>
            </span> */}
            <span className="flex w-full bg-red text-orange-200 p-1 font-sans text-center mx-auto justify-center text-2xl h-full rounded-3xl items-center">
              ABOUT
            </span>
          </div>
          <p className="text-center font-sans text-yellow m-8 text-xl font-semibold">
            Welcome to Keraton, the crown jewel of ISAUW's calendar and the most
            anticipated Indonesian Festival on the West Coast!
          </p>
          <p className="text-center font-sans text-yellow m-8 text-xl font-semibold">
            Held annually at the University of Washington since 2011, Keraton
            boasts a stellar lineup of performers, featuring past stars like
            Jeremy Passion, Dhruv and most recently, Charlie Burg.
          </p>
          <p className="text-center font-sans text-yellow m-8 text-xl font-semibold pb-4">
            Immerse yourself in a culinary adventure with diverse Indonesian
            food trucks, and engage in traditional games that add an extra layer
            of excitement. Join us in celebrating the rich tapestry of
            Indonesian culture, creating unforgettable memories that transcend
            borders.
          </p>
        </div>

        {/* Start of White BG */}
        <div className="bg-yellow mx-auto justify-center pt-8 pb-8">
          <h1 className="text-center text-red font-bold text-3xl pt-8">
            BROUGHT TO YOU BY
          </h1>
          <div className="carousel">
            <a className="carousel-item" href="#one!">
              <Image
                src="/images/careerFair.png"
                alt="Landing Image"
                width={1000}
                height={1000}
                layout="responsive"
              />
            </a>
            <a className="carousel-item" href="#two!">
              <Image
                src="/images/keratonNEW.png"
                alt="Landing Image"
                width={1000}
                height={1000}
                layout="responsive"
              />
            </a>
            <a className="carousel-item" href="#three!">
              <Image
                src="/images/careerFair.png"
                alt="Landing Image"
                width={1000}
                height={1000}
                layout="responsive"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
