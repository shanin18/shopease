import React from "react"; // Adjust the path as per your project structure
import { useCart } from "../providers/CartProvider";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import useAuth from "../hooks/useAuth";

const CartPage = () => {
  const { cart } = useCart();
  const { user } = useAuth();
  const filteredCart = cart?.filter((item) => item?.email === user?.email);

  return (
    <div className="container mx-auto mt-8 px-5 xl:px-0">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      <div className="grid grid-cols-1 gap-4">
        {filteredCart?.map((item, idx) => (
          <CartItem key={idx} item={item} />
        ))}
      </div>
      <CartSummary />
    </div>
  );
};

export default CartPage;
