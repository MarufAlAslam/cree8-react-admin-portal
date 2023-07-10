import { Button } from "antd";
import React from "react";
import { FaTrash } from "react-icons/fa";

const HourlyRateTaskTable = () => {
  const data = [
    {
      id: 1,
      taskCode: "DC-T728",
      name: "Carpentry 1",
      Hourly: 20,
      PO: 75.64,
      Total: 75.64,
      Remaining: -11,
      bill: 223,
      p1: 321,
      p2: 321,
      Reserved: 22,
    },
    {
      id: 1,
      taskCode: "DC-T728",
      name: "Carpentry 1",
      Hourly: 20,
      PO: 75.64,
      Total: 75.64,
      Remaining: -11,
      bill: 223,
      p1: 321,
      p2: 321,
      Reserved: 22,
    },
    {
      id: 1,
      taskCode: "DC-T728",
      name: "Carpentry 1",
      Hourly: 20,
      PO: 75.64,
      Total: 75.64,
      Remaining: -11,
      bill: 223,
      p1: 321,
      p2: 321,
      Reserved: 22,
    },
    {
      id: 1,
      taskCode: "DC-T728",
      name: "Carpentry 1",
      Hourly: 20,
      PO: 75.64,
      Total: 75.64,
      Remaining: -11,
      bill: 223,
      p1: 321,
      p2: 321,
      Reserved: 22,
    },
    {
      id: 1,
      taskCode: "DC-T728",
      name: "Carpentry 1",
      Hourly: 20,
      PO: 75.64,
      Total: 75.64,
      Remaining: -11,
      bill: 223,
      p1: 321,
      p2: 321,
      Reserved: 22,
    },
  ];
  return (
    <table className="w-full">
      <thead className="bg-[#E8F3FF] text-center">
        <tr className="text-left">
          <th className=" px-4 py-3" colSpan={2}>
            <div className="flex items-center justify-center">Task</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Hourly</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">PO</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Total</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Remaining</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">$</div>
          </th>
          <th className=" px-4 py-3 " colSpan={2}>
            <div className="flex items-center justify-center">Net</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Reserved</div>
          </th>
          <th className=" px-4 py-3 " colSpan={2}>
            <div className="flex items-center justify-center">Actions</div>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {data?.map((item, index) => (
          <tr key={index} className="border-b border-[#F0F0F0]">
            <td className="px-4 py-3">
              <div className="flex items-center justify-end text-xs text-gray-400 mt-1">
                {item.taskCode}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-start">{item.name}</div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.Hourly}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">{item.PO}</div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.Total}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.Remaining}hrs
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.bill}
              </div>
            </td>
            <td className="px-4 py-3 pr-1">
              <div className="flex items-center justify-center text-sm border">
                ${item.p1}
              </div>
            </td>
            <td className="px-4 py-3 pl-1">
              <div className="flex items-center justify-center text-sm border">
                {item.p2}%
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.Reserved}hrs
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                <Button className="text-[#0F4C7D] border-none pr-0">
                  <FaTrash />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HourlyRateTaskTable;
