import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysTable from "./MyToysTable";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";
import { FaArrowUp, FaArrowDown, FaTrashAlt, FaEdit } from "react-icons/fa";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const [asc, setAsc] = useState(true);
  const { loading, user } = useContext(AuthContext);

  useTitle("My Toys");

  useEffect(() => {
    if (user?.displayName) {
      fetch(
        `https://7-twelve-toymart-server.vercel.app/myToys/${user.displayName}`
      )
        .then((res) => res.json())
        .then((data) => setToys(data));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://7-twelve-toymart-server.vercel.app/bookingsToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              setToys((prevToys) => prevToys.filter((toy) => toy._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="my-10">
      <h2 className="text-center text-4xl text-orange-600 font-bold my-5">
        My Toys ({toys.length})
      </h2>

      {/* Sorting Button */}
      <div className="max-w-7xl mx-auto flex justify-center items-center mb-6 space-x-4">
        <button
          className="btn bg-orange-900 text-white flex items-center space-x-2 p-3 rounded-lg hover:bg-orange-800 transition duration-300 ease-in-out"
          onClick={() => setAsc(!asc)}
        >
          <span>{asc ? "Price: Ascending" : "Price: Descending"}</span>
          {asc ? <FaArrowUp /> : <FaArrowDown />}
        </button>
      </div>

      {/* Loading State - Skeleton Loader */}
      {loading ? (
        <div className="flex justify-center space-x-4">
          <div className="w-64 h-48 bg-gray-200 animate-pulse rounded-lg"></div>
          <div className="w-64 h-48 bg-gray-200 animate-pulse rounded-lg"></div>
          <div className="w-64 h-48 bg-gray-200 animate-pulse rounded-lg"></div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="max-w-7xl w-full shadow-lg rounded-lg overflow-hidden bg-white">
            <table className="table w-full">
              {/* Table Header */}
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left">Seller & Toy Name</th>
                  <th className="p-4 text-left">Price</th>
                  <th className="p-4 text-left">Available Quantity</th>
                  <th className="p-4 text-left">Sub-Category</th>
                  <th className="p-4 text-center">Actions</th>
                  <th className="p-4 text-center"></th>
                </tr>
              </thead>
              <tbody>
                {toys.map((toy) => (
                  <MyToysTable
                    key={toy._id}
                    toy={toy}
                    handleDelete={handleDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyToys;
