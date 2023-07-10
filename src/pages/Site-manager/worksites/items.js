import { DatePicker, Select } from "antd";
import React from "react";
import { FaCalendar } from "react-icons/fa";
import WorksiteCards from "./WorksiteCards";

const SiteManagerWorksite = () => {
  const options = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "Active",
      label: "Active",
    },
    {
      value: "Inactive",
      label: "Inactive",
    },
    {
      value: "Archive",
      label: "Archive",
    },
  ];
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="">
      <div className="top flex md:gap-0 gap-4 justify-between items-center">
        <div className="flex justify-start align-items-center">
          <Select
            defaultValue="All"
            className="custom-padding-select"
            onChange={handleChange}
            options={options}
          />
          <button className="ml-3 border w-[35px] md:flex hidden justify-center items-center bg-white rounded">
            <FaCalendar />
          </button>
        </div>

        <div className="right flex justify-end items-center md:w-auto w-full">
          <DatePicker className="mr-2 p-2 h-[40px]" onChange={onChange} />
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
          Showing Data of:{" "}
          <span className="font-bold text-black">17 March 2023</span>
        </p>
      </div>

      <WorksiteCards />
    </div>
  );
};

export default SiteManagerWorksite;
