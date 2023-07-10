import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import DeleteAbsenceModal from "../Modal/DeleteAbsenceModal";

const AbsencesTable = () => {
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [adminInfo, setAdminInfo] = useState({});
  const data = [
    {
      id: 1,
      name: "RDO Salary",
      accured: "RDO-Base Accrued",
      taken: "RDO-Base Taken",
      defaultHours: "7.2 Hours",
      applyAfterWeekday: "8 Hours",
      applyAfterWeekend: "24 Hours",
      entitlement: "Yes",
    },
    {
      id: 1,
      name: "RDO Salary",
      accured: "RDO-Base Accrued",
      taken: "RDO-Base Taken",
      defaultHours: "7.2 Hours",
      applyAfterWeekday: "8 Hours",
      applyAfterWeekend: "24 Hours",
      entitlement: "Yes",
    },
    {
      id: 1,
      name: "RDO Salary",
      accured: "RDO-Base Accrued",
      taken: "RDO-Base Taken",
      defaultHours: "7.2 Hours",
      applyAfterWeekday: "8 Hours",
      applyAfterWeekend: "24 Hours",
      entitlement: "Yes",
    },
    {
      id: 1,
      name: "RDO Salary",
      accured: "RDO-Base Accrued",
      taken: "RDO-Base Taken",
      defaultHours: "7.2 Hours",
      applyAfterWeekday: "8 Hours",
      applyAfterWeekend: "24 Hours",
      entitlement: "Yes",
    },
    {
      id: 1,
      name: "RDO Salary",
      accured: "RDO-Base Accrued",
      taken: "RDO-Base Taken",
      defaultHours: "7.2 Hours",
      applyAfterWeekday: "8 Hours",
      applyAfterWeekend: "24 Hours",
      entitlement: "Yes",
    },
    {
      id: 1,
      name: "RDO Salary",
      accured: "RDO-Base Accrued",
      taken: "RDO-Base Taken",
      defaultHours: "7.2 Hours",
      applyAfterWeekday: "8 Hours",
      applyAfterWeekend: "24 Hours",
      entitlement: "Yes",
    },
    {
      id: 1,
      name: "RDO Salary",
      accured: "RDO-Base Accrued",
      taken: "RDO-Base Taken",
      defaultHours: "7.2 Hours",
      applyAfterWeekday: "8 Hours",
      applyAfterWeekend: "24 Hours",
      entitlement: "Yes",
    },
    {
      id: 1,
      name: "RDO Salary",
      accured: "RDO-Base Accrued",
      taken: "RDO-Base Taken",
      defaultHours: "7.2 Hours",
      applyAfterWeekday: "8 Hours",
      applyAfterWeekend: "24 Hours",
      entitlement: "Yes",
    },
    {
      id: 1,
      name: "RDO Salary",
      accured: "RDO-Base Accrued",
      taken: "RDO-Base Taken",
      defaultHours: "7.2 Hours",
      applyAfterWeekday: "8 Hours",
      applyAfterWeekend: "24 Hours",
      entitlement: "Yes",
    },
    {
      id: 1,
      name: "RDO Salary",
      accured: "RDO-Base Accrued",
      taken: "RDO-Base Taken",
      defaultHours: "7.2 Hours",
      applyAfterWeekday: "8 Hours",
      applyAfterWeekend: "24 Hours",
      entitlement: "Yes",
    },
    {
      id: 1,
      name: "RDO Salary",
      accured: "RDO-Base Accrued",
      taken: "RDO-Base Taken",
      defaultHours: "7.2 Hours",
      applyAfterWeekday: "8 Hours",
      applyAfterWeekend: "24 Hours",
      entitlement: "Yes",
    },
    {
      id: 1,
      name: "RDO Salary",
      accured: "RDO-Base Accrued",
      taken: "RDO-Base Taken",
      defaultHours: "7.2 Hours",
      applyAfterWeekday: "8 Hours",
      applyAfterWeekend: "24 Hours",
      entitlement: "Yes",
    },
    {
      id: 1,
      name: "RDO Salary",
      accured: "RDO-Base Accrued",
      taken: "RDO-Base Taken",
      defaultHours: "7.2 Hours",
      applyAfterWeekday: "8 Hours",
      applyAfterWeekend: "24 Hours",
      entitlement: "Yes",
    },
    {
      id: 1,
      name: "RDO Salary",
      accured: "RDO-Base Accrued",
      taken: "RDO-Base Taken",
      defaultHours: "7.2 Hours",
      applyAfterWeekday: "8 Hours",
      applyAfterWeekend: "24 Hours",
      entitlement: "Yes",
    },
    {
      id: 1,
      name: "RDO Salary",
      accured: "RDO-Base Accrued",
      taken: "RDO-Base Taken",
      defaultHours: "7.2 Hours",
      applyAfterWeekday: "8 Hours",
      applyAfterWeekend: "24 Hours",
      entitlement: "Yes",
    },
    {
      id: 1,
      name: "RDO Salary",
      accured: "RDO-Base Accrued",
      taken: "RDO-Base Taken",
      defaultHours: "7.2 Hours",
      applyAfterWeekday: "8 Hours",
      applyAfterWeekend: "24 Hours",
      entitlement: "Yes",
    },
  ];

  const visibleDeleteModal = (name, username) => {
    setVisibleDelete(true);
    setAdminInfo({ name, username });
  };
  return (
    <>
      {visibleDelete && (
        <DeleteAbsenceModal
          setVisibleDelete={setVisibleDelete}
          adminInfo={adminInfo}
        />
      )}

      <table className="w-full">
        <thead className="bg-[#E8F3FF] text-center">
          <tr className="text-left">
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-start">Name</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Accured</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Taken</div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">
                Default Hours
              </div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">
                Apply After <br />
                <span className="text-xs">(Weekday)</span>
              </div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">
                Apply After <br />
                <span className="text-xs">(Weekend)</span>
              </div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">
                Entitlement
              </div>
            </th>
            <th className=" px-4 py-3 ">
              <div className="flex items-center justify-center">Action</div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((item, index) => (
            <tr key={index} className="border-b border-[#F0F0F0]">
              <td className="px-4 py-3">
                <div className="flex items-center justify-start">
                  {item.name}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.accured}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.taken}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.defaultHours}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.applyAfterWeekday}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.applyAfterWeekend}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.entitlement}
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  <Link to={"/admin/settings/payroll/absences/edit"} className="mx-2">
                    <FaEdit />
                  </Link>
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
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AbsencesTable;
