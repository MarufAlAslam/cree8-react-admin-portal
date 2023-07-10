import React, { useState } from "react";
import LogCauseModal from "../Modal/LogCauseModal";

const TimesheetTable = () => {
  const data = [
    {
      id: 1,
      day: "Wednessday",
      date: "12/12/2021",
      workers: 39,
      hours: 234,
      tasks: 24,
      income: 234,
    },
    {
      id: 1,
      day: "Wednessday",
      date: "12/12/2021",
      workers: 39,
      hours: 234,
      tasks: 24,
      income: 234,
    },
    {
      id: 1,
      day: "Wednessday",
      date: "12/12/2021",
      workers: 39,
      hours: 234,
      tasks: 24,
      income: 234,
    },
    {
      id: 1,
      day: "Wednessday",
      date: "12/12/2021",
      workers: 39,
      hours: 234,
      tasks: 24,
      income: 234,
    },
    {
      id: 1,
      day: "Wednessday",
      date: "12/12/2021",
      workers: 39,
      hours: 234,
      tasks: 24,
      income: 234,
    },
    {
      id: 1,
      day: "Wednessday",
      date: "12/12/2021",
      workers: 39,
      hours: 234,
      tasks: 24,
      income: 234,
    },
    {
      id: 1,
      day: "Wednessday",
      date: "12/12/2021",
      workers: 39,
      hours: 234,
      tasks: 24,
      income: 234,
    },
    {
      id: 1,
      day: "Wednessday",
      date: "12/12/2021",
      workers: 39,
      hours: 234,
      tasks: 24,
      income: 234,
    },
    {
      id: 1,
      day: "Wednessday",
      date: "12/12/2021",
      workers: 39,
      hours: 234,
      tasks: 24,
      income: 234,
    },
    {
      id: 1,
      day: "Wednessday",
      date: "12/12/2021",
      workers: 39,
      hours: 234,
      tasks: 24,
      income: 234,
    },
    {
      id: 1,
      day: "Wednessday",
      date: "12/12/2021",
      workers: 39,
      hours: 234,
      tasks: 24,
      income: 234,
    },
    {
      id: 1,
      day: "Wednessday",
      date: "12/12/2021",
      workers: 39,
      hours: 234,
      tasks: 24,
      income: 234,
    },
    {
      id: 1,
      day: "Wednessday",
      date: "12/12/2021",
      workers: 39,
      hours: 234,
      tasks: 24,
      income: 234,
    },
    {
      id: 1,
      day: "Wednessday",
      date: "12/12/2021",
      workers: 39,
      hours: 234,
      tasks: 24,
      income: 234,
    },
    {
      id: 1,
      day: "Wednessday",
      date: "12/12/2021",
      workers: 39,
      hours: 234,
      tasks: 24,
      income: 234,
    },
    {
      id: 1,
      day: "Wednessday",
      date: "12/12/2021",
      workers: 39,
      hours: 234,
      tasks: 24,
      income: 234,
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
              <div className="flex items-center justify-center">Day</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Date</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Workers</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Hours</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Tasks</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">$</div>
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
                  {item.day}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.date}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.workers}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.hours}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.tasks}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.income}
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
                    Details
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

export default TimesheetTable;
