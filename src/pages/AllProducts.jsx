import React, { useEffect, useState } from "react";
import ProductCard from "../components/home/ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    const leftProducts = products?.filter((product) => product.id !== id);
    setProducts(leftProducts);
  };

  if (!products) {
    return <p>loading...</p>;
  }

  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 h-screen overflow-y-scroll">
      {products?.map((product) => (
        <ProductCard
          key={product?.id}
          data={product}
          handleDelete={handleDelete}
        />
      ))}
    </section>
  );
};

export default AllProducts;
