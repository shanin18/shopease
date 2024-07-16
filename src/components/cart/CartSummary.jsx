import React from "react";
import { useCart } from "../../providers/CartProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const CartSummary = () => {
  const { cart } = useCart();
  const { user } = useAuth();
  const filteredCart = cart?.filter((item) => item?.email === user?.email);

  const navigate = useNavigate();

  const handleCart = () => {
    if (filteredCart?.length === 0) {
      Swal.fire({
        title: "please add some item!",
        icon: "error",
      });
      return;
    } else {
      navigate("/order-summary");
    }
  };

  // Calculate subtotal
  const subtotal = filteredCart?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-8 p-4 border-t">
      <h3 className="text-xl font-semibold">Cart Summary</h3>
      <div className="mt-4">
        <p className="flex justify-between font-medium text-lg">
          <span>Subtotal:</span>
          <span>${subtotal}</span>
        </p>
        {/* Additional fields for taxes, discounts, etc. can be added here */}
        <button
          onClick={handleCart}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
