import React, { useState } from "react";
import { useCart } from "../AuthProvider/CartProvider";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

const OrderSummery = () => {
  const [isLoading, setIsLoading] = useState(true);
  useTitle("Order Summery");
  const { cart } = useCart();

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const [quantities, setQuantities] = useState({});
  const handleQuantityChange = (itemId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max(1, quantity),
    }));
  };

  return (
    <section className="container mx-auto p-5 lg:px-5">
      <h1 className="text-2xl lg:text-3xl font-semibold text-center mb-12">
        Order Summery
      </h1>
      <div>
        {cart.length === 0 && <p>No Order found</p>}
        <div className="mb-8">
          <table className="table">
            <tbody className="space-y-5">
              {cart?.map((item) => (
                <tr
                  key={item._id}
                  className="shadow-lg rounded-md flex  items-center justify-between gap-5"
                >
                  {isLoading && (
                    <td>
                      <div className="w-14 h-14 rounded skeleton"></div>
                    </td>
                  )}
                  <td>
                    <div className="w-14 rounded overflow-hidden">
                      <img
                        src={item?.img}
                        onLoad={handleImageLoad}
                        alt="product image"
                        loading="lazy"
                        className="w-full"
                      />
                    </div>
                  </td>
                  <td>
                    <p>{item.name}</p>
                  </td>
                  <td className="flex items-center">
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item._id,
                          (quantities[item._id] || 1) - 1
                        )
                      }
                      className="btn btn-sm hover:bg-red-500 hover:text-white"
                    >
                      <FaMinus />
                    </button>
                    <span className="py-3 px-6">
                      {quantities[item._id] || 1}
                    </span>
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item._id,
                          (quantities[item._id] || 1) + 1
                        )
                      }
                      className="btn btn-sm hover:bg-red-500 hover:text-white"
                    >
                      <FaPlus />
                    </button>
                  </td>
                  <td>
                    <p>${item.price}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-end mb-10">
        <Link
          to="/checkout"
          className="btn text-base px-7 bg-red-500 hover:bg-red-500 text-white"
        >
          Checkout
        </Link>
      </div>
    </section>
  );
};

export default OrderSummery;
