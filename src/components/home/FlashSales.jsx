import React from "react";
import SectionHeader from "../others/SectionHeader";
import Countdown from "../others/Countdown";
import Products from "./Products";
import LoadingSpinner2 from "../others/LoadingSpinner2";

const FlashSales = ({ data, isLoading, error }) => {
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
      {error && (
        <div className="py-10">
          <p className="text-lg font-medium text-center">
            Something went wrong! please hard refresh the page.
          </p>
        </div>
      )}
    </section>
  );
};

export default FlashSales;
