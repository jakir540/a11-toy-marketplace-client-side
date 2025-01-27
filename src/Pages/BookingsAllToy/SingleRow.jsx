import React from "react";
import { Link } from "react-router-dom";

const SingleRow = ({ toy }) => {
  const { _id, seller_name, picture_url, name, price, quantity, category } =
    toy;

  return (
    <tr className="bg-white hover:shadow-md transition duration-300 rounded-md border-b border-gray-200">
      <td className="p-4 flex flex-col sm:flex-row items-center sm:space-x-4">
        <div className="w-20 h-20 sm:w-14 sm:h-14 rounded-lg overflow-hidden shadow-md">
          <img
            src={picture_url}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-2 sm:mt-0">
          <p className="font-bold text-gray-800 text-center sm:text-left">
            {seller_name}
          </p>
          <p className="text-sm text-gray-500 text-center sm:text-left">
            {name}
          </p>
        </div>
      </td>
      <td className="p-4 text-gray-700 font-medium text-center sm:text-left">
        ${price.toFixed(2)}
      </td>
      <td className="p-4 text-center text-gray-700">{quantity}</td>
      <td className="p-4 text-center text-gray-600">{category}</td>
      <td className="p-4 text-center">
        <Link to={`/viewDetailsCard/${_id}`}>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
            Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default SingleRow;
