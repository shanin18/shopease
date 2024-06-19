import { useQuery } from "react-query";
import apiClient from "../api/axios";

const useGetProductDetailsById = (id) => {
  const { isLoading, error, data } = useQuery(["details", id], async () => {
    try {
      const response = await apiClient.get(`/products/${id}`);
      
      if (!response || !response.data) {
        throw new Error("No data received from server");
      }
      
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error("Product not found");
      } else if (error.response && error.response.status === 401) {
        throw new Error("Unauthorized");
      } else if (error.response && error.response.status === 500) {
        throw new Error("Internal server error");
      } else if (error.response && error.response.data) {
        throw new Error(error.response.data.message || "Unknown error occurred");
      } else {
        throw new Error(error.message || "Failed to fetch product details");
      }
    }
  });

  return { isLoading, error, data };
};

export default useGetProductDetailsById;
