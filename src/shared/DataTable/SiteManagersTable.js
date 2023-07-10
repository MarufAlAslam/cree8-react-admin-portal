import React, { useState } from "react";
import { FaCaretDown, FaEdit, FaTrashAlt } from "react-icons/fa";
import { BiHistory } from "react-icons/bi";
import EditSiteManagerDetailsModal from "../Modal/EditSiteManagerDetailsModal";
import { Link } from "react-router-dom";
import DeleteSiteManagerModal from "../Modal/DeleteSiteManagerModal";

const SiteManagerTable = ({ data, setData, handle }) => {
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const visibleEditModal = (item, index) => {
    setData({
      ...data,
      selectedData: { ...item, index: index },
    });
    setVisibleEdit(true);
  };

  const visibleDeleteModal = (item, index) => {
    setData({
      ...data,
      selectedData: { ...item, index: index },
    });
    setVisibleDelete(true);
  };
  return (
    <>
      {visibleEdit && (
        <EditSiteManagerDetailsModal
          setVisibleEdit={setVisibleEdit}
          data={data}
          setData={setData}
          hanle={handle}
        />
      )}

      {visibleDelete && (
        <DeleteSiteManagerModal
          setVisibleDelete={setVisibleDelete}
          data={data}
          setData={setData}
          handle={handle}
        />
      )}
      <table className="w-full">
        <thead className="bg-[#E8F3FF] text-center">
          <tr className="text-left">
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">
                Name <FaCaretDown />
              </div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">
                User Name <FaCaretDown />
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
                <div className="flex items-center justify-center">
                  {item.name}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.email}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  <button
                    className="mx-2"
                    onClick={(e) => visibleEditModal(item, index)}
                  >
                    <FaEdit />
                  </button>
                  <Link
                    to="/admin/personnel/site-managers/history"
                    className="mx-2"
                  >
                    <BiHistory />
                  </Link>
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

export default SiteManagerTable;
