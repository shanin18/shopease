import Banner from "../components/home/Banner";
import Banner2 from "../components/home/Banner2";
import BestSelling from "../components/home/BestSelling";
import Categories from "../components/home/Categories";
import FlashSales from "../components/home/FlashSales";
import NewArrival from "../components/home/NewArrival";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <div className="container mx-auto space-y-10 md:space-y-16">
      <Banner />
      <FlashSales />
      <hr />
      <Categories />
      <hr />
      <BestSelling />
      {/* <Banner2 /> */}
      {/* <NewArrival /> */}
      {/* <Services /> */}
    </div>
  );
};

export default Home;
