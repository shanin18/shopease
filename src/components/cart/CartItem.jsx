import React, { useState } from "react";
import { useCart } from "../../providers/CartProvider";
import { ImBin } from "react-icons/im";

const CartItem = ({ item }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { removeFromCart, addToCart } = useCart();

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleRemoveClick = () => {
    removeFromCart(item._id); // Assuming item._id is used for identification
  };

  const handleIncreaseQuantity = () => {
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    addToCart(updatedItem); // Update existing item in the cart
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      addToCart(updatedItem); // Update existing item in the cart
    }
  };

  return (
    <div className="sm:flex items-center gap-4 space-y-4 justify-between shadow-sm p-4">
      <div className="flex items-center gap-4">
        <div className="w-14">
          {isLoading && <div className="w-14 h-14 skeleton"></div>}
          <img
            alt="product image"
            src={item?.img}
            loading="lazy"
            onLoad={handleImageLoad}
          />
        </div>
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-600 font-medium">
            Price: ${item.price * item.quantity}
          </p>
        </div>
      </div>

      <div className="flex gap-4 ">
        <div className="flex items-center space-x-2">
          <button
            className="border rounded-md px-3 py-1"
            onClick={handleDecreaseQuantity}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className="border rounded-md px-3 py-1"
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
        </div>
        <button
          className="text-red-500 hover:text-red-700 text-xl"
          onClick={handleRemoveClick}
        >
          <ImBin />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
