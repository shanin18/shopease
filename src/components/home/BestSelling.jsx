import React from "react";
import SectionHeader from "../others/SectionHeader";
import Products from "./Products";
import LoadingSpinner2 from "../others/LoadingSpinner2";

const BestSelling = ({ data, isLoading, error }) => {
  return (
    <section>
      <div className="flex flex-wrap items-end justify-between mb-8 gap-4 p-5 md:p-0">
        <SectionHeader category="This Month" title="Best Selling Products" />
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

export default BestSelling;
