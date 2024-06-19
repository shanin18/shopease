import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import apiClient from "../api/axios";

const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(
    async ({ id, updatedProduct }) => {
      const response = await apiClient.put(`/products/${id}`, updatedProduct);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["products"]);
        Swal.fire({
          title: "Product has been edited!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/all-products");
      },
      onError: (error) => {
        Swal.fire({
          title: "Error editing product",
          text: error.message,
          icon: "error",
        });
      },
    }
  );
};

export default useUpdateProduct;
