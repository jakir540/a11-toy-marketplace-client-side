import React, { useEffect, useState } from "react";
import SingleRow from "./SingleRow";

const BookingsAllToy = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getToy")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  }, []);
  return (
    <div className="my-16">
      <h1 className="text-center text-4xl text-orange-500 font-bold">
        All Toys {allToys.length}
      </h1>

      <div className="my-10 flex justify-center ">
        <div className=" max-w-7xl w-full ">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                
                <th>Seller & Toy Name</th>
                <th>Price</th>
                <th>Availabel Quantity</th>
                <th>Sub-Category</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {allToys.map((toy) => (
                <SingleRow key={toy._id} toy={toy}></SingleRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>


    </div>
  );
};

export default BookingsAllToy;
