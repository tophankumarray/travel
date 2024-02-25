import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-20 h-96 px-6 py-3 ">
      <div className="text-4xl  text-center mb-5 text-white ">
        Welcome to Our Travel
      </div>
      <div className="text-xl  text-center mb-5 text-white ">
        Joins Over 30,000 Member
      </div>
      <div className="flex w-full max-w-xl bg-white rounded-full shadow-md p-2 items-center">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 w-full h-10 px-3 text-gray-700 bg-white border rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
        />
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-green-400 hover:bg-green-500 focus:outline-none">
          <i className="fa-solid fa-magnifying-glass text-white" />
        </button>
      </div>
    </div>
  );
};

export default Home;
