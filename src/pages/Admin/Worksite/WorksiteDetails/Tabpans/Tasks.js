import React, { useState } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import TabTasksTable from "../../../../../shared/DataTable/TabTasksTable";
import WarnTasksTable from "../../../../../shared/DataTable/warnTaskTable";

const Tasks = () => {
    const [activeItem, setActiveItem] = useState("All Tasks");
    const handleActiveState = (e) => {
        // remove active class from all
        const items = document.querySelectorAll(".custom-tab");
        items.forEach((item) => {
            item.classList.remove("btn-blue");
            }
        );

        // add active class to the one we clicked
        e.target.classList.add("btn-blue");

        // set activeItem state
        setActiveItem(e.target.textContent);
    };
  return (
    <>
      <div className="task-header flex justify-between items-center">
        <div className="border border-[#111111] flex items-center p-1 rounded-md w-full lg:w-1/3 my-2 bg-white min-w-[300px]">
          <FaSearch className="ml-2" />{" "}
          <input
            placeholder="Search by Name, Worker Name, Email, Card ID"
            className="h-[31px] bg-transparent text-sm w-full px-2"
          />
        </div>
        <div className="flex justify-end items-center">
          <div className="item mr-4 flex justify-start items-center">
            <FaAngleDown className="mr-2" /> Area
          </div>
          <div className="item flex justify-start items-center">
            <FaAngleDown className="mr-2" /> Productivity Orders
          </div>
        </div>
      </div>

      <div className="taskTab py-5">
        <div className="flex justify-start items-center">
            <button className="btn custom-tab bg-white border border-black px-4 py-2 mr-3 btn-blue" onClick={handleActiveState}>
                All Tasks
            </button>
            <button className="btn custom-tab bg-white border border-black px-4 py-2 mr-3" onClick={handleActiveState}>
               Warnings
            </button>
        </div>
      </div>

      <div className="mt-4"></div>
      {
        activeItem === "All Tasks" ? (
            <TabTasksTable />
        ) : <WarnTasksTable/>
      }
    </>
  );
};

export default Tasks;
