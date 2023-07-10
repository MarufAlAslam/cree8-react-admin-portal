import { Progress } from "antd";
import React, { useState } from "react";
import LogCauseModal from "../Modal/LogCauseModal";

const TabTasksTable = () => {
  const data = [
    {
      id: 1,
      code: "DC-T728",
      success: 60,
      task: "Carpentry 1",
      area: "Cinema Shaho",
    },
    {
      id: 1,
      code: "DC-T728",
      success: 60,
      task: "Carpentry 1",
      area: "Cinema Shaho",
    },
    {
      id: 1,
      code: "DC-T728",
      success: 60,
      task: "Carpentry 1",
      area: "Cinema Shaho",
    },
    {
      id: 1,
      code: "DC-T728",
      success: 60,
      task: "Carpentry 1",
      area: "Cinema Shaho",
    },
    {
      id: 1,
      code: "DC-T728",
      success: 60,
      task: "Carpentry 1",
      area: "Cinema Shaho",
    },
    {
      id: 1,
      code: "DC-T728",
      success: 60,
      task: "Carpentry 1",
      area: "Cinema Shaho",
    },
    {
      id: 1,
      code: "DC-T728",
      success: 60,
      task: "Carpentry 1",
      area: "Cinema Shaho",
    },
    {
      id: 1,
      code: "DC-T728",
      success: 60,
      task: "Carpentry 1",
      area: "Cinema Shaho",
    },
    {
      id: 1,
      code: "DC-T728",
      success: 60,
      task: "Carpentry 1",
      area: "Cinema Shaho",
    },
    {
      id: 1,
      code: "DC-T728",
      success: 60,
      task: "Carpentry 1",
      area: "Cinema Shaho",
    },
    {
      id: 1,
      code: "DC-T728",
      success: 60,
      task: "Carpentry 1",
      area: "Cinema Shaho",
    },
    {
      id: 1,
      code: "DC-T728",
      success: 60,
      task: "Carpentry 1",
      area: "Cinema Shaho",
    },
    {
      id: 1,
      code: "DC-T728",
      success: 60,
      task: "Carpentry 1",
      area: "Cinema Shaho",
    },
    {
      id: 1,
      code: "DC-T728",
      success: 60,
      task: "Carpentry 1",
      area: "Cinema Shaho",
    },
    {
      id: 1,
      code: "DC-T728",
      success: 60,
      task: "Carpentry 1",
      area: "Cinema Shaho",
    },
    {
      id: 1,
      code: "DC-T728",
      success: 60,
      task: "Carpentry 1",
      area: "Cinema Shaho",
    },
  ];

  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <>
      {visibleModal && <LogCauseModal setVisibleModal={setVisibleModal} />}

      <table className="w-full">
        <thead className="bg-[#E8F3FF] text-center">
          <tr className="text-left">
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Task</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Area</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Actions</div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data?.map((item, index) => (
            <tr key={index} className="border-b border-[#F0F0F0]">
              <td className="px-4 py-3 text-center">
                <div className="flex items-center justify-center">
                  <p className="text-xs text-gray-400">{item.code}</p>
                  <p className="mx-3 font-bold text-lg">{item.task}</p>
                  <Progress
                    className="w-auto h-auto"
                    strokeColor={"green"}
                    strokeWidth={8}
                    type="circle"
                    percent={item.success}
                  />
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.area}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => {
                      setVisibleModal(true);
                    }}
                    className="px-3 py-1 text-sm text-blue-700 underline rounded-md"
                  >
                    Log Cause
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

export default TabTasksTable;
