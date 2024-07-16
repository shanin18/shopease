import { useMutation, useQueryClient } from "react-query";
import apiClient from "../api/axios"; // Adjust the import path as necessary
import Swal from "sweetalert2";

const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (newProduct) => {
      const response = await apiClient.post("/products", newProduct);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["products"]);
        Swal.fire({
          title: "Product has been added!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      },
      onError: (error) => {
        Swal.fire({
          title: "Failed to add product",
          text: error.message,
          icon: "error",
        });
      },
    }
  );
};

export default useAddProduct;
