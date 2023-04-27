import React from "react";
import { FaSearch } from "react-icons/fa";

const SettingsSearchBar = () => {
  return (
    <div className="bg-white p-4">
      <div className="border border-[#111111] flex items-center p-1 rounded-md w-full lg:w-1/4">
        <FaSearch className="ml-2" />{" "}
        <input
          placeholder="Search by Induction Email Name"
          className="h-[31px] bg-transparent text-sm w-full px-2"
        />
      </div>
    </div>
  );
};

export default SettingsSearchBar;
