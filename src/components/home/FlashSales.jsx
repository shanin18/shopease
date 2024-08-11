import React from "react";
import SectionHeader from "../others/SectionHeader";
import Countdown from "../others/Countdown";
import Products from "./Products";
import LoadingSpinner2 from "../others/LoadingSpinner2";

const FlashSales = ({ data, isLoading }) => {

  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-4 mb-5 p-5 md:p-0">
        <SectionHeader category="Today's" title="Flash Sales" />
        <Countdown targetDate="2024-09-28T23:59:59" color="black" />
      </div>
      {isLoading ? (
        <div className="py-10">
          <LoadingSpinner2 />
        </div>
      ) : (
        <Products data={data} />
      )}
    </section>
  );
};

export default FlashSales;
