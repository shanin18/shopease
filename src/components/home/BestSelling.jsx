import React from "react";
import SectionHeader from "../others/SectionHeader";
import Products from "./Products";

const BestSelling = () => {
  return (
    <section>
      <div className="flex flex-wrap items-end justify-between mb-8">
        <SectionHeader category="This Month" title="Best Selling Products" />
        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-[10px] rounded">
          View All
        </button>
      </div>
      <Products />
    </section>
  );
};

export default BestSelling;
