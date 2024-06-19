import { useMutation, useQueryClient } from "react-query";
import apiClient from "../api/axios"; // Adjust the import path as necessary
import Swal from "sweetalert2";

const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (id) => {
      const response = await apiClient.delete(`/products/${id}`);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["products"]);
        Swal.fire({
          title: "Product has been deleted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      },
      onError: (error) => {
        console.error("Delete product error:", error.message);
        Swal.fire({
          title: "Failed to delete product",
          text: error.message,
          icon: "error",
        });
      },
    }
  );
};

export default useDeleteProduct;
