const getAllProducts = async () => {
  const res = await fetch("https://shopease-server.vercel.app/products");
  const data = await res.json();
  return data;
};

export default getAllProducts;
