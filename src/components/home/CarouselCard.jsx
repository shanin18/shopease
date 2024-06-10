import { GoArrowRight } from "react-icons/go";

const CarouselCard = ({ item }) => {
  const { name, description, image } = item;
  return (
    <div className="bg-black flex flex-col-reverse sm:flex-row sm:items-center justify-between p-5">
      <div className="lg:p-5">
        <h3 className="md:text-lg lg:text-xl mb-3">{name}</h3>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-5">{description}</p>
        <button className=" flex items-center gap-3">
          <span className="border-b lg:text-lg">Shop Now</span>
          <GoArrowRight className="md:text-xl lg:text-2xl" />
        </button>
      </div>
      <div className="">
        <img src={image} alt="phone" loading="lazy" />
      </div>
    </div>
  );
};

export default CarouselCard;
