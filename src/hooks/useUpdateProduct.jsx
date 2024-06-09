import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation(
    async ({ id, updatedProduct }) => {
      const response = await fetch(
        `https://shopease-server.vercel.app/products/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Network response was not ok");
      }
      return response.json();
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
    }
  );
};

export default useUpdateProduct;
