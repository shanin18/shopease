import React, { useEffect, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Ratings from "../others/Ratings";
import defaultImage from "../../assets/images/product/defaultImage.webp";
import { useCart } from "../../AuthProvider/CartProvider";

const ProductCard = React.memo(({ data, handleDelete }) => {
  const [seeMore, setSeeMore] = useState(false);
  const [hover, setHover] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();

  const isAllProductsPage = useLocation().pathname.includes("all-products");
  const { _id, name, img, price, ratings, ratingsCount, discount } = data;

  const handleAddToCart = () => {
    const item = { _id, name, img, price, discount };
    const itemExists = cart.some((cartItem) => cartItem._id === item._id);
    if (!itemExists) {
      addToCart(item);
    } else {
      alert("Item already in the cart");
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = defaultImage;
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex flex-col justify-between"
    >
      <div className="relative overflow-hidden">
        {isLoading && <div className="h-60 w-full skeleton"></div>}
        <img
          src={img || defaultImage}
          alt={name || "Product Image"}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className="w-full"
          loading="lazy"
        />
        {discount > 0 && (
          <p className="px-3 py-1 bg-red-500 rounded text-xs text-white absolute top-1 left-1">
            -{discount}%
          </p>
        )}

        {isAllProductsPage ? (
          <div className="rounded-full p-1 absolute top-1 right-1 dropdown dropdown-end">
            <div className="p-1" tabIndex={0} role="button">
              <IoIosInformationCircle className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={`/dashboard/edit-products/${_id}`}>Edit</Link>
              </li>
              <li>
                <button onClick={() => handleDelete(_id)}>Delete</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="absolute top-1 right-1 space-x-2">
            <button
              className="bg-white rounded-full p-1 hover:bg-gray-100"
              aria-label="Add to Favorites"
            >
              <MdFavoriteBorder className="md:text-lg lg:text-xl cursor-pointer" />
            </button>
            <button
              className="bg-white rounded-full p-1 hover:bg-gray-100"
              onClick={() => navigate(`/products/details/${_id}`)}
              aria-label="View Details"
            >
              <FaRegEye className="md:text-lg lg:text-xl cursor-pointer" />
            </button>
          </div>
        )}

        {!isAllProductsPage && (
          <button
            onClick={handleAddToCart}
            className={`text-white font-semibold bg-black text-center absolute w-full py-2 duration-200 cursor-pointer ${
              hover ? "bottom-0" : "-bottom-10"
            }`}
          >
            Add To Cart
          </button>
        )}
      </div>

      <div className="flex flex-col gap-2 mt-5">
        {name?.length > 15 ? (
          <p className="font-medium">
            {seeMore ? name : name?.slice(0, 15)}{" "}
            <button
              onClick={() => setSeeMore(!seeMore)}
              className="text-sm text-blue-500"
              aria-label={seeMore ? "See less" : "See more"}
            >
              {!seeMore ? "..see more" : "...see less"}
            </button>
          </p>
        ) : (
          <p className="font-medium">{name}</p>
        )}

        <p className="font-medium text-red-500">${price}</p>
        <div className="flex items-center gap-1">
          <Ratings ratings={ratings} />
          <span className="text-xs font-semibold mb-1.5">({ratingsCount})</span>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
