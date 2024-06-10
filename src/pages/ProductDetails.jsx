import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Ratings from "../components/others/Ratings";
import { FaMinus, FaPlus } from "react-icons/fa6";
import LoadingSpinner from "../components/others/LoadingSpinner";
import useGetProductDetailsById from "../hooks/useGetProductDetailsById";
import useTitle from "../hooks/useTitle";

const ProductDetails = () => {
  const [productQuantity, setProductQuantity] = useState(1);
  const [size, setSize] = useState("l");
  const [color, setColor] = useState("black");
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
              className="flex flex-col mt-6 pt-5 border-t-2 mb-8 gap-5"
              bis_skin_checked="1"
            >
              <div className="flex" bis_skin_checked="1">
                <span className="mr-3">Colors: </span>
                <button
                  onClick={() => setColor("white")}
                  className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
                ></button>
                <button
                  onClick={() => setColor("black")}
                  className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"
                ></button>
                <button
                  onClick={() => setColor("indigo")}
                  className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"
                ></button>
              </div>
              <div className="flex items-center" bis_skin_checked="1">
                <span className="mr-3">Size: </span>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setSize("sm")}
                    className={`w-11 h-6 border btn hover:bg-red-500 hover:text-white ${
                      size === "sm"
                        ? "bg-red-500 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    SM
                  </button>
                  <button
                    onClick={() => setSize("m")}
                    className={`w-11 h-6 border btn hover:bg-red-500 hover:text-white ${
                      size === "m"
                        ? "bg-red-500 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    M
                  </button>
                  <button
                    onClick={() => setSize("l")}
                    className={`w-11 h-6 border btn hover:bg-red-500 hover:text-white ${
                      size === "l"
                        ? "bg-red-500 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    L
                  </button>
                  <button
                    onClick={() => setSize("xl")}
                    className={`w-11 h-6 border btn hover:bg-red-500 hover:text-white ${
                      size === "xl"
                        ? "bg-red-500 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    XL
                  </button>
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

              <button className="flex ml-auto btn text-white text-lg bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded">
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
