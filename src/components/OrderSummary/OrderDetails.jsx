import React, { useEffect, useState } from "react";
import PaymentDetailsForm from "../forms/PaymentDetailsForm";
import useAuth from "../../hooks/useAuth";
import { useCart } from "../../providers/CartProvider";

const OrderDetails = ({ order }) => {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [discount, setDiscount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const { cart } = useCart();
  const couponCode = "Shanin18xyz";

  const newOrder = {
    name,
    email,
    phone,
    city,
    address,
    total,
    orderNumber: order?.orderNumber,
    orderDate: order?.orderDate,
    orderStatus: order?.orderStatus,
    shippingMethod: order?.shippingMethod,
    estimatedDelivery: order?.estimatedDelivery,
    trackingNumber: order?.trackingNumber,
    products: cart?.map((item) => ({
      productId: item?._id,
      name: item?.name,
      quantity: item?.quantity,
      totalPrice: item?.price * item?.quantity,
    })),
  };

  useEffect(() => {
    const subTotalAmount = cart?.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubTotal(subTotalAmount);
    setTotal(subTotalAmount);
  }, [cart]);

  const handleCoupon = (e) => {
    const value = e.target.value;
    setBtnDisabled(value !== couponCode);
  };

  const handleSetDiscountAmount = () => {
    if (!btnDisabled) {
      setDiscount(10);
      const discountedTotal = subTotal - (subTotal * 10) / 100;
      setTotal(discountedTotal);
    } else {
      setDiscount(0);
    }
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !city || !address) {
      alert(
        "Please provide all the billing details before proceeding to payment."
      );
    } else {
      // Code to proceed with payment
    }
  };

  return (
    <div>
      <div className="md:flex justify-center gap-32">
        <div className="w-full md:w-[500px]">
          <h3 className="text-xl font-semibold mb-4">Billing Details</h3>
          <form onSubmit={handleProceedToPayment}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-sm"
              />
            </div>
            <div className="w-full relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-sm"
              />
            </div>
            <div className="w-full relative mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-sm"
              />
            </div>
            <div className="w-full relative mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-sm"
              />
            </div>
            <div className="w-full relative mb-4">
              <label
                htmlFor="address"
                className="leading-7 text-sm text-gray-600"
              >
                Street Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-sm"
              />
            </div>
            <div className="flex md:flex-nowrap flex-wrap">
              <div className="relative w-full sm:w-64 sm:mr-4 mr-2 mb-4 sm:mb-0">
                <input
                  onChange={handleCoupon}
                  type="text"
                  placeholder="Coupon Code"
                  id="coupon"
                  name="coupon"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-sm"
                />
              </div>
              <button
                onClick={handleSetDiscountAmount}
                disabled={btnDisabled}
                className={`inline-flex text-white text-sm sm:text-base border-0 py-2 px-6 focus:outline-none rounded h-fit ${
                  !btnDisabled ? "bg-red-500" : "bg-red-200"
                }`}
              >
                Apply Coupon
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-[500px]">
          <div>
            <h3 className="text-xl font-semibold mb-4">Order Items</h3>
            <div className="space-y-5 h-[20vh] overflow-y-auto p-4 border rounded-md">
              {order?.items?.map((item) => (
                <div
                  key={item?._id}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14">
                      <img alt={item?.name} src={item?.img} loading="lazy" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600 font-medium">
                        Price: ${item.price}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Quantity: {item.quantity}</h3>
                    <p className="text-sm text-gray-600 font-medium">
                      Total: ${item.price * item?.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between gap-3 py-3 border-b">
              <p>Subtotal:</p>
              <p>${subTotal.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between gap-3 py-3 border-b">
              <p>Tax:</p>
              <p>${order?.tax.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between gap-3 py-3 border-b">
              <p>Discount:</p>
              <p>{discount}%</p>
            </div>
            <div className="flex items-center justify-between gap-3 py-3 border-b">
              <p>Total:</p>
              <p>${(total + order?.tax).toFixed(2)}</p>
            </div>
          </div>

          <div className="mt-4">
            <PaymentDetailsForm newOrder={newOrder} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
