import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useCart } from "../../providers/CartProvider";

const PaymentDetailsForm = ({newOrder}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const { removeAllCartItems } = useCart();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      const { id } = paymentMethod;
      console.log(newOrder);

      // post paymentMethod id to /payment endpoint
      Swal.fire({
        title: "Payment successful",
        icon: "success",
        showCancelButton: false,
      });
      setLoading(false);
      removeAllCartItems();
      // navigate("/");
    } catch (error) {
      Swal.fire({
        title: error?.message,
        icon: "error",
        showConfirmButton: true,
      });
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      action="#"
      method="POST"
    >
      <div>
        <label
          htmlFor="cardNumber"
          className="block text-sm font-medium leading-6 text-gray-900 mb-4"
        >
          Card Number
        </label>
        <div className="mt-2">
          <CardElement
            id="cardNumber"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={!stripe}
          className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Processing..." : "Place Order"}
        </button>
      </div>
    </form>
  );
};

export default PaymentDetailsForm;
