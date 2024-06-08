import Banner from "../components/home/Banner";
import Banner2 from "../components/home/Banner2";
import BestSelling from "../components/home/BestSelling";
import Categories from "../components/home/Categories";
import FlashSales from "../components/home/FlashSales";
import NewArrival from "../components/home/NewArrival";
import Services from "../components/home/Services";
import LoadingSpinner from "../components/others/LoadingSpinner";
import useGetAllProducts from "../hooks/useGetAllProducts";

const Home = () => {
  const { isLoading, error, data } = useGetAllProducts();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>An error occurred: {error.message}</p>;

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
