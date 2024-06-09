import React from "react";
import LoadingSpinner from "../components/others/LoadingSpinner";
import ProductCard from "../components/home/ProductCard";
import useGetAllProducts from "../hooks/useGetAllProducts";

const Products = () => {
  const { isLoading, error, data: products } = useGetAllProducts();

  if (isLoading) return <LoadingSpinner />;

  return (
    <section>
      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10 p-5 md:p-0">
        {products?.map((product) => (
          <ProductCard key={product?._id} data={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
