import React from "react";
import "./Blog.css";
import blog1 from "../../../assets/blog-stem-toys.jpg";
import blog2 from "../../../assets/carboy.jpeg";

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
  const blogs = [
    {
      image: blog1,
      title: "Games for a Rainy Day Play",
      description:
        "These are traditional games that are played on a board with pieces or markers. Games like Monopoly involve buying and trading properties.",
    },
    {
      image: blog2,
      title: "Games for a Holiday Play",
      description:
        "These are traditional games that are played on a board with pieces or markers. Games like Monopoly involve buying and trading properties, while Chess is a strategic game.",
    },
  ];

  return (
    <div className="blog-item bg-fixed bg-gradient-to-b from-gray-900 via-gray-800 to-black py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-5xl font-bold text-center text-white mb-10">
          Our Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
