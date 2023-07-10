import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import DeleteAgreementModal from "../Modal/DeleAgreementModal";

const AgreementTable = () => {
  const data = [
    {
      id: 1,
      emailName: "2020 - 22 U/O 50 CFMEU Agreement",
    },
    {
      id: 1,
      emailName: "2020 - 22 U/O 50 CFMEU Agreement",
    },
    {
      id: 1,
      emailName: "2020 - 22 U/O 50 CFMEU Agreement",
    },
    {
      id: 1,
      emailName: "2020 - 22 U/O 50 CFMEU Agreement",
    },
    {
      id: 1,
      emailName: "2020 - 22 U/O 50 CFMEU Agreement",
    },
    {
      id: 1,
      emailName: "2020 - 22 U/O 50 CFMEU Agreement",
    },
    {
      id: 1,
      emailName: "2020 - 22 U/O 50 CFMEU Agreement",
    },
    {
      id: 1,
      emailName: "2020 - 22 U/O 50 CFMEU Agreement",
    },
    {
      id: 1,
      emailName: "2020 - 22 U/O 50 CFMEU Agreement",
    },
    {
      id: 1,
      emailName: "2020 - 22 U/O 50 CFMEU Agreement",
    },
    {
      id: 1,
      emailName: "2020 - 22 U/O 50 CFMEU Agreement",
    },
    {
      id: 1,
      emailName: "2020 - 22 U/O 50 CFMEU Agreement",
    },
    {
      id: 1,
      emailName: "2020 - 22 U/O 50 CFMEU Agreement",
    },
    {
      id: 1,
      emailName: "2020 - 22 U/O 50 CFMEU Agreement",
    },
    {
      id: 1,
      emailName: "2020 - 22 U/O 50 CFMEU Agreement",
    },
    {
      id: 1,
      emailName: "2020 - 22 U/O 50 CFMEU Agreement",
    },
  ];

  const [modalVisible, setModalVisible] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({});

  const DeleteModalVisible = (emailName) => {
    setModalVisible(true);
    setUserInfo({ emailName });
    // console.log("Edit Modal Visible")
  };
  return (
    <>
      {modalVisible && (
        <DeleteAgreementModal
          setVisibleDelete={setModalVisible}
          userInfo={userInfo}
        />
      )}
      <table className="w-full lg:w-10/12 mx-auto">
        <thead className="bg-[#E8F3FF] text-center">
          <tr className="text-left">
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-start">
                Induction Disclaimers Name
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
                  {item.emailName}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  <Link
                    to={"/admin/settings/payroll/agreements/edit"}
                    className="mx-2"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    className="mx-2"
                    onClick={() => {
                      DeleteModalVisible(item.emailName);
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

export default AgreementTable;
