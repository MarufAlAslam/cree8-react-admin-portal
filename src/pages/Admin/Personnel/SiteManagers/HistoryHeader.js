import { DatePicker } from "antd";
import React from "react";
import { FaSearch } from "react-icons/fa";

const HistoryHeader = () => {
  return (
    <div className="flex bg-white p-4 justify-between items-center">
      <div className="border border-[#111111] flex items-center p-1 rounded-md w-full lg:w-1/4">
        <FaSearch className="ml-2" />{" "}
        <input
          placeholder="Search by Name, Worker Name, Email, Card ID"
          className="h-[31px] bg-transparent text-sm w-full px-2"
        />
      </div>

      <DatePicker className="p-2 border-[#111111] text-black"/>
    </div>
  );
};

export default HistoryHeader;
