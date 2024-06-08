import { useQuery } from "react-query";

const useGetAllProducts = () => {
  const { isLoading, error, data } = useQuery(["products"], async () => {
    const response = await fetch("https://shopease-server.vercel.app/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  return { isLoading, error, data };
};

export default useGetAllProducts;
