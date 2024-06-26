import React, { useState } from "react";
import Swal from "sweetalert2";
import useAddProduct from "../../hooks/useAddProduct";

const AddProductForm = () => {
  const [error, setError] = useState("");
  const addProductMutation = useAddProduct();

  const handleEditForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const seller = form.seller.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const img = form.image.value;
    const stock = form.stock.value;
    const shipping = form.shipping.value;
    const ratingsCount = form.ratingsCount.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const discount = form.discount.value;
    const feature = form.feature.value;
    try {
      if (discount < 0) {
        return setError("discount must be positive value");
      } else {
        setError("");
      }

      const newProduct = {
        name,
        category,
        seller,
        price,
        ratings,
        img,
        stock,
        shipping,
        ratingsCount,
        quantity,
        discount,
        description,
        feature,
      };

      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, add it!",
      }).then((result) => {
        if (result.isConfirmed) {
          addProductMutation.mutate(newProduct);
          form.reset();
        }
      });
    } catch (error) {
      Swal.fire({
        title: error?.message,
        icon: "error",
        showConfirmButton: true,
      });
    }
  };

  
  return (
    <form
      onSubmit={handleEditForm}
      className="lg:w-1/2 md:w-2/3 mx-auto"
      bis_skin_checked="1"
    >
      <div className="flex flex-wrap -m-2" bis_skin_checked="1">
        <div className="p-2 w-full sm:w-1/2" bis_skin_checked="1">
          <div className="relative" bis_skin_checked="1">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full sm:w-1/2" bis_skin_checked="1">
          <div className="relative" bis_skin_checked="1">
            <label htmlFor="image" className="leading-7 text-sm text-gray-600">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              required
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="p-2 w-full sm:w-1/2" bis_skin_checked="1">
          <div className="relative" bis_skin_checked="1">
            <label
              htmlFor="quantity"
              className="leading-7 text-sm text-gray-600"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              required
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
              required
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full sm:w-1/2" bis_skin_checked="1">
          <div className="relative" bis_skin_checked="1">
            <label htmlFor="seller" className="leading-7 text-sm text-gray-600">
              Seller
            </label>
            <input
              type="text"
              id="seller"
              name="seller"
              required
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full sm:w-1/2" bis_skin_checked="1">
          <div className="relative" bis_skin_checked="1">
            <label htmlFor="price" className="leading-7 text-sm text-gray-600">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              required
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full sm:w-1/2" bis_skin_checked="1">
          <div className="relative" bis_skin_checked="1">
            <label htmlFor="stock" className="leading-7 text-sm text-gray-600">
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              required
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
              required
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full sm:w-1/2" bis_skin_checked="1">
          <div className="relative" bis_skin_checked="1">
            <label
              htmlFor="ratingsCount"
              className="leading-7 text-sm text-gray-600"
            >
              ratings Count
            </label>
            <input
              type="number"
              id="ratingsCount"
              name="ratingsCount"
              required
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full sm:w-1/2" bis_skin_checked="1">
          <div className="relative" bis_skin_checked="1">
            <label
              htmlFor="shipping"
              className="leading-7 text-sm text-gray-600"
            >
              Shipping
            </label>
            <input
              type="number"
              id="shipping"
              name="shipping"
              required
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full sm:w-1/2" bis_skin_checked="1">
          <div className="relative" bis_skin_checked="1">
            <label
              htmlFor="discount"
              className="leading-7 text-sm text-gray-600"
            >
              Discount
            </label>
            <input
              type="number"
              id="discount"
              name="discount"
              required
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <span className="text-red-500 text-sm">{error}</span>
          </div>
        </div>
        <div className="p-2 w-full sm:w-1/2" bis_skin_checked="1">
          <div className="relative" bis_skin_checked="1">
            <label
              htmlFor="feature"
              className="leading-7 text-sm text-gray-600"
            >
              Feature
            </label>
            <select
              name="feature"
              id="feature"
              required
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out text-base"
            >
              <option value="new arrival">New Arrival</option>
              <option value="flash sale">Flash Sale</option>
              <option value="best selling">Best Selling</option>
              <option value="regular">Regular</option>
            </select>
          </div>
        </div>
        <div className="p-2 w-full" bis_skin_checked="1">
          <div className="relative" bis_skin_checked="1">
            <label
              htmlFor="description"
              className="leading-7 text-sm text-gray-600"
            >
              Description
            </label>
            <textarea
              required
              name="description"
              id="description"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-24"
            ></textarea>
          </div>
        </div>

        <div className="p-2 w-full" bis_skin_checked="1">
          <input
            type="submit"
            value="Add Product"
            className="btn w-full flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
          />
        </div>
      </div>
    </form>
  );
};

export default AddProductForm;
