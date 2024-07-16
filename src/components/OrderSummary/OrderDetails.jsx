import React, { useEffect, useState } from "react";
import PaymentDetailsForm from "../forms/PaymentDetailsForm";
import useAuth from "../../hooks/useAuth";
import { useCart } from "../../providers/CartProvider";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import OrderItems from "./OrderItems";
import BillingDetailsForm from "../forms/BillingDetailsForm";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const OrderDetails = ({ order }) => {
  const { user } = useAuth();
  const { cart, removeAllCartItems } = useCart();
  const filteredCart = cart?.filter((item) => item?.email === user?.email);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [newOrder, setNewOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const subTotalAmount = filteredCart?.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubTotal(subTotalAmount);
    setTotal(subTotalAmount);
  }, [filteredCart]);

  const handleCoupon = (valid) => {
    if (valid) {
      setDiscount(10);
      const totalAfterDiscount = subTotal - (subTotal * discount) / 100;
      setTotal(totalAfterDiscount);
    } else {
      setDiscount(0);
    }
  };

  useEffect(() => {
    const orderDetails = {
      name: user?.displayName,
      email: user?.email,
      phone: "",
      city: "",
      address: "",
      total,
      orderNumber: order?.orderNumber,
      orderDate: order?.orderDate,
      orderStatus: order?.orderStatus,
      shippingMethod: order?.shippingMethod,
      estimatedDelivery: order?.estimatedDelivery,
      trackingNumber: order?.trackingNumber,
      products: filteredCart?.map((item) => ({
        productId: item?._id,
        name: item?.name,
        quantity: item?.quantity,
        totalPrice: item?.price * item?.quantity,
      })),
      paymentMethod,
    };
    setNewOrder(orderDetails);
  }, [user, cart, total, order, paymentMethod]);

  const handlePlaceOrder = () => {
    removeAllCartItems();
    Swal.fire({
      title: "Payment Successful!",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  return (
    <div>
      <div className="md:flex justify-center gap-32">
        <BillingDetailsForm handleCoupon={handleCoupon} />
        <div className="w-full md:w-[500px]">
          <OrderItems items={order?.items} />
          <OrderSummary
            subTotal={subTotal}
            discount={discount}
            total={total}
            tax={order?.tax}
          />
          <PaymentMethod
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
          {paymentMethod === "card" && (
            <PaymentDetailsForm newOrder={newOrder} />
          )}
          {paymentMethod === "cash" && (
            <div className="mt-4">
              <button
                onClick={handlePlaceOrder}
                className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
