import React, { useState } from "react";
import { FaEdit, FaPlus, FaTrashAlt } from "react-icons/fa";
import DeleteAbsenceModal from "../Modal/DeleteAbsenceModal";

import dropdownIcon from "../../assets/images/settings/drop-icon.png";
import { Button } from "antd";
import AddNewAbsenceModal from "../Modal/AddNewAbsenceModal";
import EditPayrollCategory from "../Modal/EditPayrollCategory";

const PayrollCategoriesTable = () => {
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [visibleEditPayroll, setVisibleEditPayroll] = useState(false);
  const [adminInfo, setAdminInfo] = useState({});
  const [addNewAbsence, setAddNewAbsence] = React.useState(false);
  const data = [
    {
      id: 1,
      employement: "Salary",
      name: "Admin Salary",
      agreement: "2020-22 U/O 50 CFMEU Agreement",
      rate: "(1.24x)($56.45)",
      overtime: "(1.24x)($56.45)",
      doubleTime: "(1.24x)($56.45)",
    },
    {
      id: 1,
      employement: "Salary",
      name: "Admin Salary",
      agreement: "2020-22 U/O 50 CFMEU Agreement",
      rate: "(1.24x)($56.45)",
      overtime: "(1.24x)($56.45)",
      doubleTime: "(1.24x)($56.45)",
    },
    {
      id: 1,
      employement: "Salary",
      name: "Admin Salary",
      agreement: "2020-22 U/O 50 CFMEU Agreement",
      rate: "(1.24x)($56.45)",
      overtime: "(1.24x)($56.45)",
      doubleTime: "(1.24x)($56.45)",
    },
    {
      id: 1,
      employement: "Salary",
      name: "Admin Salary",
      agreement: "2020-22 U/O 50 CFMEU Agreement",
      rate: "(1.24x)($56.45)",
      overtime: "(1.24x)($56.45)",
      doubleTime: "(1.24x)($56.45)",
    },
    {
      id: 1,
      employement: "Salary",
      name: "Admin Salary",
      agreement: "2020-22 U/O 50 CFMEU Agreement",
      rate: "(1.24x)($56.45)",
      overtime: "(1.24x)($56.45)",
      doubleTime: "(1.24x)($56.45)",
    },
    {
      id: 1,
      employement: "Salary",
      name: "Admin Salary",
      agreement: "2020-22 U/O 50 CFMEU Agreement",
      rate: "(1.24x)($56.45)",
      overtime: "(1.24x)($56.45)",
      doubleTime: "(1.24x)($56.45)",
    },
    {
      id: 1,
      employement: "Salary",
      name: "Admin Salary",
      agreement: "2020-22 U/O 50 CFMEU Agreement",
      rate: "(1.24x)($56.45)",
      overtime: "(1.24x)($56.45)",
      doubleTime: "(1.24x)($56.45)",
    },
    {
      id: 1,
      employement: "Salary",
      name: "Admin Salary",
      agreement: "2020-22 U/O 50 CFMEU Agreement",
      rate: "(1.24x)($56.45)",
      overtime: "(1.24x)($56.45)",
      doubleTime: "(1.24x)($56.45)",
    },
  ];

  const visibleDeleteModal = (name, username) => {
    setVisibleDelete(true);
    setAdminInfo({ name, username });
  };

  const visibleEditPayrollModal = () => {
    setVisibleEditPayroll(true);
  }

  const helperDataDisplay = (index) => {
    // display sibling helperData row
    const helperData = document.querySelectorAll(".helperData");
    const mainData = document.querySelectorAll(".mainData");
    helperData.forEach((item) => {
      item.classList.add("hidden");
    });
    mainData.forEach((item) => {
      item.classList.remove("active");
    });
    helperData[index].classList.toggle("hidden");
    mainData[index].classList.toggle("active");
  };

  const addAbsence = () => {
    setAddNewAbsence(true);
  }

  return (
    <>
      {visibleDelete && (
        <DeleteAbsenceModal
          setVisibleDelete={setVisibleDelete}
          adminInfo={adminInfo}
        />
      )}

      {
      addNewAbsence && (
        <AddNewAbsenceModal setAddNewAbsence={setAddNewAbsence} />
      )
      }

      {
        visibleEditPayroll && (
          <EditPayrollCategory setVisibleEditPayroll={setVisibleEditPayroll} />
        )
      }

      <table className="w-full">
        <thead className="bg-[#E8F3FF] text-center">
          <tr className="text-left">
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-start">Employement</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Name</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Agreement</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Rate</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Overtime</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">
                Double Time
              </div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Action</div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((item, index) => (
            <>
              <tr
                key={index}
                className="border-b border-[#F0F0F0] mainData cursor-pointer"
                onClick={() => {
                  helperDataDisplay(index);
                }}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center justify-start">
                    {item.employement}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center">
                    {item.name}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center">
                    {item.agreement}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col items-center justify-center">
                    <p>Base Hourly</p>
                    <p className="text-xs">{item.rate}</p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col items-center justify-center">
                    <p>Base Hourly</p>
                    <p className="text-xs">{item.overtime}</p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col items-center justify-center">
                    <p>Base Hourly</p>
                    <p className="text-xs">{item.doubleTime}</p>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center">
                    <button
                    onClick={visibleEditPayrollModal}
                      className="mx-2"
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="mx-2"
                      onClick={() => {
                        visibleDeleteModal(item.name, item.username);
                      }}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </td>
                <td className="text-right">
                  <img
                    src={dropdownIcon}
                    alt="dropdown"
                    className="dropdownIcon ml-auto mr-3"
                  />
                </td>
              </tr>

              <tr className="helperData hidden">
                <td colSpan={2} className="px-4 py-5 text-center border-b">
                  AL - 40
                </td>
                <td className="px-4 py-5 text-center border-b">
                  Annual Leave Pay
                </td>
                <td colSpan={3} className="px-4 py-5 text-center border-b">
                  Annual Leave Pay
                </td>
                <td className="px-4 py-5 text-center border-b">
                  <button
                    className="mx-2"
                    onClick={() => {
                      visibleDeleteModal(item.name, item.username);
                    }}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
                <td className="border-b text-right">
                  <Button onClick={addAbsence} className="btn-light ml-auto mr-3 text-black h-[40px] px-4 flex justify-center items-center">
                    Add{" "}
                    <div className="bg-orange-500 p-2 rounded-md text-white ml-3">
                      <FaPlus />
                    </div>
                  </Button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PayrollCategoriesTable;
