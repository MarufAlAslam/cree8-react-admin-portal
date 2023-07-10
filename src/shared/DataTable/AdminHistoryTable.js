import { Dropdown } from "antd";
import React from "react";
import { FaCaretDown, FaEdit, FaSort } from "react-icons/fa";
import { Link } from "react-router-dom";
import WorksiteDropdown from "../../pages/Admin/Settings/AdministratorAccounts/WorksiteDropdown";

const AdminHistoryTable = () => {
  const data = [
    /*  {
      id: 1,
      date: "11/04/2023",
      worksite: "South Cinemas",
      worker: "Lewis Williams",
    },
    {
      id: 1,
      date: "11/04/2023",
      worksite: "South Cinemas",
      worker: "Lewis Williams",
    },
    {
      id: 1,
      date: "11/04/2023",
      worksite: "South Cinemas",
      worker: "Lewis Williams",
    },
    {
      id: 1,
      date: "11/04/2023",
      worksite: "South Cinemas",
      worker: "Lewis Williams",
    },
    {
      id: 1,
      date: "11/04/2023",
      worksite: "South Cinemas",
      worker: "Lewis Williams",
    },
    {
      id: 1,
      date: "11/04/2023",
      worksite: "South Cinemas",
      worker: "Lewis Williams",
    },
    {
      id: 1,
      date: "11/04/2023",
      worksite: "South Cinemas",
      worker: "Lewis Williams",
    },
    {
      id: 1,
      date: "11/04/2023",
      worksite: "South Cinemas",
      worker: "Lewis Williams",
    },
    {
      id: 1,
      date: "11/04/2023",
      worksite: "South Cinemas",
      worker: "Lewis Williams",
    },
    {
      id: 1,
      date: "11/04/2023",
      worksite: "South Cinemas",
      worker: "Lewis Williams",
    },
    {
      id: 1,
      date: "11/04/2023",
      worksite: "South Cinemas",
      worker: "Lewis Williams",
    },
    {
      id: 1,
      date: "11/04/2023",
      worksite: "South Cinemas",
      worker: "Lewis Williams",
    },
    {
      id: 1,
      date: "11/04/2023",
      worksite: "South Cinemas",
      worker: "Lewis Williams",
    },
    {
      id: 1,
      date: "11/04/2023",
      worksite: "South Cinemas",
      worker: "Lewis Williams",
    }, */
  ];

  const items = [
    {
      key: "1",
      label: <WorksiteDropdown />,
    },
  ];

  return (
    <>
      <table className="w-full">
        <thead className="bg-[#E8F3FF] text-center">
          <tr className="text-left">
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">
                Date <FaCaretDown />
              </div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">
                <Dropdown menu={{ items }}>
                  <button className="flex items-center">
                    Worksite <FaSort />
                  </button>
                </Dropdown>
              </div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Worker</div>
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
                <div className="flex items-center justify-center">
                  {item.date}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.worksite}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.worker}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex justify-center items-center">
                  <Link
                    to="/admin/settings/users/admin/history/edit"
                    className="mx-2"
                  >
                    <FaEdit />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminHistoryTable;
