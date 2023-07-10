import React from "react";
import { FaEdit } from "react-icons/fa";

const TerminatedProfileTable = ({ hasStatus }) => {
  const data = [
    {
      id: 1,
      employedAs: "Salary",
      started: "August, 12 2022",
      employment: "August, 30 2023",
    },
    {
      id: 2,
      employedAs: "Casual",
      started: "November, 03 2020",
      employment: "December, 30 2021",
    },
  ];
  return (
    <table className="w-full">
      <thead className="bg-[#E8F3FF] text-center">
        <tr className="text-left">
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-start">Employed As</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-start">Started</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-start">Employment</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Action</div>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {data?.map((item, index) => (
          <tr key={index} className="border-b border-[#F0F0F0]">
            <td className="px-4 py-3">
              <div className="flex items-center justify-start">
                {item.employedAs}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-start">
                {item.started}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-start">
                {item.employment}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                <button>
                  <FaEdit />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TerminatedProfileTable;
