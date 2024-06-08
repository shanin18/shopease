const getProductDetailsById = async (id) => {
    const res = await fetch(`https://shopease-server.vercel.app/products/${id}`);
    const data = await res.json();
    return data;
  };
  
  export default getProductDetailsById;
  