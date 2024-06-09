import { useMutation, useQueryClient } from "react-query";
import Swal from "sweetalert2";

const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (newProduct) => {
      const response = await fetch(
        "https://shopease-server.vercel.app/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
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
          title: "Product has been added!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      },
    }
  );
};

export default useAddProduct;
