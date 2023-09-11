import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FiKey } from "react-icons/fi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
const Services = () => {
  return (
    <div className="lg:h-96 bg-fixed lg:flex items-center justify-center px-8 ">
      <marquee className="flex" behavior="" direction="left">
        <div className="flex ">
          <div className="w-72">
            <div className="text-7xl ">
              <TbTruckDelivery></TbTruckDelivery>
            </div>
            <h2 className="text-3xl font-semibold my-3">Fast Delivery</h2>
            <p>Find tracking information and <br />
             order details from Your Orders</p>
          </div>

          <div className="w-72">
            <div className="text-7xl ">
              <FiKey></FiKey>
            </div>
            <h2 className="text-3xl font-semibold my-3">Save Money</h2>
            <p>
              Save $5 every year compared to <br /> the monthly plan by paying yearly.
            </p>
          </div>

          <div className="w-72">
            <div className="text-7xl">
              <BsArrowReturnLeft></BsArrowReturnLeft>
            </div>
            <h2 className="text-3xl font-semibold my-3">Fast Returns</h2>
            <p>Money back. If the item <br /> didn’t suit you</p>
          </div>

          <div className="w-72">
            <div className="text-7xl ">
              <BiSupport></BiSupport>
            </div>
            <h2 className="text-3xl font-semibold my-3">Online Support</h2>
            <p>
              Use our 24/7 customer hotline so you’re <br /> not alone if you have a
              question
            </p>
          </div>
        </div>
      </marquee>
    </div>
  );
};

export default Services;
