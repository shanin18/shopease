import React from "react";

const PaymentMethod = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
      <div className="flex gap-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value="cash"
            checked={paymentMethod === "cash"}
            onChange={() => setPaymentMethod("cash")}
            className="mr-2"
          />
          Cash on Delivery
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
            className="mr-2"
          />
          Card Payment
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;
