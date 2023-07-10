import React from "react";
import { Link } from "react-router-dom";

const WorkersTableSiteManager = ({ hasStatus }) => {
  const data = [
    {
      id: 1,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "123",
      status: "Casual",
    },
    {
      id: 1,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "123",
      status: "Casual",
    },
    {
      id: 1,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "123",
      status: "Casual",
    },
    {
      id: 1,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "123",
      status: "Casual",
    },
    {
      id: 1,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "123",
      status: "Casual",
    },
    {
      id: 1,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "123",
      status: "Casual",
    },
    {
      id: 1,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "123",
      status: "Casual",
    },
    {
      id: 1,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "123",
      status: "Casual",
    },
    {
      id: 1,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "123",
      status: "Casual",
    },
    {
      id: 1,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "123",
      status: "Casual",
    },
    {
      id: 1,
      name: "John Work",
      email: "John@cree8.com",
      employment: "Casual",
      cardId: "123",
      status: "Casual",
    },
  ];

  return (
    <>
      <table className="table-auto w-full">
        <tbody className="bg-white">
          {data?.map((item, index) => (
            <tr key={index} className="border-b border-[#F0F0F0]">
              <td className="px-4 py-3">
                <Link
                  state={{ data: item }}
                  className="flex flex-col items-start justify-center"
                >
                  <span className="text-xl">{item.name}</span>
                  <span className="text-xs">{item.email}</span>
                </Link>
              </td>
              <td className="px-4 py-3">
                <div className="flex flex-col items-end justify-center">
                  <span className="text-sm"><span className="text-[#A1A1A1]">Card ID:</span> {item.cardId}</span>
                  <span className="text-sm"><span className="text-[#A1A1A1]">Status:</span> {item.status}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default WorkersTableSiteManager;
