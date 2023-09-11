import React from "react";
import "./Blog.css"
import blog1 from '../../../assets/blog-stem-toys.jpg'
import blog2 from '../../../assets/carboy.jpeg'

const Blog = () => {
  return (
    <div className="blog-item bg-fixed filter">
      <div className="  my-16 py-16 lg:px-24">
        <h1 className="font-bold text-5xl capitalize text-white text-center mb-5">Our Blogs</h1>

        <div className="lg:flex lg:justify-center lg:items-center lg:px-5">

          <div className=" bg-slate-600 bg-opacity-30 rounded-md ">
            <div className="w-96 h-[450px] ">
              <figure>
                <img
                  src={blog1}
                  alt="car!"
                  className="rounded-md"
                /> 
                
              </figure>
              <div>
                <h2 className="text-white text-2xl p-2">Games for a Rainy Day Play</h2>
                <p className="text-center text-white font-serif p-2">These are traditional games that are played on a board with pieces or markers. Games like Monopoly involve buying and trading properties</p>
                <div className="flex justify-end">
                  <button className="btn bg-yellow-900">Read More!</button>
                </div>
              </div>
            </div>
          </div>

          <div className="md:ml-10  text-white bg-slate-600 bg-opacity-30 rounded-md">
            <div className=" w-96 h-[450px]">
              <figure>
                <img
                  src={blog2}
                  alt="car!"
                  className="rounded-md"
                  
                />
              </figure>
              <div>
                <h2 className="text-white text-2xl p-2">Games for a Holiday Play</h2>
                <p className="text-center text-white font-serif p-2">These are traditional games that are played on a board with pieces or markers. Games like Monopoly involve buying and trading properties, while Chess is a strategic</p>
                <div className="flex justify-end">
                  <button className="btn bg-yellow-900">Read More!</button>
                </div>
              </div>
            </div>
           
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;
