import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import EditSiteAllowanceModal from "../Modal/EditSiteAllowanceModal";

const SiteAllowanceTable = () => {
  const data = [
    {
      id: 1,
      name: "ALW Multi 16 to 30 0",
      rate: 1.64,
    },
    {
      id: 1,
      name: "ALW Multi 16 to 30 0",
      rate: 1.64,
    },
    {
      id: 1,
      name: "ALW Multi 16 to 30 0",
      rate: 1.64,
    },
    {
      id: 1,
      name: "ALW Multi 16 to 30 0",
      rate: 1.64,
    },
    {
      id: 1,
      name: "ALW Multi 16 to 30 0",
      rate: 1.64,
    },
    {
      id: 1,
      name: "ALW Multi 16 to 30 0",
      rate: 1.64,
    },
    {
      id: 1,
      name: "ALW Multi 16 to 30 0",
      rate: 1.64,
    },
    {
      id: 1,
      name: "ALW Multi 16 to 30 0",
      rate: 1.64,
    },
    {
      id: 1,
      name: "ALW Multi 16 to 30 0",
      rate: 1.64,
    },
    {
      id: 1,
      name: "ALW Multi 16 to 30 0",
      rate: 1.64,
    },
    {
      id: 1,
      name: "ALW Multi 16 to 30 0",
      rate: 1.64,
    },
    {
      id: 1,
      name: "ALW Multi 16 to 30 0",
      rate: 1.64,
    },
    {
      id: 1,
      name: "ALW Multi 16 to 30 0",
      rate: 1.64,
    },
    {
      id: 1,
      name: "ALW Multi 16 to 30 0",
      rate: 1.64,
    },
    {
      id: 1,
      name: "ALW Multi 16 to 30 0",
      rate: 1.64,
    },
    {
      id: 1,
      name: "ALW Multi 16 to 30 0",
      rate: 1.64,
    },
    {
      id: 1,
      name: "ALW Multi 16 to 30 0",
      rate: 1.64,
    },
    {
      id: 1,
      name: "ALW Multi 16 to 30 0",
      rate: 1.64,
    },
  ];

  const [visibleEdit, setVisibleEdit] = useState(false);

  const handleEdit = () => {
    setVisibleEdit(true);
  };
  return (
    <>
      {visibleEdit && (
        <EditSiteAllowanceModal setVisibleEdit={setVisibleEdit} />
      )}
      <table className="w-full">
        <thead className="bg-[#E8F3FF] text-center">
          <tr className="text-left">
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-start">Name</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">
                Hourly Rate
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
                <div className="flex items-center justify-start">
                  {item.name}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.rate}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  <button
                    onClick={handleEdit}
                    className="text-black bg-transparent border-none"
                  >
                    <FaEdit />
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

export default SiteAllowanceTable;
