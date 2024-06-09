import React from "react";
import Carousel from "./Carousel";

const Banner = () => {
  const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <section className="text-gray-600">
      <div className="lg:flex">
        <nav className="lg:w-1/5" aria-label="Category Menu">
          <ul className="py-1 space-y-1">
            {categories.map((category, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {category}
                </a>
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
