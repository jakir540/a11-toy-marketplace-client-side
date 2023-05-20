import React, { useEffect, useState } from "react";
import SingleRow from "./SingleRow";

const BookingsAllToy = () => {
  const [allToys, setAllToys] = useState([]);
  const [user,setUser] = useState(null)
  const [control,setControl] = useState(false)

  useEffect(() => {
    fetch("http://localhost:5000/getToy")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  }, []);


const handleDelete =(id) =>{
  fetch(`http://localhost:5000/bookingsToys/${id}`,{
    method:"DELETE"
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if (data.deletedCount > 0) {
      alert('deleted successfully')
      const remaining = allToys.filter (toy => toy._id !== id);
      setAllToys(remaining); 
    }
  })
}

const updatedToy = (toy) =>{
  fetch(`http://localhost:5000/bookingToys/${toy._id}`,{
    method:"PUT",
    headers:{
      "content-type": "application/json"
    },
    body:JSON.stringify(toy)
  })
  .then(res => res.json())
  .then(error =>{
    console.log(error);
  })
}





  return (
    <div className="mt-5">
      <div className="flex justify-center flex-col gap-4">
        <h1 className="text-center text-4xl text-orange-500 font-bold">
          All Toys {allToys.length}
        </h1>

        <div className=" w-[400px]  mx-auto h-[100px] ">
          <form>
            <div className="flex flex-col items-center my-3  ">
              <div className="flex gap-4">

                <input
                  className="p-3   shadow-2xl rounded-md border border-orange-500 "
                  type="text"
                  name="name"
                  placeholder="Enter Toy Name"
                />


                <button                  
                  type="submit"
                  className="bg-slate-500 p-3 btn border-none w-32"
                >
                  searce toy
                </button>


              </div>
            </div>
          </form>
        </div>
      </div>

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
              {allToys.map((toy) => (
                <SingleRow key={toy._id} 
                
                toy={toy}
                handleDelete ={handleDelete}
                updatedToy={updatedToy}
                
                ></SingleRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingsAllToy;
