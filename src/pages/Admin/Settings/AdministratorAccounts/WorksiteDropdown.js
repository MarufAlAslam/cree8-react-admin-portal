import React from "react";
import { FaSearch } from "react-icons/fa";

const WorksiteDropdown = () => {
  const data = [
    "Cree8 Management",
    "Administration (Administration)",
    "Cree8 Management",
    "Administration (Administration)",
    "Cree8 Management",
    "Administration (Administration)",
  ];
  return (
    <div>
      <div className="py-2">
        <div className="border border-[#111111] flex items-center p-1 rounded-md w-full text-xs my-2 bg-white">
          <FaSearch className="ml-2" />{" "}
          <input
            placeholder="Search worksite Name"
            className="h-[31px] bg-transparent text-sm w-full px-2"
          />
        </div>
      </div>
      {data?.map((item, index) => {
        return (
          <>
            <div
              key={index}
              className="flex flex-row justify-between items-center border-b-2 border-gray-200 py-2"
            >
              <div className="flex flex-row items-center">
                <p className="text-sm">{item}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default WorksiteDropdown;
