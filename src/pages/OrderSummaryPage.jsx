import React from "react";
import OrderDetails from "../components/OrderSummary/OrderDetails";
import { useCart } from "../providers/CartProvider";
import useAuth from "../hooks/useAuth";

const OrderSummaryPage = () => {
  const { cart } = useCart();
  const { user } = useAuth();
  const filteredCart = cart?.filter(item => item?.email === user?.email)

  // Calculate order details based on the items in the cart
  const calculateOrderDetails = () => {
    const subtotal = filteredCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    return {
      items: filteredCart,
      subtotal: subtotal.toFixed(2),
      tax: parseFloat(tax.toFixed(2)),
      total: total.toFixed(2),
      shippingMethod: "Standard Shipping",
    };
  };

  // Function to generate unique order number
  const generateOrderNumber = () => {
    const timestamp = Date.now().toString();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${timestamp}-${randomNumber}`;
  };

  // Function to generate unique tracking number
  const generateTrackingNumber = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let trackingNumber = "";
    for (let i = 0; i < 10; i++) {
      trackingNumber += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return `${trackingNumber}`;
  };

  const order = {
    orderNumber: generateOrderNumber(),
    orderDate: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    orderStatus: "Processing",
    customerName: user?.displayName,
    estimatedDelivery: new Date(
      Date.now() + 5 * 24 * 60 * 60 * 1000
    ).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }), // Estimated delivery in 5 days
    trackingNumber: generateTrackingNumber(),
    ...calculateOrderDetails(),
  };

  return (
    <section className="container mx-auto my-12 px-5 xl:px-0">
      <OrderDetails order={order} />
    </section>
  );
};

export default OrderSummaryPage;
