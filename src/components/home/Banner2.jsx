import React from "react";
import Countdown from "../others/Countdown";
import speakerImg from "../../assets/images/banner2/jblSpeaker.png";

const Banner2 = () => {
  return (
    <section className="bg-black py-10 p-5 md:p-7 lg:p-10 flex flex-col-reverse md:flex-row gap-8 justify-between items-center">
      <div className="space-y-8 flex flex-col items-center md:items-start">
        <h2 className="text-white font-semibold text-4xl lg:text-5xl leading-tight text-center md:text-left">
          Enhance Your <br /> Music Experience
        </h2>
        <Countdown targetDate="2024-08-30T23:59:59" color="white" />
        <button className="text-white bg-green-500 rounded px-7 py-2 w-fit">
          Buy Now
        </button>
      </div>
      <div className="flex justify-center">
        <img src={speakerImg} alt="jbl speaker" className="w-2/3 md:w-full" loading="lazy" />
      </div>
    </section>
  );
};

export default Banner2;
