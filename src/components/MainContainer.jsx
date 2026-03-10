import React from "react";

const MainContainer = ({ title, overview }) => {
  return (
    <div className="pt-60 h-screen ml-15">
      <h1 className="text-5xl font-semibold mb-4">{title}</h1>
      <p className="w-[35%] text-lg">{overview}</p>
      <div className="flex gap-4 mt-6">

      <button className="bg-gray-700 px-6 py-1.5 hover:bg-gray-900 text-lg text-white rounded-md font-semibold">▶︎ Play</button>
      <button className="bg-gray-700 px-6 py-1.5  hover:bg-gray-900  text-lg text-white rounded-md font-semibold">More info</button>
      </div>
    </div>
  );
};

export default MainContainer;
