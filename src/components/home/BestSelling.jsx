import React from "react";
import SectionHeader from "../others/SectionHeader";
import Products from "./Products";

const BestSelling = ({ data }) => {
  return (
    <section>
      <div className="flex flex-wrap items-end justify-between mb-8 gap-4 p-5 md:p-0">
        <SectionHeader category="This Month" title="Best Selling Products" />
      </div>
      <Products data={data} />
    </section>
  );
};

export default BestSelling;
