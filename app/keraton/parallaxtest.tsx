"use client";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

const ParallaxPage: React.FC = () => {
  return (
    <Parallax
      pages={2}
      style={{ top: "0", left: "0", right: "0", bottom: "0" }}
    >
      <ParallaxLayer offset={0} speed={0.5}>
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <Image
            src="/images/KERATONAbove.png"
            alt="Above Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.2} speed={0.8}>
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <Image
            src="/images/KERATONBelow.png"
            alt="Below Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1}>
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Your Content Here</h1>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ParallaxPage;
