import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const MyToysTable = ({ toy, handleDelete }) => {
  const {
    _id,
    seller_name,
    picture_url,
    name,
    seller_email,
    quantity,
    description,
    price,
    subcategory,
  } = toy;

  return (
    <tr className="transition duration-300 ease-in-out hover:bg-gray-50">
      {/* Toy Details */}
      <td className="px-6 py-4 flex items-center space-x-4">
        <div className="w-16 h-16 overflow-hidden rounded-lg shadow-lg">
          <img
            src={picture_url || "https://via.placeholder.com/150"}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <div className="font-semibold text-lg text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{seller_name}</div>
        </div>
      </td>

      {/* Price */}
      <td className="px-6 py-4 text-lg font-medium text-teal-600">${price}</td>

      {/* Quantity */}
      <td className="px-6 py-4 text-center">{quantity}</td>

      {/* Subcategory */}
      <td className="px-6 py-4 text-center text-sm text-gray-600">
        {subcategory}
      </td>

      {/* Actions */}
      <td className="px-6 py-4 flex space-x-4 justify-center">
        {/* Update Button */}
        <Link to={`/updateToy/${_id}`} className="tooltip" data-tip="Edit Toy">
          <button className="btn bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-lg shadow-md transition duration-200 ease-in-out flex items-center">
            <FaEdit className="mr-2" />
            Update
          </button>
        </Link>

        {/* Delete Button */}
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg shadow-md transition duration-200 ease-in-out flex items-center"
        >
          <FaTrashAlt className="mr-2" />
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyToysTable;
