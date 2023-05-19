import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createAuthUser } = useContext(AuthContext);
  const [user,setUser] = useState(null)
  const [error,setError] = useState("")

  const handleRegistration = (event) => {
    setError("")
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    form.reset();
    console.log(name, email, password, photo);

    if (password.length < 6) {
      setError('Password Must be give minimum 6 character')
    }

    createAuthUser(email, password)
      .then((result) => {
        const user = result.user;
        user.displayName = name;
        user.photURL = photo;
        updateProfile(name,photo)
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Register Successfully",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div>
      <h1 className="text-center text-4xl text-orange-500 text-bold mt-10">
        Registration Please
      </h1>
      <div className=" w-[420px]  bg-slate-200 mx-auto h-[500px] my-16 rounded-lg shadow-2xl">
        <form onSubmit={handleRegistration}>
          <div className="flex flex-col items-center mt-16 p-12  ">
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

          <p className="form-text text-red-500 text-center">{error}</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
