import React from "react";
import { FaAngleDown, FaEdit, FaTrashAlt } from "react-icons/fa";
import EditTaskModal from "../Modal/EditTaskModal";
import DeleteTaskModal from "../Modal/DeleteTaskModal";

const TasksTable = ({
  data,
  setData,
  visibleEditModal,
  visibleEdit,
  setVisibleEdit,
  visibleDelete,
  visibleDeleteModal,
  setVisibleDelete,
}) => {
  return (
    <>
      {visibleEdit && (
        <EditTaskModal
          setVisibleEdit={setVisibleEdit}
          data={data}
          setData={setData}
        />
      )}

      {visibleDelete && (
        <DeleteTaskModal
          setVisibleDelete={setVisibleDelete}
          data={data}
          setData={setData}
        />
      )}

      <table className="w-full">
        <thead className="bg-[#E8F3FF] text-center">
          <tr className="text-left">
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-start">Code</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Task Name</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">
                Categories <FaAngleDown />
              </div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Actions</div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data?.data?.map((item, index) => (
            <tr key={index} className="border-b border-[#F0F0F0]">
              <td className="px-4 py-3">
                <div className="flex items-center justify-start">
                  {item?.abbreviation}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item?.name}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item?.categories?.name}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
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

export default TasksTable;
