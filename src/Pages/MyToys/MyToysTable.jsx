import React from 'react';
import { Link } from 'react-router-dom';

const MyToysTable = ({toy,handleDelete,handleUpdate}) => {
    const {
        _id,
        seller_name,
        picture_url,
        name,
        seller_email,
        quantity,
        description,
        price,
        subcategory
      } = toy;

     
    return (
        <tr>
      <td>
        <div className="flex items-center space-x-3">
          

          <div>
            <div className="font-bold">{seller_name}</div>
            <div className="text-sm opacity-50">{name}</div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{subcategory}</td>
      
      
    
       <th>
        <Link to={`/updateToy/${_id}`}><button  className="btn btn-sm">Update</button></Link>
      </th> 
      <th>
        <Link to=""><button onClick={()=> handleDelete(_id)} className="btn btn-sm">Delete</button></Link>
      </th>
    </tr>
    );
};

export default MyToysTable;