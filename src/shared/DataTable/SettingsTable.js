import React, { useState } from "react";
import { FaCaretDown, FaEdit, FaTrashAlt } from "react-icons/fa";
import {BiHistory} from "react-icons/bi"
import {Link} from "react-router-dom"
import EditAdminModal from "../Modal/EditAdminModal";
import DeleteAdminModal from "../Modal/DeleteAdminModal";

const SettingsTable = () => {
  const data = [
    {
      id: 1,
      name: "Test Name",
      username: "Adrian@cree8.com",
    },
    {
      id: 2,
      name: "Adrian Newton",
      username: "Adrian@cree8.com",
    },
    {
      id: 3,
      name: "Adrian Newton",
      username: "Adrian@cree8.com",
    },
    {
      id: 4,
      name: "Adrian Newton",
      username: "Adrian@cree8.com",
    },
    {
      id: 5,
      name: "Adrian Newton",
      username: "Adrian@cree8.com",
    },
    {
      id: 6,
      name: "Adrian Newton",
      username: "Adrian@cree8.com",
    },
    {
      id: 7,
      name: "Adrian Newton",
      username: "Adrian@cree8.com",
    },
    {
      id: 8,
      name: "Adrian Newton",
      username: "Adrian@cree8.com",
    },
    {
      id: 8,
      name: "Adrian Newton",
      username: "Adrian@cree8.com",
    },
    {
      id: 8,
      name: "Adrian Newton",
      username: "Adrian@cree8.com",
    },
    {
      id: 8,
      name: "Adrian Newton",
      username: "Adrian@cree8.com",
    },
    {
      id: 8,
      name: "Adrian Newton",
      username: "Adrian@cree8.com",
    },
    {
      id: 8,
      name: "Adrian Newton",
      username: "Adrian@cree8.com",
    },
    {
      id: 8,
      name: "Adrian Newton",
      username: "Adrian@cree8.com",
    },
    {
      id: 8,
      name: "Adrian Newton",
      username: "Adrian@cree8.com",
    },
    {
      id: 8,
      name: "Adrian Newton",
      username: "Adrian@cree8.com",
    },
    {
      id: 8,
      name: "Adrian Newton",
      username: "Adrian@cree8.com",
    },
    {
      id: 8,
      name: "Adrian Newton",
      username: "Adrian@cree8.com",
    },
    {
      id: 8,
      name: "Adrian Newton",
      username: "Adrian@cree8.com",
    },
  ];

  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [adminInfo, setAdminInfo] = useState({});
  const visibleEditModal = () => {
    setVisibleEdit(true);
  };

  const visibleDeleteModal = (name, username) => {
    setVisibleDelete(true);
    setAdminInfo({ name, username });
  }
  return (
    <>
    {
      visibleEdit && (
        <EditAdminModal setVisibleEdit={setVisibleEdit}/>
      )
    }

    {
      visibleDelete && (
        <DeleteAdminModal setVisibleDelete={setVisibleDelete} adminInfo={adminInfo}/>
      )
    }
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
          {data.map((item, index) => (
            <tr key={index} className="border-b border-[#F0F0F0]">
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.name}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.username}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  <button className="mx-2" onClick={visibleEditModal}>
                    <FaEdit />
                  </button>
                  <Link to="/admin/personnel/site-managers/history" className="mx-2">
                    <BiHistory />
                  </Link>
                  <button className="mx-2" onClick={()=>{
                    visibleDeleteModal(item.name, item.username)
                  }}>
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

export default SettingsTable;
