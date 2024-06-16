import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "./providers/AuthProvider.jsx";
import { CartProvider } from "./providers/CartProvider.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const queryClient = new QueryClient();

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </QueryClientProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
