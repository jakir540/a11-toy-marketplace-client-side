import React from "react";
import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
  console.log(toy);
  const { picture_url, price, rating, name, _id,subcategory } = toy;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={picture_url}
         
          alt="toys"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Price: {price}</p>
        <div className="card-actions justify-end">


          <Link to={`/viewDetailsCard/${_id}`}>
            
            <button className="btn btn-outline">View Details</button>
          </Link>



          <Link to={`/addToy/${_id}`}>            
            <button className="btn bg-orange-700 ">Add Toy</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Toy;
