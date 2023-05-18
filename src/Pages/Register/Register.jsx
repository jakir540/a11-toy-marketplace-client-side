import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createAuthUser } = useContext(AuthContext);

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    createAuthUser(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.log(error))
  };

  return (
    <div className=" w-[420px]  bg-slate-200 mx-auto h-[500px] my-32 rounded-lg shadow-2xl">
      <form onSubmit={handleRegistration}>
        <div className="flex flex-col items-center mt-36 p-12  ">
          <input
            className="p-3  mb-6 mt-4  shadow-2xl rounded-md "
            type="text"
            name="name"
            placeholder="Enter Your Name"
          />
          <input
            className="p-3  mb-6  shadow-2xl rounded-md "
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />

          <input
            className="p-3  shadow-2xl rounded-md mb-6 "
            type="password"
            name="password"
            placeholder="Password"
          />

          <input
            className="p-3  shadow-2xl rounded-md "
            type="url"
            name="photo"
            placeholder="Photo URL"
          />

          <button
            // onClick={handleRegistration}
            type="submit"
            className="bg-slate-500 p-3 mt-10 btn border-none w-32"
          >
            Register
          </button>

          <div className="mt-6">
            <p>
              <small>
                if you have an account please{" "}
                <Link className="text-orange-600" to="/login">
                  login
                </Link>{" "}
                first
              </small>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
