/* eslint-disable react/no-unknown-property */

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
      <div className="lg:flex" bis_skin_checked="1">
        <div className="lg:w-1/5" bis_skin_checked="1">
          <div className="" role="menu" aria-orientation="vertical">
            <div className="py-1" role="none">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-4/5 pr-0 text-white" bis_skin_checked="1">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Banner;
