import { Input } from "antd";
import React from "react";
import { FaSearch } from "react-icons/fa";
import SiteManagerWorksite from "./items";

import userIcon from "../../../assets/images/Site-Manager/user.svg";

const SiteManagerWorksites = () => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-[20px] header-flex">
          <p className="text-[24px] w-full">Worksites</p>
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
      </div>

      <SiteManagerWorksite />
    </>
  );
};

export default SiteManagerWorksites;
