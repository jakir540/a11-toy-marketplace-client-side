import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdToys, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}!`);
    setEmail(""); // Clear input after submission
  };

  return (
    <div className="footer bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 text-white py-10 mt-5">
      <footer className="max-w-7xl mx-auto px-6">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="text-6xl text-orange-500">
            <MdToys />
          </div>
          <h2 className="text-3xl font-bold font-serif text-white mt-2">
            BD-Toy
            <span className="text-orange-500">Mart</span>
          </h2>
        </div>

        {/* Main Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="footer-title text-lg font-semibold text-orange-500 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-orange-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/all-toys"
                  className="hover:text-orange-400 transition"
                >
                  All Toys
                </Link>
              </li>
              <li>
                <Link
                  to="/add-toy"
                  className="hover:text-orange-400 transition"
                >
                  Add Toy
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-orange-400 transition">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title text-lg font-semibold text-orange-500 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-orange-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-400 transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-orange-400 transition">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/press" className="hover:text-orange-400 transition">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title text-lg font-semibold text-orange-500 mb-4">
              Connect with Us
            </h3>
            <div className="flex justify-center md:justify-start gap-4">
              <Link
                to="/"
                className="text-2xl hover:text-orange-400 transition"
              >
                <FaFacebook />
              </Link>
              <Link
                to="/"
                className="text-2xl hover:text-orange-400 transition"
              >
                <FaTwitter />
              </Link>
              <Link
                to="/"
                className="text-2xl hover:text-orange-400 transition"
              >
                <FaInstagram />
              </Link>
              <Link
                to="/"
                className="text-2xl hover:text-orange-400 transition"
              >
                <FaLinkedin />
              </Link>
              <Link
                to="/"
                className="text-2xl hover:text-orange-400 transition"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="mb-12 text-center">
          <h3 className="footer-title text-lg font-semibold text-orange-500 mb-4">
            Subscribe to Our Newsletter
          </h3>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex justify-center"
          >
            <input
              type="email"
              className="px-4 py-2 w-64 md:w-80 rounded-l-lg text-black focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-r-lg hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="footer-title text-lg font-semibold text-orange-500 mb-4">
              Contact Information
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MdLocationOn className="mr-2 text-orange-500" />
                <span>123 Toy Street, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center">
                <MdPhone className="mr-2 text-orange-500" />
                <span>+880 123 456 789</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-2 text-orange-500" />
                <span>support@bdtoy.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title text-lg font-semibold text-orange-500 mb-4">
              FAQs
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/faq#shipping"
                  className="hover:text-orange-400 transition"
                >
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link
                  to="/faq#returns"
                  className="hover:text-orange-400 transition"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  to="/faq#payment"
                  className="hover:text-orange-400 transition"
                >
                  Payment Options
                </Link>
              </li>
              <li>
                <Link
                  to="/faq#order-tracking"
                  className="hover:text-orange-400 transition"
                >
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title text-lg font-semibold text-orange-500 mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-orange-400 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-orange-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="hover:text-orange-400 transition"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} BD-ToyMart. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
