import React from "react";
import foodifyLogo from "../assets/img/FoodifyLogo.png";
import "remixicon/fonts/remixicon.css";
import NavRight from "./NavRight";


const Nav = () => {
  return (
    <div className="flex justify-center items-center shadow-md h-18 w-full ">
      {/* logo  and others */}
      <div className=" flex  w-[75%] justify-between">
        <div className="flex items-center">
          <img src={foodifyLogo} alt="logo" className="w-30 " />
          <div className="flex items-center gap-2">
            <p className="ml-5 font-semibold text-[0.85rem] border-b-2 text-gray-900">
              Others
            </p>
            <i className="ri-arrow-down-s-line text-orange-600"></i>
          </div>
        </div>

        {/* right nav */}
        <NavRight/>
        
      </div>
    </div>
  );
};

export default Nav;
