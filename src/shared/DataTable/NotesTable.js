import React from "react";
import { Link } from "react-router-dom";

const NotesTable = () => {
  const data = [
    {
      id: 1,
      recorded: "09/03/2023",
      worker: "Joel Mason",
      site: 2124,
      note: "Lep-No SI Left/Aured",
    },
    {
      id: 1,
      recorded: "09/03/2023",
      worker: "Joel Mason",
      site: 2124,
      note: "Lep-No SI Left/Aured",
    },
    {
      id: 1,
      recorded: "09/03/2023",
      worker: "Joel Mason",
      site: 2124,
      note: "Lep-No SI Left/Aured",
    },
    {
      id: 1,
      recorded: "09/03/2023",
      worker: "Joel Mason",
      site: 2124,
      note: "Lep-No SI Left/Aured",
    },
    {
      id: 1,
      recorded: "09/03/2023",
      worker: "Joel Mason",
      site: 2124,
      note: "Lep-No SI Left/Aured",
    },
    {
      id: 1,
      recorded: "09/03/2023",
      worker: "Joel Mason",
      site: 2124,
      note: "Lep-No SI Left/Aured",
    },
    {
      id: 1,
      recorded: "09/03/2023",
      worker: "Joel Mason",
      site: 2124,
      note: "Lep-No SI Left/Aured",
    },
    {
      id: 1,
      recorded: "09/03/2023",
      worker: "Joel Mason",
      site: 2124,
      note: "Lep-No SI Left/Aured",
    },
    {
      id: 1,
      recorded: "09/03/2023",
      worker: "Joel Mason",
      site: 2124,
      note: "Lep-No SI Left/Aured",
    },
    {
      id: 1,
      recorded: "09/03/2023",
      worker: "Joel Mason",
      site: 2124,
      note: "Lep-No SI Left/Aured",
    },
    {
      id: 1,
      recorded: "09/03/2023",
      worker: "Joel Mason",
      site: 2124,
      note: "Lep-No SI Left/Aured",
    },
    {
      id: 1,
      recorded: "09/03/2023",
      worker: "Joel Mason",
      site: 2124,
      note: "Lep-No SI Left/Aured",
    },
    {
      id: 1,
      recorded: "09/03/2023",
      worker: "Joel Mason",
      site: 2124,
      note: "Lep-No SI Left/Aured",
    },
    {
      id: 1,
      recorded: "09/03/2023",
      worker: "Joel Mason",
      site: 2124,
      note: "Lep-No SI Left/Aured",
    },
    {
      id: 1,
      recorded: "09/03/2023",
      worker: "Joel Mason",
      site: 2124,
      note: "Lep-No SI Left/Aured",
    },
    {
      id: 1,
      recorded: "09/03/2023",
      worker: "Joel Mason",
      site: 2124,
      note: "Lep-No SI Left/Aured",
    },
  ];
  return (
    <table className="w-full">
      <thead className="bg-[#E8F3FF] text-center">
        <tr className="text-left">
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-start">Recorded</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Worker</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Site</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Note</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">View</div>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {data?.map((item, index) => (
          <tr key={index} className="border-b border-[#F0F0F0]">
            <td className="px-4 py-3">
              <div className="flex items-center justify-start">{item.recorded}</div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.worker}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.site}
              </div>
            </td>
            <td className="px-4 py-3">
            <div className="flex items-center justify-center">
                {item.note}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                <Link to="/admin/allowances" className="text-blue-500">
                    ...
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NotesTable;
