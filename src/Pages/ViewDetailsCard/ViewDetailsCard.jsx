import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {FaRegStar,FaStar} from "react-icons/fa"
import Rating from "react-rating";
import { AuthContext } from "../../Provider/AuthProvider";

const ViewDetailsCard = () => {
  const {user} = useContext(AuthContext)
const [singletoy , setSingleToy] = useState({})
  const [control ,setControl] = useState(false)
  const {id} = useParams();
 

  

  
useEffect(()=>{
  fetch(`http://localhost:5000/viewDetailsCard/${id}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setSingleToy(data)
    
  } )
},[user])



  const {seller_name,picture_url,name,seller_email,quantity,description,rating} = singletoy;
  console.log({singletoy});

  return (
  
    <div>
      
      <h2 className="text-center font-bold my-10 uppercase p-3 text-6xl underline text-orange-500">Toy Description</h2>

      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              
              src={picture_url}
              className="max-w-md rounded-lg shadow-2xl"
            />
            <div className="font-serif">
              <h1 className="text-5xl font-bold ">{name}</h1>
              <h1 className="text-2xl font-bold my-3 py-3">Seller Name: {seller_name}</h1>
              <p>Seller Email : {seller_email}</p>
              <p className="py-6">
              <span className="font-bold"> Desc:</span> {description}
              </p>
              <p>Quantiy : {quantity}</p>

        <div className="flex gap-2 items-center my-4">
        <p>Rating : {rating}</p>
           <div>
           <Rating
            placeholderRating={rating}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar 
            className="text-yellow-600"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
            >

            </Rating>
           </div>
        </div>

              <button className="btn bg-orange-700 border-none text-black">BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsCard;
