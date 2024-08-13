import React from "react";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
import { useCart } from "../../providers/CartProvider";

const Banner = () => {
  const { setFilteredText } = useCart("");

  const categories = [
    { name: "Men’s Shoes", category: "shoes" },
    { name: "Men’s Pants", category: "pants" },
    { name: "Backpacks", category: "backpack" },
    { name: "Headphones", category: "headphone" },
    { name: "Water Bottles", category: "bottle" },
    { name: "Caps", category: "hat" },
  ];

  return (
    <section className="text-gray-600">
      <div className="lg:flex">
        <nav className="lg:w-1/5" aria-label="Category Menu">
          <ul className="py-1 space-y-1">
            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  onClick={() => setFilteredText(category?.category)}
                  to="/products"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {category?.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:w-4/5 pr-0 text-white">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Banner;
