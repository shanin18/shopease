import React from "react";

const SectionHeader = ({ category, title }) => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-5">
        <div className="w-4 h-10 rounded bg-red-500"></div>
        <p className="text-red-500 sm:text-lg font-medium">{category}</p>
      </div>
      <h2 className="font-semibold text-2xl lg:text-3xl">{title}</h2>
    </div>
  );
};

export default SectionHeader;
