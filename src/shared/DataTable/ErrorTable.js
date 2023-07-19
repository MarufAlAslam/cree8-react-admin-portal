import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorTable = () => {
  const data = [
    {
      id: 1,
      taskCode: "DC-T728",
      taskName: "Carpentry with Polishing",
      details: "Over Allocation by 123h 20m",
    },
    {
      id: 1,
      taskCode: "DC-T728",
      taskName: "Carpentry with Polishing",
      details: "Over Allocation by 123h 20m",
    },
    {
      id: 1,
      taskCode: "DC-T728",
      taskName: "Carpentry with Polishing",
      details: "Over Allocation by 123h 20m",
    },
    {
      id: 1,
      taskCode: "DC-T728",
      taskName: "Carpentry with Polishing",
      details: "Over Allocation by 123h 20m",
    },
    {
      id: 1,
      taskCode: "DC-T728",
      taskName: "Carpentry with Polishing",
      details: "Over Allocation by 123h 20m",
    },
    {
      id: 1,
      taskCode: "DC-T728",
      taskName: "Carpentry with Polishing",
      details: "Over Allocation by 123h 20m",
    },
    {
      id: 1,
      taskCode: "DC-T728",
      taskName: "Carpentry with Polishing",
      details: "Over Allocation by 123h 20m",
    },
    {
      id: 1,
      taskCode: "DC-T728",
      taskName: "Carpentry with Polishing",
      details: "Over Allocation by 123h 20m",
    },
    {
      id: 1,
      taskCode: "DC-T728",
      taskName: "Carpentry with Polishing",
      details: "Over Allocation by 123h 20m",
    },
    {
      id: 1,
      taskCode: "DC-T728",
      taskName: "Carpentry with Polishing",
      details: "Over Allocation by 123h 20m",
    },
  ];
  return (
    <>
      <table className="w-full">
        <thead className="bg-[#E8F3FF] text-center">
          <tr className="text-left">
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-start">Task Name</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Details</div>
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
                <div className="flex gap-2 items-center justify-start">
                  <span className="text-gray-400 text-sm">{item.taskCode}</span>
                  <span className="font-bold">{item.taskName}</span>
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex font-bold items-center justify-center">
                  {item.details}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  <Link
                    to={"/admin/settings/payroll/absences/edit"}
                    className="mx-2"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    className="mx-2"
                    onClick={() => {
                      //   visibleDeleteModal(item.name, item.username);
                    }}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ErrorTable;
