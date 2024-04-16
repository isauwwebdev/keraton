"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function VendorCarousel(props: any) {
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

  const { slides } = props;

  return (
    <div
      className="max-w-full justify-center mx-auto"
      style={{ margin: 0, padding: 0 }}
    >
      <div className="bg-red pt-8">
        {/* Start of White BG  */}
        <div className="bg-yellow pt-2">
          <div className="carousel carousel-slider center">
            <div className="carousel-item bg-red text-white">
              <h2>First Panel</h2>
              <p>This is your first panel</p>
            </div>
            <div className="carousel-item bg-red text-white">
              <h2>Second Panel</h2>
              <p>This is your second panel</p>
            </div>
            <div className="carousel-item bg-red text-white">
              <h2>Third Panel</h2>
              <p>This is your third panel</p>
            </div>
            <div className="carousel-item bg-red text-white">
              <h2>Fourth Panel</h2>
              <p>This is your fourth panel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
