import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/images/banner/phone.png";
import image2 from "../../assets/images/banner/watch.png";
import image3 from "../../assets/images/banner/headphone.png";
import image4 from "../../assets/images/banner/camera.png";
import image5 from "../../assets/images/banner/shoe.png";
import CarouselCard from "./CarouselCard";

const Carousel = () => {
  const items = [
    {
      name: "IPhone 14 Series",
      description:"Up to 10% off Voucher",
      image: image1,
    },
    {
      name: "Advanced Smartwatches",
      description:"Up to 20% off Voucher",
      image: image2,
    },
    {
      name: "Premium Headphones",
      description:"Up to 25% off Voucher",
      image: image3,
    },
    {
      name: "Pro Photography Gear",
      description:"Up to 15% off Voucher",
      image: image4,
    },
    {
      name: "Stylish Footwear",
      description:"Up to 30% off Voucher",
      image: image5,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {items.map((item) => (
        <CarouselCard key={item.description} item={item} />
      ))}
    </Slider>
  );
};

export default Carousel;
