import Ratings from "../others/Ratings";
import defaultImage from "../../assets/images/product/defaultImage.webp";
import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosInformationCircle } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";

const ProductCard = ({ data, handleDelete }) => {
  const [seeMore, setSeeMore] = useState(false);
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const location = useLocation().pathname.includes("all-products");
  const { _id, name, img, price, ratings, ratingsCount } = data;

  const handleAddToCart = () => {
    console.log("hello");
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex flex-col justify-between"
    >
      <div className="relative overflow-hidden">
        <img
          src={img || defaultImage}
          alt="product image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultImage;
          }}
        />

        <p className="px-3 py-1 bg-red-500 rounded text-xs text-white absolute top-1 left-1">
          -40%
        </p>
        {location ? (
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
          <div className="absolute top-1 right-1 space-y-2">
            <div className="bg-white rounded-full p-1 hover:bg-gray-100">
              <MdFavoriteBorder className="md:text-lg lg:text-xl cursor-pointer" />
            </div>
            <div className="bg-white rounded-full p-1 hover:bg-gray-100">
              <FaRegEye
                onClick={() => navigate(`/products/details/${_id}`)}
                className="md:text-lg lg:text-xl cursor-pointer"
              />
            </div>
          </div>
        )}

        <div>
          <p
            onClick={handleAddToCart}
            className={`text-white font-semibold bg-black text-center absolute w-full py-2 duration-200 cursor-pointer ${
              hover ? "bottom-0" : " -bottom-10"
            }`}
          >
            Add To Cart
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-5">
        {name?.length > 15 ? (
          <p className="font-medium">
            {seeMore ? name : name?.slice(0, 15)}{" "}
            <span onClick={() => setSeeMore(!seeMore)} className="text-sm">
              {!seeMore ? "..see more" : "...see less"}
            </span>
          </p>
        ) : (
          <p className="font-medium">{name}</p>
        )}

        <p className="font-medium text-red-500">${price}</p>
        <div className="flex items-center gap-1">
          <Ratings ratings={ratings} />
          <span className="text-xs font-semibold">({ratingsCount})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
