import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/home/ProductCard";

const AllProducts = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 h-screen overflow-y-scroll">
      {products?.map((product) => (
        <ProductCard key={product?.id} data={product} />
      ))}
    </section>
  );
};

export default AllProducts;
