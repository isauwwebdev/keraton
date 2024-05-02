"use client";
import React, { useState, useEffect } from "react";

export default function Countdown() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Function to calculate countdown
    const calculateCountdown = () => {
      // Get current date and time
      const currentDate = new Date();

      // Set the target date (May 18th, 4:00 PM PDT)
      const targetDate = new Date("2024-05-18T16:00:00-07:00");

      // Calculate the difference in milliseconds
      const differenceMs = targetDate - currentDate;

      // Convert milliseconds to days, hours, minutes, and seconds
      const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (differenceMs % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((differenceMs % (1000 * 60)) / 1000);

      // Update the countdown state
      setCountdown({ days, hours, minutes, seconds });
    };

    // Call calculateCountdown once to set the initial countdown
    calculateCountdown();

    // Update countdown every second
    const interval = setInterval(calculateCountdown, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-10 lg:py-18 mx-auto">
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max mx-auto justify-center">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content text-2xl text-yellow animate-pulse">
          <span
            className="countdown sm:text-9xl text-4xl bg-gradient-to-r from-orange-300 to-white text-transparent 
                        bg-clip-text font-semibold"
          >
            {countdown.days}
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content text-2xl text-yellow animate-pulse">
          <span
            className="countdown  sm:text-9xl text-4xl bg-gradient-to-r from-orange-300 to-white text-transparent 
                        bg-clip-text font-semibold"
          >
            {countdown.hours}
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content text-2xl text-yellow animate-pulse">
          <span
            className="countdown sm:text-9xl text-4xl bg-gradient-to-r from-orange-300 to-white text-transparent 
                        bg-clip-text font-semibold"
          >
            {countdown.minutes}
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content text-2xl text-yellow animate-pulse">
          <span
            className="countdown sm:text-9xl text-4xl bg-gradient-to-r from-orange-300 to-white text-transparent 
                        bg-clip-text font-semibold"
          >
            {countdown.seconds}
          </span>
          sec
        </div>
      </div>
    </div>
  );
}
