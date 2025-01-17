import React, { useEffect, useState } from "react";
import Toy from "../Toy/Toy";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (activeTab) {
      fetch(
        `https://7-twelve-toymart-server.vercel.app/searceToyByName/${activeTab}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setToys(data);
        });
    }
  }, [activeTab]);

  useEffect(() => {
    fetch("https://7-twelve-toymart-server.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="my-10 flex flex-wrap gap-6 justify-center">
      {/* Left Side Tabs */}
      <div className="w-full lg:w-[20%] flex flex-col items-start gap-4 mt-6 bg-gray-100 px-5">
        <button
          onClick={() => handleTabClick("allToys")}
          className={`w-full py-3 text-center font-semibold text-gray-900 rounded-lg ${
            activeTab === "allToys" ? "shadow-lg" : ""
          }`}
        >
          All Category Toys ({toys.length})
        </button>

        <Tabs>
          <TabList className="flex flex-col gap-2 justify-center ps-10">
            {[
              { label: "Buses", value: "bus" },
              { label: "Bikes", value: "Bikes" },
              { label: "Trucks", value: "Trucks" },
            ].map((tab) => (
              <Tab
                key={tab.value}
                onClick={() => handleTabClick(tab.value)}
                className={`py-2 px-4 text-white rounded-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition duration-300 text-center cursor-pointer ${
                  activeTab === tab.value ? "shadow-md" : ""
                }`}
              >
                {tab.label}
              </Tab>
            ))}
          </TabList>
        </Tabs>
      </div>

      {/* Right Side Toys Grid */}
      <div className="w-full lg:w-[75%] grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {toys.map((toy) => (
          <div
            key={toy._id}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            <Toy toy={toy} />
          </div>
        ))}
        {toys.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No toys available in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Category;
