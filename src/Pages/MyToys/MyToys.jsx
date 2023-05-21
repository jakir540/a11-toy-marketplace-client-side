import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysTable from "./MyToysTable";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const [asc, setAsc] = useState(true);
  const { loading } = useContext(AuthContext);
  //  const [search,setSearch] =useState('')
  useTitle("my-toys");
  const { user } = useContext(AuthContext);
  console.log(user.displayName);
  //   setSearch(user.displayName);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.displayName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
        if (loading) {
          return (
            <progress
              className="progress w-56"
              value="100"
              max="100"
            ></progress>
          );
        }
      });
  }, [user]);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/myToysSorting?sort=${asc ? "asc" : "desc"}`)
  //     .then((res) => res.json())
  //     .then((data) => setToys(data));
  // }, []);
  

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/bookingsToys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
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
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
          const remaining = toys.filter((toy) => toy._id !== id);
          setToys(remaining);
        }
      });
  };

  // const handleSelectChange =(e)=>{
  //   setSearch(e.target.value)
  // }
  // console.log(search);
  return (
    <div className="my-10">
      <h2 className="text-center text-4xl text-orange-500 font-bold my-5">
        Here all my Toys {toys.length}
      </h2>

      <div className=" max-w-7xl  mx-auto my-20">
        <div className="mx-auto">
          {" "}
          <button
            className="btn bg-orange-900 text-white"
            onClick={() => setAsc(!asc)}
          >
            {asc ? "price: ascending" : "price: descending"}
          </button>
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
            {
              <tbody>
                {toys.map((toy) => (
                  <MyToysTable
                    key={toy._id}
                    toy={toy}
                    handleDelete={handleDelete}
                  ></MyToysTable>
                ))}
              </tbody>
            }
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
