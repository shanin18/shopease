import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const BillingDetailsForm = ({ handleCoupon }) => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const couponCode = "shamim45102";

  const handleDisableButton = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setBtnDisabled(value !== couponCode);
  };

  return (
    <div className="w-full md:w-[500px]">
      <h3 className="text-xl font-semibold mb-4">Billing Details</h3>
      <form>
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
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
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
          <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
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
          <label htmlFor="address" className="leading-7 text-sm text-gray-600">
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
      </form>
      <div className="flex md:flex-nowrap flex-wrap pt-3 mb-8">
        <div className="relative w-full sm:w-64 sm:mr-4 mr-2 mb-4 sm:mb-0">
          <input
            onChange={handleDisableButton}
            type="text"
            placeholder="Coupon Code"
            id="coupon"
            name="coupon"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-sm"
          />
        </div>
        <button
          onClick={() => handleCoupon(true)}
          disabled={btnDisabled}
          className={`inline-flex text-white text-sm sm:text-base border-0 py-2 px-6 focus:outline-none rounded h-fit ${
            !btnDisabled ? "bg-red-500" : "bg-red-200"
          }`}
        >
          Apply Coupon
        </button>
      </div>
    </div>
  );
};

export default BillingDetailsForm;
