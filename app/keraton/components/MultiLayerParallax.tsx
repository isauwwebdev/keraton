import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const topY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-125%", "50%"]);
  const keratonX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]); // Move "Keraton" left
  const yearX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); // Move "2025" right

  return (
    <div
      ref={ref}
      className="w-full h-[120vh] overflow-hidden relative grid place-items-center"
    >
      {/* text part */}
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-red text-8xl md:text-9xl relative z-30 text-center flex flex-col items-center" // Added flex for alignment
      >
        <motion.span style={{ x: keratonX, display: "inline-block" }}>
          Keraton
        </motion.span>{" "}
        {/* Apply X transform */}
        <motion.span style={{ x: yearX, display: "inline-block" }}>
          2025
        </motion.span>{" "}
        {/* Apply X transform */}
      </motion.h1>

      {/* text part */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/keratonBGNEW.png')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: topY,
        }}
      />
      {/* bottom part */}
      <motion.div
        className="absolute inset-0 z-50 mt-2"
        style={{
          backgroundImage: "url('/images/bottom-transparent.png')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
