import React from "react";
import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditInspection from "../Modal/EditInspection";
import DeleteInspection from "../Modal/DeleteInspection";
import InspectionTable from "./inspectionTable";

const AreaDetails1 = () => {
  const data = [
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
    {
      id: 1,
      code: "DC-T728",
      name: "Carpentry with Polishing",
      taskType: "Hourly Rate",
      completed: 3,
      incomplete: 2,
    },
  ];

  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [visibleInspection, setVisibleInspection] = useState(false);

  const visibleEditModal = () => {
    setVisibleEdit(true);
  };

  const visibleDeleteModal = () => {
    setVisibleDelete(true);
  };
  const switchInspection = () => {
    setVisibleInspection(!visibleInspection);
  }
  return (
    <>
      {visibleEdit && <EditInspection setVisibleEdit={setVisibleEdit} />}
      {visibleDelete && (
        <DeleteInspection setVisibleDelete={setVisibleDelete} />
      )}
      {visibleInspection ? (
        <InspectionTable/>
      ) : (
        <table className="w-full">
          <thead className="bg-[#E8F3FF] text-center">
            <tr className="text-left">
              <th className=" px-4 py-3 ">
                <div className="flex items-center justify-start">Task Name</div>
              </th>
              <th className=" px-4 py-3 ">
                <div className="flex items-center justify-center">
                  Task Type
                </div>
              </th>
              <th className=" px-4 py-3 ">
                <div className="flex items-center justify-center">
                  Completed Inspection
                </div>
              </th>
              <th className=" px-4 py-3 ">
                <div className="flex items-center justify-center">
                  Incomplete Inspection
                </div>
              </th>
              <th className=" px-4 py-3 ">
                <div className="flex items-center justify-center">Actions</div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data?.map((item, index) => (
              <tr key={index} className="border-b border-[#F0F0F0]">
                <td className="px-4 py-3">
                  <div className="flex items-center justify-start cursor-pointer" onClick={switchInspection}>
                    <span className="text-xs text-[#757575] block mr-2">
                      {item.code}
                    </span>
                    {item.name}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center">
                    {item.taskType}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center">
                    {item.completed}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center">
                    {item.incomplete}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center cursor-pointer">
                    <button
                      className="mx-2"
                      onClick={() => visibleEditModal(item, index)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="mx-2"
                      onClick={() => {
                        visibleDeleteModal(item, index);
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
      )}
    </>
  );
};

export default AreaDetails1;
