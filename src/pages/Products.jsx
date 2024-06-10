import React from "react";
import LoadingSpinner from "../components/others/LoadingSpinner";
import ProductCard from "../components/home/ProductCard";
import useGetAllProducts from "../hooks/useGetAllProducts";
import useTitle from "../hooks/useTitle";
import { useCart } from "../AuthProvider/CartProvider";

const Products = () => {
  const { searchText } = useCart();
  useTitle("Products");
  const { isLoading, error, data: products } = useGetAllProducts();

  if (isLoading) return <LoadingSpinner />;

  const filteredData = products?.filter((item) =>
    item?.name?.toLowerCase().includes(searchText)
  );

  return (
    <section>
      {filteredData?.length === 0 && (
        <p className="text-lg text-center mt-8">No Products Found</p>
      )}
      <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10 p-5 md:px-0">
        {filteredData?.map((product) => (
          <ProductCard key={product?._id} data={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
