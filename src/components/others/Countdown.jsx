import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate, color }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      {timeLeft ? (
        Object.keys(timeLeft).map((interval) => (
          <div className="flex flex-col" key={interval}>
            <p className="text-sm font-semibold" style={{ color: color }}>
              {interval.charAt(0).toUpperCase() + interval.slice(1)}
            </p>
            <span
              className="countdown font-bold text-3xl"
              style={{ color: color }}
            >
              {formatNumber(timeLeft[interval])}
            </span>
          </div>
        ))
      ) : (
        <span className="text-lg font-bold" style={{ color: color }}>
          No offer available
        </span>
      )}
    </div>
  );
};

export default Countdown;
