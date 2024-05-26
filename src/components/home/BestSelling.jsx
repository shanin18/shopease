import React from "react";
import SectionHeader from "../others/SectionHeader";
import Products from "./Products";

const BestSelling = ({ data }) => {
  return (
    <section>
      <div className="flex flex-wrap items-end justify-between mb-8 gap-4 p-5 md:p-0">
        <SectionHeader category="This Month" title="Best Selling Products" />
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-2 sm:py-[10px] rounded text-sm sm:text-base">
          View All
        </button>
      </div>
      <Products data={data} />
    </section>
  );
};

export default BestSelling;
