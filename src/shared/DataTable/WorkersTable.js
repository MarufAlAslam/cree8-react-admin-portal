import React from "react";
import { FaCaretDown, FaEdit, FaInfoCircle, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const WorkersTable = ({ hasStatus }) => {
  const data = [
    {
      id: 1,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "123",
      joined: "12/12/2020",
      shiftworked: "564",
      hoursWorked: "16452 hrs",
      productivityAvrgarage: "9.56 over",
      hourlyAvetage: "9.56 over",
      induction: "company handbook",
      status: "Active",
    },
    {
      id: 2,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Salary",
      cardId: "456",
      joined: "12/12/2020",
      shiftworked: "564",
      hoursWorked: "16452 hrs",
      productivityAvrgarage: "9.56 over",
      hourlyAvetage: "9.56 over",
      induction: "company handbook",
      status: "Active",
    },
    {
      id: 3,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "789",
      joined: "12/12/2020",
      shiftworked: "564",
      hoursWorked: "16452 hrs",
      productivityAvrgarage: "9.56 over",
      hourlyAvetage: "9.56 over",
      induction: "company handbook",
      status: "Active",
    },
    {
      id: 4,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "123",
      joined: "12/12/2020",
      shiftworked: "564",
      hoursWorked: "16452 hrs",
      productivityAvrgarage: "9.56 over",
      hourlyAvetage: "9.56 over",
      induction: "company handbook",
      status: "Active",
    },
    {
      id: 5,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "456",
      joined: "12/12/2020",
      shiftworked: "564",
      hoursWorked: "16452 hrs",
      productivityAvrgarage: "9.56 over",
      hourlyAvetage: "9.56 over",
      induction: "company handbook",
      status: "Active",
    },
    {
      id: 6,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "789",
      joined: "12/12/2020",
      shiftworked: "564",
      hoursWorked: "16452 hrs",
      productivityAvrgarage: "9.56 over",
      hourlyAvetage: "9.56 over",
      induction: "company handbook",
      status: "Active",
    },
    {
      id: 7,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "123",
      joined: "12/12/2020",
      shiftworked: "564",
      hoursWorked: "16452 hrs",
      productivityAvrgarage: "9.56 over",
      hourlyAvetage: "9.56 over",
      induction: "company handbook",
      status: "Active",
    },
    {
      id: 8,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "456",
      joined: "12/12/2020",
      shiftworked: "564",
      hoursWorked: "16452 hrs",
      productivityAvrgarage: "9.56 over",
      hourlyAvetage: "9.56 over",
      induction: "company handbook",
      status: "Active",
    },
    {
      id: 9,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "789",
      joined: "12/12/2020",
      shiftworked: "564",
      hoursWorked: "16452 hrs",
      productivityAvrgarage: "9.56 over",
      hourlyAvetage: "9.56 over",
      induction: "company handbook",
      status: "Active",
    },
    {
      id: 10,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "123",
      joined: "12/12/2020",
      shiftworked: "564",
      hoursWorked: "16452 hrs",
      productivityAvrgarage: "9.56 over",
      hourlyAvetage: "9.56 over",
      induction: "company handbook",
      status: "Active",
    },
    {
      id: 1,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "456",
      joined: "12/12/2020",
      shiftworked: "564",
      hoursWorked: "16452 hrs",
      productivityAvrgarage: "9.56 over",
      hourlyAvetage: "9.56 over",
      induction: "company handbook",
      status: "Active",
    },
    {
      id: 11,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "789",
      joined: "12/12/2020",
      shiftworked: "564",
      hoursWorked: "16452 hrs",
      productivityAvrgarage: "9.56 over",
      hourlyAvetage: "9.56 over",
      induction: "company handbook",
      status: "Active",
    },
    {
      id: 12,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "123",
      joined: "12/12/2020",
      shiftworked: "564",
      hoursWorked: "16452 hrs",
      productivityAvrgarage: "9.56 over",
      hourlyAvetage: "9.56 over",
      induction: "company handbook",
      status: "Active",
    },
    {
      id: 13,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "123",
      joined: "12/12/2020",
      shiftworked: "564",
      hoursWorked: "16452 hrs",
      productivityAvrgarage: "9.56 over",
      hourlyAvetage: "9.56 over",
      induction: "company handbook",
      status: "Active",
    },
  ];
  return (
    <table className="table-auto w-full">
      <thead className="bg-[#E8F3FF]">
        <tr>
          <th className="px-4 py-3">
            <div className="flex items-center justify-center">
              Worker Name <FaCaretDown />
            </div>
          </th>
          <th className="px-4 py-3">
            <div className="flex items-center justify-center">
              Email <FaCaretDown />
            </div>
          </th>
          {!hasStatus && (
            <th className="px-4 py-3">
              <div className="flex items-center justify-center">
                Employment <FaCaretDown />
              </div>
            </th>
          )}

          <th className="px-4 py-3">
            <div className="flex items-center justify-center">
              Card Id <FaCaretDown />
            </div>
          </th>
          {hasStatus && (
            <th className="px-4 py-3">
              <div className="flex items-center justify-center">
                Status <FaCaretDown />
              </div>
            </th>
          )}
          <th className="px-4 py-3">
            <div className="flex items-center justify-center">
              Action <FaCaretDown />
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {data?.map((item, index) => (
          <tr key={index} className="border-b border-[#F0F0F0]">
            <td className="px-4 py-3">
              <Link
                to={"/admin/personnel/workers/details"}
                state={{ data: item }}
                className="flex items-center justify-center"
              >
                {item.name}
              </Link>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.email}
              </div>
            </td>
            {!hasStatus && (
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  {item.employment}
                </div>
              </td>
            )}
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.cardId}
              </div>
            </td>
            {hasStatus && (
              <td className="px-4 py-3">
                <div className="flex items-center justify-center">
                  Terminated
                </div>
              </td>
            )}
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                <button className="mx-2">
                  <FaEdit />
                </button>
                <button className="mx-2">
                  <FaInfoCircle />
                </button>
                <button className="mx-2">
                  <FaTrashAlt />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WorkersTable;
