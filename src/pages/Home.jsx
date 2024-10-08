import Swal from "sweetalert2";
import Banner from "../components/home/Banner";
import Banner2 from "../components/home/Banner2";
import BestSelling from "../components/home/BestSelling";
import Categories from "../components/home/Categories";
import FlashSales from "../components/home/FlashSales";
import NewArrival from "../components/home/NewArrival";
import Services from "../components/home/Services";
import useGetAllProducts from "../hooks/useGetAllProducts";
import useTitle from "../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  const { isLoading, error, data } = useGetAllProducts();

  const flashSaleData = data?.filter((item) => item.feature === "flash sale");
  const bestSellingData = data?.filter(
    (item) => item.feature === "best selling"
  );

  return (
    <div className="container mx-auto space-y-10 md:space-y-16">
      <Banner />
      <FlashSales data={flashSaleData} isLoading={isLoading} error={error} />
      <hr />
      <Categories />
      <hr />
      <BestSelling data={bestSellingData} isLoading={isLoading} error={error} />
      <Banner2 />
      <NewArrival />
      <Services />
    </div>
  );
};

export default Home;
