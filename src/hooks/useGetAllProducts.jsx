import { useQuery } from "react-query";
import apiClient from "../api/axios";

const useGetAllProducts = () => {
  const { isLoading, error, data } = useQuery(["products"], async () => {
    const response = await apiClient.get("/products");
    return response.data;
  });

  return { isLoading, error, data };
};

export default useGetAllProducts;
