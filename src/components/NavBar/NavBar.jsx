import React from "react";
import { BsFillCakeFill } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";


const NavBar = ({ availableBalance }) => {
  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar max-w-7xl mx-auto">

        <div className="flex-1">
          <a className="btn btn-ghost text-xl gap-2 normal-case hover:bg-transparent">
            <BsFillCakeFill className="text-secondary" />
            <span className="font-bold tracking-tight">CakeBites</span>
          </a>
        </div>

        <div className="flex-none">
          <div className="flex items-center gap-2 bg-base-200 px-4 py-2 rounded-lg font-semibold border border-base-300">
            <FaMoneyBillAlt className="text-success text-xl" />
            <div className="flex flex-col leading-none text-left">
              <span className="text-[10px] uppercase opacity-60">Balance</span>
           
              <span className="text-sm font-bold">${availableBalance}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;