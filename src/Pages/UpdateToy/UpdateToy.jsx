import React from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  FaImage,
  FaPencilAlt,
  FaStar,
  FaDollarSign,
  FaRegEdit,
} from "react-icons/fa";

const UpdateToy = () => {
  const { id } = useParams();
  console.log({ id });

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const category = form.category.value;

    const insertBody = {
      name,
      email,
      photo,
      rating,
      price,
      category,
      quantity,
      description,
    };
    console.log(insertBody);

    fetch(`https://7-twelve-toymart-server.vercel.app/updateToy/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(insertBody),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Updated Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div className="bg-gradient-to-r from-teal-100 to-teal-50 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-center text-3xl text-teal-700 font-semibold mb-6">
          Update Toy Details
        </h1>
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name and Seller Name */}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Toy Name
              </label>
              <input
                id="name"
                className="p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                type="text"
                name="name"
                placeholder="Enter Toy Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="sellerName"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Seller Name
              </label>
              <input
                id="sellerName"
                className="p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                type="text"
                name="sellerName"
                placeholder="Enter Seller Name"
                required
              />
            </div>

            {/* Email and Category */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Seller Email
              </label>
              <input
                id="email"
                className="p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                type="email"
                name="email"
                placeholder="Seller Email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="category"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Category
              </label>
              <input
                id="category"
                className="p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                type="text"
                name="category"
                placeholder="Category"
                required
              />
            </div>

            {/* Price and Rating */}
            <div className="flex flex-col">
              <label
                htmlFor="price"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Price
              </label>
              <div className="flex items-center border rounded-md p-4">
                <FaDollarSign className="text-teal-400 mr-3" />
                <input
                  id="price"
                  className="w-full p-2 focus:outline-none"
                  type="number"
                  name="price"
                  placeholder="Enter Price"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="rating"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Rating
              </label>
              <div className="flex items-center border rounded-md p-4">
                <FaStar className="text-teal-400 mr-3" />
                <input
                  id="rating"
                  className="w-full p-2 focus:outline-none"
                  type="number"
                  name="rating"
                  placeholder="Enter Rating"
                  required
                  min="1"
                  max="5"
                />
              </div>
            </div>

            {/* Quantity and Photo URL */}
            <div className="flex flex-col">
              <label
                htmlFor="quantity"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Quantity
              </label>
              <input
                id="quantity"
                className="p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                type="number"
                name="quantity"
                placeholder="Enter Quantity"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="photo"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Toy Image URL
              </label>
              <div className="flex items-center border rounded-md p-4">
                <FaImage className="text-teal-400 mr-3" />
                <input
                  id="photo"
                  className="w-full p-2 focus:outline-none"
                  type="url"
                  name="photo"
                  placeholder="Enter Image URL"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col col-span-2">
              <label
                htmlFor="description"
                className="text-lg font-medium text-gray-700 mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                className="p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                name="description"
                placeholder="Enter Toy Description"
                rows="5"
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-lg transition duration-200 ease-in-out"
            >
              <FaPencilAlt className="mr-2 inline" /> Update Toy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
