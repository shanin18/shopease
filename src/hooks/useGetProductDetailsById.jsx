import { useQuery } from "react-query";

const useGetProductDetailsById = (id) => {
  const { isLoading, error, data } = useQuery(["details", id], async () => {
    const response = await fetch(
      `https://shopease-server.vercel.app/products/${id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
  return { isLoading, error, data };
};

export default useGetProductDetailsById;
