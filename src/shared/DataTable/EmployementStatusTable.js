import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import DeleteEmploymentStatusModal from "../Modal/DeleteEmploymentStatusModal";
import EditEmployStatusModal from "../Modal/EditEmployStatusModal";

const EmployementStatusTable = () => {
  const data = [
    {
      id: 1,
      type: "Casual ",
    },
    {
      id: 2,
      type: "Fulltime ",
    },
    {
      id: 3,
      type: "Salary ",
    },
    {
      id: 4,
      type: "Labour Hire ",
    },
    {
      id: 5,
      type: "Sub Contractor ",
    },
    {
      id: 6,
      type: "Testing",
    },
  ];

  const [modalVisible, setModalVisible] = React.useState(false);
  const [editModalVisible, setEditModalVisible] = React.useState(false); // [1
  const [userInfo, setUserInfo] = React.useState({});

  const DeleteModalVisible = (type) => {
    setModalVisible(true);
    setUserInfo({ type });
    // console.log("Edit Modal Visible")
  };

  const openEditModal = () => {
    setEditModalVisible(true);
  };
  return (
    <>
      {modalVisible && (
        <DeleteEmploymentStatusModal
          setVisibleDelete={setModalVisible}
          userInfo={userInfo}
        />
      )}

      {editModalVisible && (
        <EditEmployStatusModal setEditModalVisible={setEditModalVisible} />
      )}
      <table className="w-full lg:w-10/12 mx-auto">
        <thead className="bg-[#E8F3FF] text-center">
          <tr className="text-left">
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-start">
                Employement Status Types
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
                  {item.type}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  <button className="mx-2" onClick={openEditModal}>
                    <FaEdit />
                  </button>
                  <button
                    className="mx-2"
                    onClick={() => {
                      DeleteModalVisible(item.type);
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

export default EmployementStatusTable;
