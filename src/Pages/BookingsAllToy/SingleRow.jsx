import React from "react";
import { Link } from "react-router-dom";

const SingleRow = ({ toy }) => {
  console.log(toy);
  const {
    _id,
    seller_name,
    picture_url,
    name,
    seller_email,
    quantity,
    description,
    price,
  category
  } = toy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                // src={picture_url}
                src="https://5.imimg.com/data5/PF/PG/MY-55849933/kids-racing-car-toys-1000x1000.jpg"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>

          <div>
            <div className="font-bold">{seller_name}</div>
            <div className="text-sm opacity-50">{name}</div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{category}</td>
      
      
      {/* <th>
        <button onClick={()=> handleDelete(_id)} className="btn btn-sm">Delete</button>
      </th> */}
      <th>
        <Link to={`/viewDetailsCard/${_id}`}><button className="btn btn-sm">Details</button></Link>
      </th>
    </tr>
  );
};

export default SingleRow;
