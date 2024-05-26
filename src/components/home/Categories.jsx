import React from "react";
import CameraSVG from "../../svgs/CameraSVG";
import ComputerSVG from "../../svgs/ComputerSVG";
import SmartWatchSVG from "../../svgs/SmartWatchSVG";
import CellphoneSVG from "../../svgs/CellphoneSVG";
import HeadphoneSVG from "../../svgs/HeadphoneSVG";
import GamepadSVG from "../../svgs/GamepadSVG";
import SectionHeader from "../others/SectionHeader";

const Categories = () => {
  const categories = [
    { name: "Phones", icon: <CellphoneSVG /> },
    { name: "Computers", icon: <ComputerSVG /> },
    { name: "SmartWatch", icon: <SmartWatchSVG /> },
    { name: "Camera", icon: <CameraSVG /> },
    { name: "HeadPhones", icon: <HeadphoneSVG /> },
    { name: "Gaming", icon: <GamepadSVG /> },
  ];

  return (
    <section className="p-5">
      <SectionHeader category="Categories" title="Browse By Category" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 mt-5">
        {categories?.map((category) => (
          <div
            key={category.name}
            className="border rounded flex flex-col items-center justify-center p-4 hover:bg-red-500 hover:text-white duration-200"
          >
            <div className="">{category.icon}</div>
            <p className="sm:text-lg font-semibold">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
