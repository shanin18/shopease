import React from "react";
import ProductCard from "../components/home/ProductCard";
import Swal from "sweetalert2";
import useGetAllProducts from "../hooks/useGetAllProducts";
import LoadingSpinner from "../components/others/LoadingSpinner";
import useDeleteProduct from "../hooks/useDeleteProduct";
import useTitle from "../hooks/useTitle";

const AllProducts = () => {
  useTitle("All Products")

  const { isLoading, data: products } = useGetAllProducts();
  const { mutate: deleteProduct } = useDeleteProduct();

  if (isLoading) return <LoadingSpinner />;

  // delete products
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
      }
    });
  };

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
