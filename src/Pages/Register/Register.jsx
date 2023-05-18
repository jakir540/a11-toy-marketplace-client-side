import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
  return (
    <div className=" w-[420px]  bg-slate-200 mx-auto h-[500px] my-32 rounded-lg shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="flex flex-col items-center mt-36 p-12  ">
          <input
            className="p-3  mb-6  shadow-2xl rounded-md "
            type="text"
            placeholder="Enter Your Name"
            {...register("name")}
          />
          <input
            className="p-3  mb-6  shadow-2xl rounded-md "
            type="email"
            placeholder="Enter Your Email"
            {...register("email")}
          />

          <input
            className="p-3  shadow-2xl rounded-md mb-6 "
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />

          <input
            className="p-3  shadow-2xl rounded-md "
            type="url"
            placeholder="Photo URL"
            {...register("photo" )}
          />

          <input
            type="submit"
            value="Register"
            className="bg-slate-400 p-3 mt-10 btn border-none w-32"
          />

          <div className="mt-6">
            <p>
              <small>
                if you have an account please{" "}
                <Link className="text-orange-600" to="/register">
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
