import { AiFillStar } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import Rating from "react-rating";
import image from "../../assets/images/banner/watch.png";
import { useState } from "react";

const ProductCard = ({data}) => {
  const [hover, setHover] = useState(false);
  const {name, img, price, ratings, ratingsCount} = data;

  const handleAddToCart = () => {
    console.log("hello");
  };

  return (
    <div className=""
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative overflow-hidden">
        <img src={img} alt="" />
        <p className="px-3 py-1 bg-red-500 rounded text-xs text-white absolute top-1 left-1">
          -40%
        </p>

        <div className="bg-white rounded-full p-1 absolute top-1 right-1">
          <MdFavoriteBorder className="text-xl cursor-pointer" />
        </div>
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
          <Rating
            readonly
            initialRating={ratings}
            emptySymbol={<AiFillStar className="icon" color="#ddd" />}
            fullSymbol={<AiFillStar className="icon" color="#f8c41a" />}
          />
          <span className="text-xs font-semibold">({ratingsCount})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
