import React, { createContext, useContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [filteredText, setFilteredText] = useState(() => {
    const storedText = localStorage.getItem("filteredText");
    return storedText ? storedText : "";
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("filteredText", filteredText);
  }, [cart, filteredText]);

  const addToCart = (item) => {
    // Check if item already exists in the cart
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem._id === item._id
    );

    if (existingItemIndex !== -1) {
      // Item exists, update quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: item.quantity,
      };
      setCart(updatedCart);
    } else {
      // Item doesn't exist, add it to the cart
      setCart((prevCart) => [...prevCart, item]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== itemId));
  };

  const removeAllCartItems = async () => {
    await localStorage.removeItem("cart");
    await setCart([]);
  };

  const cartInfo = {
    cart,
    addToCart,
    filteredText,
    setFilteredText,
    removeFromCart,
    removeAllCartItems,
  };

  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};
