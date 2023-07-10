import { Button } from "antd";
import React from "react";
import { FaPlus } from "react-icons/fa";

const ProductivityOrdersTable = () => {
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
                <Button className="border border-black">Approve</Button>
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
  );
};

export default ProductivityOrdersTable;
