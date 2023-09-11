import React from "react";
import { Link } from "react-router-dom";
import "./Toy.css";

const Toy = ({ toy }) => {
  console.log(toy);
  const { picture_url, price, rating, name, _id, subcategory } = toy;
  return (
    <div className="group content-div">
      <div className="card w-96  bg-base-100 shadow-xl transition duration-300 ease-in-out hover:scale-110 ">
        <div className="card-body fd-cl group-hover:opacity-25 ">
          <figure className="rounded">
            <img className="h-[300px]" src={picture_url} alt="toys" />
          </figure>

          <div className="card-actions justify-end">
            <Link to={`/viewDetailsCard/${_id}`}>
              <button className="btn btn-outline">View Details</button>
            </Link>

            <Link to={`/addToy/${_id}`}>
              <button className="btn bg-orange-700 ">Add Toy</button>
            </Link>
          </div>
        </div>
        <div class="absolute mt-32 ms-20 text-center opacity-0 fd-sh group-hover:opacity-100">
          <span class="text-3xl flex items-center justify-center flex-col font-bold text-gray-600 tracking-wider leading-relaxed font-sans">
            <h2 className="card-title">{name}</h2>
          </span>
          <p>Price: {price}</p>
          <div class="pt-8 text-center">
            <Link to={`/viewDetailsCard/${_id}`}>
              <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
