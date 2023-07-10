import { Input } from "antd";
import React from "react";
import {
  FaAngleRight,
  FaArrowLeft,
  FaCaretDown,
  FaSearch,
} from "react-icons/fa";
import userIcon from "../../../../assets/images/Site-Manager/user.svg";
import DetailsTab from "./detailsTab";

const WorksiteTimehseets = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-[20px] header-flex">
        <button>
          <FaArrowLeft className="text-[#000] mr-3" />
        </button>
        <div className="flex justify-start items-center gap-3">
          <p className="text-[24px] w-full">Worksite</p>
          <FaAngleRight className="text-xl mt-1 mr-4" />
          <div className="w-full">
            <p className="flex w-full min-w-[400px] justify-start items-center">
              Hemingway, Palm Beach{" "}
              <FaCaretDown className="inline-block ml-2" />
            </p>
            <p className="text-xs">
              <span className="text-gray-400">Job NUmber:</span> 2345
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center w-full">
          <div className="border py-1 px-4 rounded-md flex w-1/2 justify-between items-center">
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
      <DetailsTab />
    </div>
  );
};

export default WorksiteTimehseets;
