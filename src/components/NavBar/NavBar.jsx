import React from "react";
import { BsFillCakeFill } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-7xl mx-auto">

        <div className="flex-1">
          <a className="btn btn-ghost text-xl gap-2 normal-case">
            <BsFillCakeFill className="text-secondary" />
            <span>CakeBites</span>
          </a>
        </div>


        <div className="flex-none">
          <div className="flex items-center gap-2 bg-base-200 px-4 py-2 rounded-lg font-semibold">
            <FaMoneyBillAlt className="text-success text-xl" />
            <div className="flex flex-col leading-none">
              <span className="text-[10px] uppercase opacity-60">Balance</span>
              <span className="text-sm">$250</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;