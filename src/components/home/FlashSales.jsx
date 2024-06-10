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
    </section>
  );
};

export default FlashSales;
