import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Ratings from "../components/others/Ratings";
import { FaMinus, FaPlus } from "react-icons/fa6";
import LoadingSpinner from "../components/others/LoadingSpinner";
import useGetProductDetailsById from "../hooks/useGetProductDetailsById";
import useTitle from "../hooks/useTitle";

const ProductDetails = () => {
  const [productQuantity, setProductQuantity] = useState(1);
  useTitle("Details");
  const { id } = useParams();
  const { isLoading, error, data: product } = useGetProductDetailsById(id);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>An error occurred: {error.message}</p>;

  const { img, name, price, ratings, ratingsCount, stock, description } =
    product;

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto" bis_skin_checked="1">
        <div className="lg:w-4/5 mx-auto flex flex-wrap" bis_skin_checked="1">
          <img
            alt="product image"
            className="lg:w-1/2 w-full lg:h-auto h-80 object-cover object-center rounded"
            src={img}
            loading="lazy"
          />
          <div
            className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
            bis_skin_checked="1"
          >
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {name}
            </h1>
            <div className="flex mb-2" bis_skin_checked="1">
              <span className="flex items-center">
                <span className="mt-1">
                  <Ratings ratings={ratings} />
                </span>
                <span className="text-gray-600 ml-3">
                  ( {ratingsCount} Reviews )
                </span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                {stock > 0 ? (
                  <span className="text-green-500">In Stock</span>
                ) : (
                  <span className="text-red-500">Out Of Stock</span>
                )}
              </span>
            </div>
            <p className="title-font font-medium text-2xl text-gray-900 mb-5">
              ${price}
            </p>
            <p className="leading-relaxed">{description}</p>

            <div
              className="flex mt-6 items-center pt-5 border-t-2 border-gray-100 mb-5"
              bis_skin_checked="1"
            >
              <div className="flex" bis_skin_checked="1">
                <span className="mr-3">Colors: </span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center" bis_skin_checked="1">
                <span className="mr-3">Size</span>
                <div className="relative" bis_skin_checked="1">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex" bis_skin_checked="1">
              <div className="flex items-center">
                <button
                  onClick={() => setProductQuantity(productQuantity - 1 || 1)}
                  className="p-3 border btn hover:bg-red-500 hover:text-white"
                >
                  <FaMinus className="text-xl" />
                </button>
                <span className="py-3 px-6">
                  {productQuantity > 0 ? productQuantity : 1}
                </span>
                <button
                  onClick={() => setProductQuantity(productQuantity + 1 || 1)}
                  className="hover:bg-red-500 btn hover:text-white p-3"
                >
                  <FaPlus className="text-xl" />
                </button>
              </div>

              <button className="flex ml-auto btn text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
