import React from "react";

const SingleWorkersWorksiteTable = () => {
  const data = [
    {
      id: 1,
      worksite: "South City Cinema",
      date: "08-02-2022",
      Task: "PC-L Partition OR Ceiling Lining Including Bulkheads",
      shiftHours: "06:30-14:30",
      totalHours: "8",
      status: "Pending",
    },
    {
      id: 1,
      worksite: "South City Cinema",
      date: "08-02-2022",
      Task: "PC-L Partition OR Ceiling Lining Including Bulkheads",
      shiftHours: "06:30-14:30",
      totalHours: "8",
      status: "Pending",
    },
    {
      id: 1,
      worksite: "South City Cinema",
      date: "08-02-2022",
      Task: "PC-L Partition OR Ceiling Lining Including Bulkheads",
      shiftHours: "06:30-14:30",
      totalHours: "8",
      status: "Pending",
    },
    {
      id: 1,
      worksite: "South City Cinema",
      date: "08-02-2022",
      Task: "PC-L Partition OR Ceiling Lining Including Bulkheads",
      shiftHours: "06:30-14:30",
      totalHours: "8",
      status: "Pending",
    },
    {
      id: 1,
      worksite: "South City Cinema",
      date: "08-02-2022",
      Task: "PC-L Partition OR Ceiling Lining Including Bulkheads",
      shiftHours: "06:30-14:30",
      totalHours: "8",
      status: "Pending",
    },
    {
      id: 1,
      worksite: "South City Cinema",
      date: "08-02-2022",
      Task: "PC-L Partition OR Ceiling Lining Including Bulkheads",
      shiftHours: "06:30-14:30",
      totalHours: "8",
      status: "Pending",
    },
    {
      id: 1,
      worksite: "South City Cinema",
      date: "08-02-2022",
      Task: "PC-L Partition OR Ceiling Lining Including Bulkheads",
      shiftHours: "06:30-14:30",
      totalHours: "8",
      status: "Pending",
    },
    {
      id: 1,
      worksite: "South City Cinema",
      date: "08-02-2022",
      Task: "PC-L Partition OR Ceiling Lining Including Bulkheads",
      shiftHours: "06:30-14:30",
      totalHours: "8",
      status: "Pending",
    },
    {
      id: 1,
      worksite: "South City Cinema",
      date: "08-02-2022",
      Task: "PC-L Partition OR Ceiling Lining Including Bulkheads",
      shiftHours: "06:30-14:30",
      totalHours: "8",
      status: "Pending",
    },
    {
      id: 1,
      worksite: "South City Cinema",
      date: "08-02-2022",
      Task: "PC-L Partition OR Ceiling Lining Including Bulkheads",
      shiftHours: "06:30-14:30",
      totalHours: "8",
      status: "Pending",
    },
    {
      id: 1,
      worksite: "South City Cinema",
      date: "08-02-2022",
      Task: "PC-L Partition OR Ceiling Lining Including Bulkheads",
      shiftHours: "06:30-14:30",
      totalHours: "8",
      status: "Pending",
    },
    {
      id: 1,
      worksite: "South City Cinema",
      date: "08-02-2022",
      Task: "PC-L Partition OR Ceiling Lining Including Bulkheads",
      shiftHours: "06:30-14:30",
      totalHours: "8",
      status: "Pending",
    },
    {
      id: 1,
      worksite: "South City Cinema",
      date: "08-02-2022",
      Task: "PC-L Partition OR Ceiling Lining Including Bulkheads",
      shiftHours: "06:30-14:30",
      totalHours: "8",
      status: "Pending",
    },
  ];
  return (
    <table className="w-full">
      <thead className="bg-[#E8F3FF] text-center">
        <tr className="text-left">
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-start">Worksite</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Date</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Task</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Shift Hours</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Status</div>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {data?.map((item, index) => (
          <tr key={index} className="border-b border-[#F0F0F0]">
            <td className="px-4 py-3">
              <div className="flex items-center justify-start">
                {item.worksite}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.date}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.Task}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.shiftHours}({item.totalHours}hr)
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.status}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SingleWorkersWorksiteTable;
