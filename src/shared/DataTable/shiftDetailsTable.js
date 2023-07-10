import React from "react";
import { FaLock } from "react-icons/fa";

const ShiftDetailsTable = () => {
  const data = [
    {
      id: 1,
      worker: "John Doe",
      sat: "Absent",
      sun: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      mon: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      tue: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      wed: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      thu: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      fri: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
    },
    {
      id: 1,
      worker: "John Doe",
      sat: "Absent",
      sun: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      mon: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      tue: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      wed: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      thu: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      fri: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
    },
    {
      id: 1,
      worker: "John Doe",
      sat: "Absent",
      sun: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      mon: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      tue: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      wed: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      thu: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      fri: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
    },
    {
      id: 1,
      worker: "John Doe",
      sat: "Absent",
      sun: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      mon: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      tue: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      wed: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      thu: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      fri: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
    },
    {
      id: 1,
      worker: "John Doe",
      sat: "Absent",
      sun: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      mon: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      tue: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      wed: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      thu: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      fri: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
    },
    {
      id: 1,
      worker: "John Doe",
      sat: "Absent",
      sun: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      mon: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      tue: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      wed: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      thu: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      fri: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
    },
    {
      id: 1,
      worker: "John Doe",
      sat: "Absent",
      sun: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      mon: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      tue: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      wed: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      thu: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      fri: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
    },
    {
      id: 1,
      worker: "John Doe",
      sat: "Absent",
      sun: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      mon: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      tue: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      wed: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      thu: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      fri: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
    },
    {
      id: 1,
      worker: "John Doe",
      sat: "Absent",
      sun: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      mon: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      tue: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      wed: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      thu: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      fri: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
    },
    {
      id: 1,
      worker: "John Doe",
      sat: "Absent",
      sun: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      mon: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      tue: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      wed: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      thu: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      fri: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
    },
    {
      id: 1,
      worker: "John Doe",
      sat: "Absent",
      sun: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      mon: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      tue: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      wed: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      thu: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      fri: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
    },
    {
      id: 1,
      worker: "John Doe",
      sat: "Absent",
      sun: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      mon: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      tue: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      wed: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      thu: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      fri: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
    },
    {
      id: 1,
      worker: "John Doe",
      sat: "Absent",
      sun: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      mon: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      tue: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      wed: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      thu: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      fri: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
    },
    {
      id: 1,
      worker: "John Doe",
      sat: "Absent",
      sun: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      mon: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      tue: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      wed: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      thu: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      fri: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
    },
    {
      id: 1,
      worker: "John Doe",
      sat: "Absent",
      sun: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      mon: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      tue: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      wed: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      thu: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      fri: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
    },
    {
      id: 1,
      worker: "John Doe",
      sat: "Absent",
      sun: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      mon: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      tue: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      wed: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      thu: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
      fri: (
        <div>
          <p>6.30 - 14.30</p>
          <p className="text-gray-600 text-sm">(8hr)</p>
        </div>
      ),
    },
  ];
  return (
    <table className="w-full">
      <thead className="bg-[#E8F3FF] text-center">
        <tr className="text-left">
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-start">Worker</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Sat <FaLock className="ml-2"/></div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Sun <FaLock className="ml-2"/></div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Mon <FaLock className="ml-2"/></div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Tue <FaLock className="ml-2"/></div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Wed <FaLock className="ml-2"/></div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Thu <FaLock className="ml-2"/></div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Fri <FaLock className="ml-2"/></div>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {data?.map((item, index) => (
          <tr key={index} className="border-b border-[#F0F0F0]">
            <td className="px-4 py-3">
              <div className="flex items-center justify-start">{item.worker}</div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                {item.sat}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center text-center">
                {item.sun}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center text-center">
                {item.mon}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center text-center">
                {item.tue}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center text-center">
                {item.wed}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center text-center">
                {item.thu}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center text-center">
                {item.fri}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShiftDetailsTable;
