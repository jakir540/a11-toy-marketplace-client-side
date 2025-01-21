import React, { useEffect, useState } from "react";
import "./Blog.css";

const BlogCard = ({ image, title, description }) => {
  return (
    <div className="relative bg-slate-800 bg-opacity-70 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <figure>
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
      </figure>
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-white mb-3">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-yellow-600 text-white rounded-full shadow-md hover:bg-yellow-500 transition">
            Read More!
          </button>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState([]);

  useEffect(() => {
    fetch("https://7-twelve-toymart-server.vercel.app/blog")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
        setVisibleBlogs(data.slice(0, 6));
        setShowAll(false);
      });
  }, []);

  return (
    <div className="blog-item bg-fixed bg-gradient-to-b from-gray-900 via-gray-800 to-black py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-5xl font-bold text-center text-white mb-10">
          Our Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs?.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog?.image}
              title={blog?.title}
              description={blog?.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
