import AddProductForm from "../components/forms/AddProductForm";

const AddProducts = () => {
  return (
    <section className="text-gray-600 body-font relative h-screen overflow-y-scroll">
      <div className="container px-5 py-24 mx-auto" bis_skin_checked="1">
        <div
          className="flex flex-col text-center w-full mb-12"
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
