import { Input } from "antd";
import React from "react";

const AccuralTable = () => {
  const data = [
    {
      id: 1,
      type: "(Con) RDO CW3",
      accured: -565.66,
      taken: "Taken",
      entitled: 437,
    },
    {
      id: 2,
      type: "(Con) RDO CW3",
      accured: -565.66,
      taken: "Taken",
      entitled: 437,
    },
    {
      id: 3,
      type: "(Con) RDO CW3",
      accured: -565.66,
      taken: "Taken",
      entitled: 437,
    },
    {
      id: 4,
      type: "(Con) RDO CW3",
      accured: -565.66,
      taken: "Taken",
      entitled: 437,
    },
    {
      id: 5,
      type: "(Con) RDO CW3",
      accured: -565.66,
      taken: "Taken",
      entitled: 437,
    },
    {
      id: 6,
      type: "(Con) RDO CW3",
      accured: -565.66,
      taken: "Taken",
      entitled: 437,
    },
  ];
  return (
    <table className="w-full">
      <thead className="bg-[#E8F3FF] text-center">
        <tr className="text-left">
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-start">Accrual Type</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Accured</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Taken</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Adjustments</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Entitled</div>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {data?.map((item, index) => (
          <tr key={index} className="border-b border-[#F0F0F0]">
            <td className="px-4 py-3">
              <div className="flex items-center justify-start">{item.type}</div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.accured}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.taken}
              </div>
            </td>
            <td className="px-4 py-3">
              <Input />
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.entitled}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AccuralTable;
