import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    className:"mx-2 md:mx-0",
    responsive: [
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Slider {...settings}>
        {products.map((item, index) => (
          <div key={index} className="px-3">
            <ProductCard data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Products;
