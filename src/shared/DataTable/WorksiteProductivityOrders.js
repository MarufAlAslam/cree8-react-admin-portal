import { Button } from "antd";
import React from "react";
import { FaPlus, FaSearch } from "react-icons/fa";

const WorksiteProductivityOrders = () => {
  const data = [
    {
      id: 1,
      code: "RD-230",
      name: "Polishing",
      Tasks: "DC-T728",
      TimeSpend: 75.5,
      Remaining: -11.5,
      Status: "Active",
    },
    {
      id: 1,
      code: "RD-230",
      name: "Polishing",
      Tasks: "DC-T728",
      TimeSpend: 75.5,
      Remaining: -11.5,
      Status: "Active",
    },
    {
      id: 1,
      code: "RD-230",
      name: "Polishing",
      Tasks: "DC-T728",
      TimeSpend: 75.5,
      Remaining: -11.5,
      Status: "Active",
    },
    {
      id: 1,
      code: "RD-230",
      name: "Polishing",
      Tasks: "DC-T728",
      TimeSpend: 75.5,
      Remaining: -11.5,
      Status: "Active",
    },
    {
      id: 1,
      code: "RD-230",
      name: "Polishing",
      Tasks: "DC-T728",
      TimeSpend: 75.5,
      Remaining: -11.5,
      Status: "Active",
    },
    {
      id: 1,
      code: "RD-230",
      name: "Polishing",
      Tasks: "DC-T728",
      TimeSpend: 75.5,
      Remaining: -11.5,
      Status: "Active",
    },
    {
      id: 1,
      code: "RD-230",
      name: "Polishing",
      Tasks: "DC-T728",
      TimeSpend: 75.5,
      Remaining: -11.5,
      Status: "Active",
    },
    {
      id: 1,
      code: "RD-230",
      name: "Polishing",
      Tasks: "DC-T728",
      TimeSpend: 75.5,
      Remaining: -11.5,
      Status: "Active",
    },
    {
      id: 1,
      code: "RD-230",
      name: "Polishing",
      Tasks: "DC-T728",
      TimeSpend: 75.5,
      Remaining: -11.5,
      Status: "Active",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <form action="" className="md:w-1/3">
          <div className="border border-[#000] rounded-md px-4 py-2 w-full flex justify-start items-center gap-3">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search By Task or Productivity Order"
              className="w-full border-none outline-none"
            />
          </div>
        </form>

        <button className="flex items-center gap-2 bg-[#fff] border border-[#000] rounded-md px-4 py-2">
          <FaPlus className="text-[#000] text-xs" />
          Add Filters
        </button>
      </div>
      <table className="w-full">
        <thead className="bg-[#E8F3FF] text-center">
          <tr className="text-left">
            <th className=" px-4 py-3">
              <div className="flex items-center justify-center">Code</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Name</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Tasks</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Time Spent</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Remaining</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Status</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">...</div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data?.map((item, index) => (
            <tr key={index} className="border-b border-[#F0F0F0]">
              <td className="px-4 py-3">
                <div className="flex items-center border justify-center text-sm">
                  {item.code}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center border justify-center text-sm">
                  {item.name}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.Tasks}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.TimeSpend}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.Remaining}hrs
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.Status}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  <Button className="flex justify-center items-center py-3 border-none">
                    <div className="bg-orange-500 p-2 rounded-md text-white ml-3">
                      <FaPlus />
                    </div>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default WorksiteProductivityOrders;
