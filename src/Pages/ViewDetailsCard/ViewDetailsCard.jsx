import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { AuthContext } from "../../Provider/AuthProvider";

const ViewDetailsCard = () => {
  const { user, loading } = useContext(AuthContext);
  const [singleToy, setSingleToy] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://7-twelve-toymart-server.vercel.app/viewDetailsCard/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleToy(data));
  }, [id]);

  if (loading || !singleToy) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  const {
    seller_name,
    picture_url,
    name,
    seller_email,
    quantity,
    description,
    rating,
  } = singleToy;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-5xl font-extrabold mb-8 text-orange-500 tracking-wider uppercase">
        Product Overview
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative group">
          <div className="overflow-hidden">
            <img
              src={picture_url}
              alt={name}
              className="w-full h-full max-h-96 object-cover transition-transform duration-500 ease-out group-hover:scale-150 group-hover:shadow-lg"
            />
          </div>
          <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-red-500 text-white py-1 px-3 text-xs rounded-full font-semibold">
            Featured
          </div>
        </div>

        <div className="p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{name}</h1>
            <h2 className="text-lg text-gray-600 mb-2 font-medium">
              Sold by: {seller_name}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Contact: {seller_email}
            </p>
            <p className="text-gray-700 mb-6 text-justify leading-relaxed text-base">
              {description}
            </p>
          </div>
          <div className="mt-4">
            <div className="flex items-center mb-4">
              <span className="text-lg font-semibold text-gray-800 mr-2">
                Stock:
              </span>
              <span className="text-lg text-gray-700 font-bold">
                {quantity}
              </span>
            </div>
            <div className="flex items-center mb-6">
              <span className="text-lg font-semibold text-gray-800 mr-2">
                Rating:
              </span>
              <Rating
                placeholderRating={rating}
                readonly
                emptySymbol={<FaRegStar className="text-gray-300" />}
                placeholderSymbol={<FaStar className="text-yellow-400" />}
                fullSymbol={<FaStar className="text-yellow-500" />}
              />
              <span className="ml-2 text-gray-600">({rating})</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="w-full py-3 bg-gradient-to-r from-green-400 to-green-600 text-white text-lg font-bold rounded-lg hover:from-green-500 hover:to-green-700 transition duration-300">
                Add to Cart
              </button>
              <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-lg hover:from-orange-600 hover:to-red-600 transition duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
        <div className="space-y-4">
          {/* Placeholder for reviews */}
          {[1, 2, 3].map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
            >
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  <Rating
                    placeholderRating={4}
                    readonly
                    emptySymbol={<FaRegStar className="text-gray-300" />}
                    placeholderSymbol={<FaStar className="text-yellow-400" />}
                    fullSymbol={<FaStar className="text-yellow-500" />}
                  />
                  <span className="ml-2 text-gray-600">4.0</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "Amazing product! Totally worth the price. The quality is just
                as described."
              </p>
              <p className="text-gray-500 text-xs mt-2">
                - John Doe, Jan 15, 2025
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsCard;
