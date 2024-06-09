import React from "react";
import SectionHeader from "../others/SectionHeader";
import Countdown from "../others/Countdown";
import Products from "./Products";

const FlashSales = ({ data }) => {
  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-4 mb-5 p-5 md:p-0">
        <SectionHeader category="Today's" title="Flash Sales" />
        <Countdown targetDate="2024-06-11T23:59:59" color="black" />
      </div>
      <Products data={data} />
      <div className="text-center mb-12 mt-8">
        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-[10px] rounded">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default FlashSales;
