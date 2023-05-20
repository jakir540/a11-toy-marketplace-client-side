import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysTable from "./MyToysTable";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const [control, setControl] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  useTitle("my-toys")
  console.log(user.displayName);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.displayName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [user]);

const handleDelete =(id) =>{
  fetch(`http://localhost:5000/bookingsToys/${id}`,{
    method:"DELETE"
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if (data.deletedCount > 0) {
      alert('deleted successfully')
      const remaining = toys.filter (toy => toy._id !== id);
      setToys(remaining); 
    }
  })
}





  return (
    <div className="my-10">
      <h2 className="text-center text-4xl text-orange-500 font-bold my-5">Here all my Toys {toys.length}</h2>

      <div className=" flex justify-center ">
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
              {toys.map((toy) => (
                <MyToysTable key={toy._id} toy={toy}
                
                handleDelete ={handleDelete}
                
                ></MyToysTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
