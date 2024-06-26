import AddProductForm from "../components/forms/AddProductForm";
import useTitle from "../hooks/useTitle";

const AddProducts = () => {
  useTitle("Add Product")
  return (
    <section className="text-gray-600 body-font relative h-screen overflow-y-scroll">
      <div className="container px-5 pt-10 pb-24 mx-auto" bis_skin_checked="1">
        <div
          className="flex flex-col text-center w-full mb-8"
          bis_skin_checked="1"
        >
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Add New Product
          </h1>
        </div>
        <AddProductForm />
      </div>
    </section>
  );
};

export default AddProducts;
