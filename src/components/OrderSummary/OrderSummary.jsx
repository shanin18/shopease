import React from "react";

const OrderSummary = ({ subTotal, discount, total, tax }) => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between gap-3 py-3 border-b">
        <p>Subtotal:</p>
        <p>${subTotal.toFixed(2)}</p>
      </div>
      <div className="flex items-center justify-between gap-3 py-3 border-b">
        <p>Tax:</p>
        <p>${tax.toFixed(2)}</p>
      </div>
      <div className="flex items-center justify-between gap-3 py-3 border-b">
        <p>Discount:</p>
        <p>{discount}%</p>
      </div>
      <div className="flex items-center justify-between gap-3 py-3 border-b">
        <p>Total:</p>
        <p>${(total + tax).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
