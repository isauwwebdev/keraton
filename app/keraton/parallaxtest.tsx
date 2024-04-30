"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const Parallax: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure that the ref is not null before using it
    if (parallaxRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // Use an optional chaining operator to safely access the children property
      tl.fromTo(
        parallaxRef.current?.children,
        { y: (i) => i * -30 }, // Each child moves at a different speed
        { y: 0, ease: "none" }
      );

      // Cleanup function to kill the timeline and its scrollTriggers
      return () => {
        tl.kill();
        ScrollTrigger.killAll();
      };
    }
  }, []);

  return (
    <div className="about-page">
      <div ref={parallaxRef} className="parallax-outer">
        <div className="parallax">
          <div className="parallax-layer" style={{ zIndex: 3 }}>
            {/* Replace with your image paths */}
            <Image
              src="/images/KERATONAbove.png"
              alt="Mountain 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="parallax-layer" style={{ zIndex: 2 }}>
            <Image
              src="/images/KERATONBelow.png"
              alt="Mountain 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Add other layers here */}
          <div className="parallax-layer" style={{ zIndex: 0 }}>
            {/* Include your content here */}
            <h1>TESTTTTT</h1>
          </div>
        </div>
      </div>

      <div className="about-content">
        {/* Your about content */}
        <h2>About</h2>
        <p>This is the about section content...</p>
      </div>
    </div>
  );
};

export default Parallax;
