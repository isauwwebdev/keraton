"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Icon } from "./icons";

interface ParallaxProps {
  children: JSX.Element;
  baseVelocity: number;
}

// change velocity here
function ParallaxText({ children, baseVelocity = 5 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="bg-red overflow-hidden whitespace-nowrap flex flex-nowrap">
      <motion.div
        className="uppercase text-orange-200 font-bold text-5xl flex whitespace-nowrap"
        style={{ x }}
      >
        <span className="block mr-8 text-orange-200">{children} </span>
        <span className="block mr-8">{children} </span>
        <span className="block mr-8">{children} </span>
        <span className="block mr-8">{children} </span>
      </motion.div>
    </div>
  );
}

export default function Banner() {
  return (
    <section className="relative">
      <ParallaxText baseVelocity={-2}>
        <div className="flex flex-wrap justify-center">
          <div className="flex content-center mx-8 mt-2">
            <div className="flex-1 mx-auto  my-auto content-center">
              <h4 className="text-orange-200 font-bold text-center mx-auto sm:text-4xl text-2xl ">
                A2V
              </h4>
            </div>
            <div className="flex-initial mx-4 my-auto w-auto items-center">
              <Icon />
            </div>
            <div className="flex-initial mx-4 my-auto">
              <h4 className="text-yellow font-bold text-center w-auto sm:text-4xl text-2xl">
                ANDIN
              </h4>
            </div>
            <div className="flex-initial mx-4 my-auto w-auto items-right">
              <Icon />
            </div>
            <div className="flex-1 mx-4 my-auto content-center">
              <h4 className="text-orange-200 font-bold text-center mx-4 sm:text-4xl text-2xl">
                GEMA
              </h4>
            </div>
            <div className="flex-initial mx-4 my-auto items-center">
              <Icon />
            </div>
            <div className="flex-initial mx-4 my-auto content-center sm:text-4xl text-2xl">
              <h4 className="text-yellow font-bold text-center sm:text-4xl text-2xl">
                JC
              </h4>
            </div>
          </div>
        </div>
      </ParallaxText>
      <ParallaxText baseVelocity={-2}>
        <div className="flex flex-wrap justify-center">
          {/* second row performers */}
          <div className="flex content-center mx-8 mt-8 mb-10">
            <div className="flex-1 mx-auto">
              <h4 className="text-center text-yellow font-bold my-auto mx-4 sm:text-4xl text-2xl">
                MALIQ AND FRIENDS
              </h4>
            </div>
            <div className="flex-initial mx-4 my-auto w-auto items-right">
              <Icon />
            </div>
            <div className="flex-1 mx-4">
              <h4 className="text-center text-orange-200 font-bold my-auto mx-4 sm:text-4xl text-2xl">
                PRIZM
              </h4>
            </div>
            <div className="flex-initial mx-4 my-auto w-auto items-right">
              <Icon />
            </div>
            <div className="flex-1 mx-4">
              <h4 className="text-center text-yellow font-bold my-auto mx-4 sm:text-4xl text-2xl">
                VANESSA
              </h4>
            </div>
            <div className="flex-initial mx-4 my-auto w-auto items-right">
              <Icon />
            </div>
            <div className="flex-1 mx-4">
              <h4 className="text-center text-yellow font-bold my-auto mx-4 sm:text-4xl text-2xl">
                THE MAHENDRAS
              </h4>
            </div>
            <div className="flex-initial mx-4 my-auto w-auto items-right">
              <Icon />
            </div>
            <div className="flex-1 mx-4">
              <h4 className="text-center text-yellow font-bold my-auto mx-4 sm:text-4xl text-2xl">
                WEST OF EDEN
              </h4>
            </div>
            <div className="flex-initial mx-4 my-auto w-auto items-right">
              <Icon />
            </div>
          </div>
        </div>
      </ParallaxText>
    </section>
  );
}
