import React from "react";
import SectionHeader from "../others/SectionHeader";
import Countdown from "../others/Countdown";
import Products from "./Products";

const FlashSales = () => {
  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-4 mb-5 p-5">
        <SectionHeader category="Today's" title="Flash Sales" />
        <Countdown />
      </div>
      <Products />
      <div className="text-center mb-12 mt-5">
        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-[10px] rounded">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default FlashSales;
