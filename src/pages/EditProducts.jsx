import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useGetProductDetailsById from "../hooks/useGetProductDetailsById";
import LoadingSpinner from "../components/others/LoadingSpinner";
import useUpdateProduct from "../hooks/useUpdateProduct";

const EditProducts = () => {
  const { id } = useParams();
  const { isLoading, data: product } = useGetProductDetailsById(id);
  const { mutate: updateProduct } = useUpdateProduct();

  if (isLoading) return <LoadingSpinner />;

  const handleEditForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const seller = form.seller.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const img = form.image.value;
    const stock = product.stock;
    const shipping = product.shipping;
    const ratingsCount = product.ratingsCount;
    const quantity = product.quantity;
    const updatedProduct = {
      id,
      name,
      seller,
      price,
      ratings,
      img,
      stock,
      shipping,
      ratingsCount,
      quantity,
    };
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Edit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        updateProduct({ id, updatedProduct });
      }
    });
  };

  return (
    <section className="text-gray-600 body-font relative h-screen overflow-y-scroll">
      <div className="container px-5 py-24 mx-auto" bis_skin_checked="1">
        <div
          className="flex flex-col text-center w-full mb-12"
          bis_skin_checked="1"
        >
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Edit This Product
          </h1>
        </div>
        <form
          onSubmit={handleEditForm}
          className="lg:w-1/2 md:w-2/3 mx-auto"
          bis_skin_checked="1"
        >
          <div className="flex flex-wrap -m-2" bis_skin_checked="1">
            <div className="p-2 w-full sm:w-1/2" bis_skin_checked="1">
              <div className="relative" bis_skin_checked="1">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={product?.name}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2" bis_skin_checked="1">
              <div className="relative" bis_skin_checked="1">
                <label
                  htmlFor="category"
                  className="leading-7 text-sm text-gray-600"
                >
                  Category
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  defaultValue={product?.category}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2" bis_skin_checked="1">
              <div className="relative" bis_skin_checked="1">
                <label
                  htmlFor="seller"
                  className="leading-7 text-sm text-gray-600"
                >
                  Seller
                </label>
                <input
                  type="text"
                  id="seller"
                  name="seller"
                  defaultValue={product?.seller}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2" bis_skin_checked="1">
              <div className="relative" bis_skin_checked="1">
                <label
                  htmlFor="price"
                  className="leading-7 text-sm text-gray-600"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  defaultValue={product?.price}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2" bis_skin_checked="1">
              <div className="relative" bis_skin_checked="1">
                <label
                  htmlFor="image"
                  className="leading-7 text-sm text-gray-600"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  defaultValue={product?.img}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2" bis_skin_checked="1">
              <div className="relative" bis_skin_checked="1">
                <label
                  htmlFor="ratings"
                  className="leading-7 text-sm text-gray-600"
                >
                  ratings
                </label>
                <input
                  type="number"
                  id="ratings"
                  name="ratings"
                  defaultValue={product?.ratings}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full" bis_skin_checked="1">
              <input
                type="submit"
                value="Edit Product"
                className="btn w-full flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditProducts;
