import { useMutation, useQueryClient } from "react-query";
import Swal from "sweetalert2";

const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (id) => {
      const response = await fetch(
        `https://shopease-server.vercel.app/products/${id}`,
        {
          method: "DELETE",
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
          title: "Product has been deleted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      },
    }
  );
};

export default useDeleteProduct;
