import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className=" w-[400px]  bg-slate-200 mx-auto h-[450px] my-32 rounded-lg shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="flex flex-col items-center mt-36 p-12  ">
          <input
          className="p-3  mb-6 mt-10  shadow-2xl rounded-md "
            type="email"
            placeholder="Enter Your Email"
            {...register("email")}
          />

          <input
           className="p-3  shadow-2xl rounded-md "
            type="password"
            placeholder="Password"
            {...register("password" ,{ required: true })}
          />

        

          <input type="submit" value="Login" className="bg-slate-400 p-3 mt-10 btn border-none w-32" />

          <div className="mt-6">
            <p><small>if you have not an account please <Link to="/register"className="text-orange-600"  >Register</Link> first</small></p> 
            
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
