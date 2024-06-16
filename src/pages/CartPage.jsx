import React from "react"; // Adjust the path as per your project structure
import { useCart } from "../providers/CartProvider";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div className="container mx-auto mt-8 px-5 xl:px-0">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      <div className="grid grid-cols-1 gap-4">
        {cart.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </div>
      <CartSummary />
    </div>
  );
};

export default CartPage;
