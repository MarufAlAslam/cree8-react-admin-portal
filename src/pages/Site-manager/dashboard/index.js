import React from "react";
import { FaCalendar, FaSearch } from "react-icons/fa";
import { Input } from "antd";

import userIcon from "../../../assets/images/Site-Manager/user.svg";
import Timelines from "./Timeline";

const Timeline = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-[20px] header-flex">
        <p className="text-[24px] w-full">Active Worksite Timelines</p>
        <div className="flex justify-end items-center w-full">
          <div className="border py-1 px-4 rounded-md flex w-full justify-between items-center">
            <FaSearch />
            <Input
              placeholder="Search by woksite Name"
              className="border-none outline-none bg-transparent p-0 ml-3"
            />
          </div>
          <button className="min-w-[40px] min-h-[40px] bg-[#F6FAFF] rounded-full ml-10 md:block hidden">
            <img
              src={userIcon}
              alt="user"
              className="w-[15px] h-[15px] rounded-full ml-[12px]"
            />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center my-5">
        <p>
          <div className="flex justify-start items-center gap-2">
            <div className="border bg-white py-1 px-3 gap-2 flex rounded justify-between items-center">
              <span className="text-xs">Show: </span>
              <select className="border-none outline-none bg-transparent p-0 ml-3">
                <option value="All worksites">All Worksites</option>
              </select>
            </div>
            <div className="border bg-white w-[31px] h-[31px] gap-2 flex rounded justify-center items-center">
              <FaCalendar />
            </div>
          </div>
        </p>
        <p className="text-right text-gray-400 text-sm">
          Showing Data of: <span className="font-bold text-black">17 March 2023</span>
        </p>
      </div>
      <Timelines />
    </div>
  );
};

export default Timeline;
