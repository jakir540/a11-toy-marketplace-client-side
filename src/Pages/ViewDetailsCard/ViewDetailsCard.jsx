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
      <div className="flex items-center justify-center min-h-screen">
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
      <h2 className="text-center text-4xl font-extrabold mb-8 text-orange-500 tracking-wider">
        Product Details
      </h2>
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="lg:w-1/2 relative">
          <img
            src={picture_url}
            alt={name}
            className="w-full h-96 object-cover"
          />
          <div className="absolute top-2 left-2 bg-orange-500 text-white py-1 px-3 text-xs rounded">
            Best Seller
          </div>
        </div>
        <div className="lg:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{name}</h1>
            <h2 className="text-lg text-gray-600 mb-2 font-medium">
              Seller: {seller_name}
            </h2>
            <p className="text-sm text-gray-500 mb-4">Email: {seller_email}</p>
            <p className="text-gray-700 mb-6 text-justify leading-relaxed">
              {description}
            </p>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <span className="text-lg font-semibold text-gray-800 mr-2">
                Available Quantity:
              </span>
              <span className="text-lg text-gray-700 font-bold">
                {quantity}
              </span>
            </div>
            <div className="flex items-center mb-6">
              <span className="text-lg font-semibold text-gray-800 mr-2">
                Customer Rating:
              </span>
              <Rating
                placeholderRating={rating}
                readonly
                emptySymbol={<FaRegStar className="text-gray-400" />}
                placeholderSymbol={<FaStar className="text-yellow-500" />}
                fullSymbol={<FaStar className="text-yellow-500" />}
              />
              <span className="ml-2 text-gray-600">({rating})</span>
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-lg hover:from-orange-600 hover:to-red-600 transition duration-300">
              Add to Cart
            </button>
            <button className="w-full py-3 mt-4 border-2 border-orange-500 text-orange-500 text-lg font-bold rounded-lg hover:bg-orange-100 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Product Reviews</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <p className="text-sm text-gray-700">
            No reviews yet. Be the first to review this product!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsCard;
