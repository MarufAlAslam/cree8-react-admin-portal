import React from "react";

const OverflowTable = () => {
  const data = [
    {
      id: 1,
      date: "01/01/2021",
      shiftTime: "8 hours",
      worker: "John Doe",
    },
    {
      id: 1,
      date: "01/01/2021",
      shiftTime: "8 hours",
      worker: "John Doe",
    },
    {
      id: 1,
      date: "01/01/2021",
      shiftTime: "8 hours",
      worker: "John Doe",
    },
    {
      id: 1,
      date: "01/01/2021",
      shiftTime: "8 hours",
      worker: "John Doe",
    },
    {
      id: 1,
      date: "01/01/2021",
      shiftTime: "8 hours",
      worker: "John Doe",
    },
    {
      id: 1,
      date: "01/01/2021",
      shiftTime: "8 hours",
      worker: "John Doe",
    },
    {
      id: 1,
      date: "01/01/2021",
      shiftTime: "8 hours",
      worker: "John Doe",
    },
    {
      id: 1,
      date: "01/01/2021",
      shiftTime: "8 hours",
      worker: "John Doe",
    },
    {
      id: 1,
      date: "01/01/2021",
      shiftTime: "8 hours",
      worker: "John Doe",
    },
    {
      id: 1,
      date: "01/01/2021",
      shiftTime: "8 hours",
      worker: "John Doe",
    },
    {
      id: 1,
      date: "01/01/2021",
      shiftTime: "8 hours",
      worker: "John Doe",
    },
  ];
  return (
    <table className="w-full">
      <thead className="bg-[#E8F3FF] text-center">
        <tr className="text-left">
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Date</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Shift Time</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Worker</div>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {data?.map((item, index) => (
          <tr key={index} className="border-b border-[#F0F0F0]">
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">{item.date}</div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.shiftTime}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.worker}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OverflowTable;
