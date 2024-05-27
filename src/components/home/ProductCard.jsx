import { MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosInformationCircle } from "react-icons/io";
import Ratings from "../others/Ratings";

const ProductCard = ({ data, handleDelete }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const location = useLocation().pathname.includes("all-products");
  const { id, name, img, price, ratings, ratingsCount } = data;

  const handleAddToCart = () => {
    console.log("hello");
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => navigate(`/products/details/${id}`)}
    >
      <div className="relative overflow-hidden">
        <img src={img} alt="" />
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
                <Link to={`/dashboard/edit-products/${id}`}>Edit</Link>
              </li>
              <li>
                <button onClick={() => handleDelete(id)}>Delete</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="bg-white rounded-full p-1 absolute top-1 right-1">
            <MdFavoriteBorder className="text-xl cursor-pointer" />
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
        <p className="font-medium">{name}</p>
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
