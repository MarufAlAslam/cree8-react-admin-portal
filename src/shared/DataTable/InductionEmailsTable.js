import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import DeleteEmailModal from "../Modal/DeleteEmailModal";
import { DeleteEmail, GetEmail } from "../../helper/setup/induction/email";

const InductionEmailsTable = ({
  email,
  setEmail,
  modalVisible,
  setModalVisible,
  handleEmail,
  DeleteModalVisible,
}) => {
  return (
    <>
      {modalVisible && (
        <DeleteEmailModal
          setVisibleDelete={setModalVisible}
          data={email}
          handle={handleEmail}
        />
      )}
      <table className="w-full">
        <thead className="bg-[#E8F3FF] text-center">
          <tr className="text-left">
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-start">
                Induction Email Name
              </div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Actions</div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {email?.data?.map((item, index) => (
            <tr key={index} className="border-b border-[#F0F0F0]">
              <td className="px-4 py-3">
                <div className="flex items-center justify-start">
                  {item?.subject}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  <Link
                    to={`/admin/settings/induction/emails/edit/${item?.id}`}
                    className="mx-2"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    className="mx-2"
                    onClick={() => {
                      DeleteModalVisible(item, index);
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

export default InductionEmailsTable;
