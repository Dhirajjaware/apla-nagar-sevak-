import React, { useState, useEffect } from "react";
import { Calendar } from "./icons";

const Countdown = () => {
  const electionDate = "2025-12-15";
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(electionDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [electionDate]);

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-r from-red-600 to-orange-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Calendar />
          <h3 className="text-xl sm:text-3xl font-black">निवडणूकीपर्यंत</h3>
        </div>
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto">
          {[
            { label: "दिवस", value: timeLeft.days },
            { label: "तास", value: timeLeft.hours },
            { label: "मिनिटे", value: timeLeft.minutes },
            { label: "सेकंद", value: timeLeft.seconds },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-3 sm:p-6"
            >
              <div className="text-3xl sm:text-5xl font-black mb-1 sm:mb-2">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold opacity-90">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
