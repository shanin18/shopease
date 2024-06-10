import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [searchText, setSearchText] = useState(() => {
    const storedText = localStorage.getItem("search");
    return storedText ? JSON.parse(storedText) : "";
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("search", JSON.stringify(searchText));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const addSearchText = (text) => {
    setSearchText(text);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, searchText, addSearchText }}
    >
      {children}
    </CartContext.Provider>
  );
};
