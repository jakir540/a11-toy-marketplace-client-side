import React from "react";
import { Link } from "react-router-dom";
import "./Toy.css";

const Toy = ({ toy }) => {
  const { picture_url, price, rating, name, _id } = toy;

  return (
    <div className="relative group">
      {/* Card */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
        <div className="relative">
          <img
            src={picture_url}
            alt={name}
            className="h-64 w-full object-cover group-hover:opacity-75"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
            <div className="text-white text-center space-y-2">
              <h2 className="text-2xl font-bold">{name}</h2>
              <p className="text-lg">Price: ${price}</p>
              <p className="text-sm">Rating: {rating} ⭐</p>
              <div className="space-x-2">
                <Link to={`/viewDetailsCard/${_id}`}>
                  <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition text-sm font-semibold">
                    View Details
                  </button>
                </Link>
                <Link to={`/addToy/${_id}`}>
                  <button className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition text-sm font-semibold">
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
