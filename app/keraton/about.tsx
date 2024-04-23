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
      className="max-w-full justify-center mx-auto"
      style={{ margin: 0, padding: 0 }}
    >
      <Image
        src="/images/keraton2.png"
        alt="Landing Image"
        layout="responsive"
        width={1000}
        height={1000}
      />
      <div className="bg-red pt-8 max-w-7xl justify-center mx-auto">
        <div className="content-center w-5/6 justify-center items-center mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-yellow text-white font-semibold rounded-lg p-1">
            <span className="flex w-full bg-red text-orange-200 rounded p-2 font-sans text-center mx-auto justify-center text-2xl">
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
          <p className="text-center font-sans text-yellow m-8 text-xl font-semibold">
            Immerse yourself in a culinary adventure with diverse Indonesian
            food trucks, and engage in traditional games that add an extra layer
            of excitement. Join us in celebrating the rich tapestry of
            Indonesian culture, creating unforgettable memories that transcend
            borders.
          </p>
        </div>

        {/* Start of White BG  */}
        <div className="bg-yellow pt-2">
          <h1 className="text-center text-red font-bold text-2xl">
            BROUGHT TO YOU BY
          </h1>
          <div className="carousel">
            <a className="carousel-item" href="#one!">
              <Image
                src="/images/careerFair.png"
                alt="Landing Image"
                width={500}
                height={500}
                layout="responsive"
              />
            </a>
            <a className="carousel-item" href="#two!">
              <Image
                src="/images/keratonNEW.png"
                alt="Landing Image"
                width={500}
                height={500}
                layout="responsive"
              />
            </a>
            <a className="carousel-item" href="#three!">
              <Image
                src="/images/careerFair.png"
                alt="Landing Image"
                width={500}
                height={500}
                layout="responsive"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
