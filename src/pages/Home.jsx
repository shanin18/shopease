import { useLoaderData } from "react-router-dom";
import Banner from "../components/home/Banner";
import Banner2 from "../components/home/Banner2";
import BestSelling from "../components/home/BestSelling";
import Categories from "../components/home/Categories";
import FlashSales from "../components/home/FlashSales";
import NewArrival from "../components/home/NewArrival";
import Services from "../components/home/Services";
import getAllProducts from "../lib/getAllProducts";

const Home = () => {
  const data = getAllProducts();

  if (!data) {
    return <span>loading...</span>;
  }

  return (
    <div className="container mx-auto space-y-10 md:space-y-16">
      <Banner />
      <FlashSales data={data} />
      <hr />
      <Categories />
      <hr />
      <BestSelling data={data} />
      <Banner2 />
      <NewArrival />
      <Services />
    </div>
  );
};

export default Home;
