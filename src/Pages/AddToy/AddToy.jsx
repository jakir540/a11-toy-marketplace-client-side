import React from "react";
import { MdInput } from "react-icons/md";
import { Link } from "react-router-dom";

const AddToy = () => {
  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;

    const photo = form.photo.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const insertBody = {
      name,
      email,
      photo,
      rating,
      price,
      quantity,
      description,
    };
    console.log(name, email, photo, rating, price, quantity, description);

    fetch("http://localhost:5000/addToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(insertBody),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h1 className="text-center text-4xl text-orange-500 text-bold mt-10">
        Add A Toy
      </h1>
      <div className=" w-[600px]  bg-slate-200 mx-auto h-[700px] my-16 rounded-lg shadow-2xl">
        <form onSubmit={handleRegistration}>
          <div className="flex flex-col items-center mt-16 p-12  ">
            <div className="flex gap-8 mt-3">
              <input
                className="p-3  mb-6 mt-4  shadow-2xl rounded-md "
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />

              <input
                className="p-3  mb-6 mt-4  shadow-2xl rounded-md "
                type="text"
                name="sellerName"
                placeholder="Seller Name"
              />
            </div>

            <div className="flex gap-8 mt-3">
              <input
                className="p-3  mb-6  shadow-2xl rounded-md "
                type="email"
                name="email"
                placeholder="Seller Email"
              />

              <input
                className="p-3  mb-6 shadow-2xl rounded-md "
                type="text"
                name="category"
                defaultValue="category"
              />
            </div>

            <div className="flex gap-8 mt-3">
              <input
                className="p-3  shadow-2xl rounded-md mb-6 "
                type="text"
                name="price"
                defaultValue="price"
              />

              <input
                className="p-3  mb-6 shadow-2xl rounded-md "
                type="text"
                name="rating"
                defaultValue="rating"
              />
            </div>

            <div className="flex gap-8 mt-3">
              <input
                className="p-3  shadow-2xl rounded-md mb-6 "
                type="text"
                name="quantity"
                defaultValue="10"
              />

              <input
                className="p-3  mb-6 shadow-2xl rounded-md "
                type="url"
                name="photo"
                defaultValue="URL"
              />
            </div>

            <textarea
              className="p-3  mb-6 mt-5 shadow-2xl rounded-md "
              type="text"
              name="description"
              cols={40}
              defaultValue="description"
            />

            <button
              // onClick={handleRegistration}
              type="submit"
              className="bg-slate-500 p-3 mt-10 btn border-none w-32"
            >
              Add Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
