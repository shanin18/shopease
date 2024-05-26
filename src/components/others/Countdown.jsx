import React from "react";

const Countdown = () => {
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col">
        <p className="text-sm font-semibold">Days</p>
        <span className="countdown font-bold text-3xl">
          <span style={{ "--value": 15 }}></span>
        </span>
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-semibold">Hours</p>
        <span className="countdown font-bold text-3xl">
          <span style={{ "--value": 10 }}></span>
        </span>
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-semibold">Minutes</p>
        <span className="countdown font-bold text-3xl">
          <span style={{ "--value": 24 }}></span>
        </span>
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-semibold">Seconds</p>
        <span className="countdown font-bold text-3xl">
          <span style={{ "--value": 33 }}></span>
        </span>
      </div>
    </div>
  );
};

export default Countdown;
