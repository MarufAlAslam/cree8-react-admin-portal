import React from "react";
import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditInspection from "../Modal/EditInspection";
import DeleteInspection from "../Modal/DeleteInspection";

const InspectionTable = () => {
  const data = [
    {
      id: 1,
      inspection: "Carpentry with Polishing",
      status: "Completed",
      image: "Img.jpeg",
    },
    {
      id: 1,
      inspection: "Carpentry with Polishing",
      status: "Completed",
      image: "Img.jpeg",
    },
    {
      id: 1,
      inspection: "Carpentry with Polishing",
      status: "Completed",
      image: "Img.jpeg",
    },
    {
      id: 1,
      inspection: "Carpentry with Polishing",
      status: "Completed",
      image: "Img.jpeg",
    },
    {
      id: 1,
      inspection: "Carpentry with Polishing",
      status: "Completed",
      image: "Img.jpeg",
    },
    {
      id: 1,
      inspection: "Carpentry with Polishing",
      status: "Completed",
      image: "Img.jpeg",
    },
    {
      id: 1,
      inspection: "Carpentry with Polishing",
      status: "Completed",
      image: "Img.jpeg",
    },
    {
      id: 1,
      inspection: "Carpentry with Polishing",
      status: "Completed",
      image: "Img.jpeg",
    },
    {
      id: 1,
      inspection: "Carpentry with Polishing",
      status: "Completed",
      image: "Img.jpeg",
    },
    {
      id: 1,
      inspection: "Carpentry with Polishing",
      status: "Completed",
      image: "Img.jpeg",
    },
    {
      id: 1,
      inspection: "Carpentry with Polishing",
      status: "Completed",
      image: "Img.jpeg",
    },
    {
      id: 1,
      inspection: "Carpentry with Polishing",
      status: "Completed",
      image: "Img.jpeg",
    },
    {
      id: 1,
      inspection: "Carpentry with Polishing",
      status: "Completed",
      image: "Img.jpeg",
    },
    {
      id: 1,
      inspection: "Carpentry with Polishing",
      status: "Completed",
      image: "Img.jpeg",
    },
  ];

  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);

  const visibleEditModal = () => {
    setVisibleEdit(true);
  };

  const visibleDeleteModal = () => {
    setVisibleDelete(true);
  };

  
  return (
    <>
      {visibleEdit && <EditInspection setVisibleEdit={setVisibleEdit} />}
      {visibleDelete && <DeleteInspection setVisibleDelete={setVisibleDelete} />}
      <table className="w-full">
        <thead className="bg-[#E8F3FF] text-center">
          <tr className="text-left">
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-start">Inspection</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Status</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">
                Image
              </div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">
                Select All <input type="checkbox" className="ml-2" />
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
                  {item.inspection}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.status}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.image}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  <input type="checkbox"/>
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
    </>
  );
};

export default InspectionTable;
