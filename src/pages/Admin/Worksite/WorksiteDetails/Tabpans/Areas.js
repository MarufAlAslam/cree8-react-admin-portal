import { Button, Card, Select } from "antd";
import React, { useState } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { FaDownload, FaPlus, FaSearch } from "react-icons/fa";
import CreateNewAreaModal from "../../../../../shared/Modal/CreateNewAreaModal";
import { Link } from "react-router-dom";

const Areas = () => {
  const data = [
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
    },
  ];

  const [visibleModal, setVisibleModal] = useState(false);

  const createNewArea = () => {
    setVisibleModal(true);
  };

  return (
    <>
      {visibleModal && <CreateNewAreaModal setVisibleModal={setVisibleModal} />}
      <div>
        <div className="lg:flex justify-between items-center">
          <div className="flex border border-black bg-white p-2 rounded-md justify-start items-center">
            Sort By{" "}
            <Select
              className="ml-3 border-transparent max-w-auto"
              defaultValue={"Tasks"}
            >
              <option value="All">Tasks</option>
            </Select>
          </div>

          <div className="flex justify-end items-center gap-3">
            <div className="border border-[#111111] flex items-center p-1 rounded-md w-full lg:w-1/3 my-2 bg-white min-w-[300px]">
              <FaSearch className="ml-2" />{" "}
              <input
                placeholder="Search by Name, Worker Name, Email, Card ID"
                className="h-[31px] bg-transparent text-sm w-full px-2"
              />
            </div>

            <div className="mx-3">
              <button className="btn-light border border-black text-black px-5 rounded-md h-[40px] flex justify-center items-center p-0">
                <FaDownload className="mr-2" /> Download QA Report
              </button>
            </div>
            <div>
              <Button
                onClick={createNewArea}
                className="flex justify-center items-center py-3 border border-[#111111] h-[42px]"
              >
                Create New{" "}
                <div className="bg-orange-500 p-2 rounded-md text-white ml-3">
                  <FaPlus />
                </div>
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            {data.map((item) => (
              <Link to={'/admin/worksite/details/card'} key={item.id}>
              <Card className="rounded-md border-[#E8E8E8]">
                <p className="text-sm">{item.title}</p>
                <p className="text-xl mt-2 mb-4">{item.name}</p>
                <p>{item.tasks} Tasks</p>
                <p className="my-2 text-[#FE0C0C] flex justify-start items-center text-xs">
                  <AiOutlineWarning /> {item.wans} Tasks Without Allocation
                </p>
                <p>{item.hours} Hours</p>
                <p className="text-xs text-[#A1A1A1]">{item.hours} Hours</p>

                <div className="text-center p-2 w-full bg-[#D5E9FE] mt-5 mb-3">
                  <p className="text-xs">Productivity Order</p>
                </div>

                <div className="grid grid-cols-4">
                  <div className="text-center">
                    <p className="text-xs text-[#A1A1A1]">Total</p>
                    <p className="text-sm">{item.total}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-[#A1A1A1]">Approved</p>
                    <p className="text-sm">{item.approved}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-[#A1A1A1]">Active</p>
                    <p className="text-sm">{item.active}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-[#A1A1A1]">Remaining</p>
                    <p className="text-sm">{item.remaining}</p>
                  </div>
                </div>
              </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Areas;
