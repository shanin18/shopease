import React from "react";
import SectionHeader from "../others/SectionHeader";
import image1 from "../../assets/images/newArrivals/playstation.png";
import image2 from "../../assets/images/newArrivals/woman.png";
import image3 from "../../assets/images/newArrivals/speaker.png";
import image4 from "../../assets/images/newArrivals/perfume.png";

const NewArrival = () => {
  return (
    <section className="p-5 md:p-0">
      <SectionHeader category="featured" title="New Arrival" />
      <div className="text-gray-600 body-font mt-8 flex items-stretch space-x-3 md:space-x-5">
        <div className="flex justify-center items-center w-1/2 bg-black">
          <img src={image1} alt="image" className="object-contain" />
        </div>
        <div className="w-1/2 space-y-3 md:space-y-5 flex flex-col">
          <div className="w-full flex justify-center items-center bg-black flex-1">
            <img src={image2} alt="image" className="object-contain" />
          </div>
          <div className="flex items-stretch space-x-3 md:space-x-5 flex-1">
            <div className="bg-black w-1/2 flex justify-center items-center pt-5">
              <img src={image3} alt="image" className="object-contain" />
            </div>
            <div className="bg-black w-1/2 flex justify-center items-center">
              <img src={image4} alt="image" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
