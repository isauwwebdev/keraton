import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const topY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-125%", "150%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-red text-8xl md:text-9xl relative z-30 text-center"
      >
        Keraton
        <br />
        2024
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/KERATON_Mobile.png')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: topY,
        }}
      />

      <motion.div
        className="absolute inset-0 z-50"
        style={{
          backgroundImage: "url('/images/bottom-transparent.png')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
