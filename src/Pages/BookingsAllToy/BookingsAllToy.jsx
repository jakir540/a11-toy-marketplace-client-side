import React, { useContext, useEffect, useState } from "react";
import SingleRow from "./SingleRow";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../Provider/AuthProvider";

const BookingsAllToy = () => {
  const { loading } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  useTitle("All Toys");

  useEffect(() => {
    fetch("https://7-twelve-toymart-server.vercel.app/getToy")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(
      `https://7-twelve-toymart-server.vercel.app/toySearceByName/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };

  return (
    <div className="mt-5 bg-gradient-to-b from-gray-50 to-gray-100 py-8">
      <div className="flex flex-col items-center gap-6 px-4">
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-orange-600 tracking-wide">
          All Toys ({allToys.length})
        </h1>

        {/* Search Box */}
        <div className="w-full max-w-md">
          <div className="relative">
            <input
              className="w-full p-3 rounded-lg border border-orange-500 shadow-lg text-gray-700 focus:ring-2 focus:ring-orange-400 focus:outline-none transition duration-300"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              name="name"
              placeholder="Search for a toy..."
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-2 bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:bg-orange-600 transition duration-300"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="flex justify-center mt-10 px-4">
        <div className="w-full max-w-7xl">
          <div className="overflow-x-auto shadow-xl rounded-lg bg-white">
            <table className="table-auto w-full text-center border-collapse">
              {/* Table Head */}
              <thead className="bg-orange-500 text-white">
                <tr>
                  <th className="p-4 text-sm sm:text-lg">Seller & Toy Name</th>
                  <th className="p-4 text-sm sm:text-lg">Price</th>
                  <th className="p-4 text-sm sm:text-lg">Available Quantity</th>
                  <th className="p-4 text-sm sm:text-lg">Sub-Category</th>
                  <th className="p-4 text-sm sm:text-lg">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                {allToys.map((toy) => (
                  <SingleRow key={toy._id} toy={toy} />
                ))}
              </tbody>
            </table>
            {allToys.length === 0 && (
              <p className="text-center text-lg text-gray-500 py-10">
                No toys found. Try searching for something else.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsAllToy;
