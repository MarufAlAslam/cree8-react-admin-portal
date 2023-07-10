import React from "react";
import dp from "../../assets/images/Personnel/dpp.png";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useState } from "react";

const RestoredTable = () => {
  const data = [
    {
      id: 1,
      img: dp,
      name: "John Doe",
      work: ["D234", "TWES"],
    },
    {
      id: 1,
      img: dp,
      name: "John Doe",
      work: ["D234", "TWES"],
    },
    {
      id: 1,
      img: dp,
      name: "John Doe",
      work: ["D234", "TWES"],
    },
    {
      id: 1,
      img: dp,
      name: "John Doe",
      work: ["D234", "TWES"],
    },
    {
      id: 1,
      img: dp,
      name: "John Doe",
      work: ["D234", "TWES"],
    },
    {
      id: 1,
      img: dp,
      name: "John Doe",
      work: ["D234", "TWES"],
    },
  ];

  // click plaus to show the hidden item
  const handleShow = (e) => {
    const plauses = document.querySelectorAll(".plaus");
    // const hiddenItems = document.querySelectorAll(".hidden-items");
   

    // only the clicked plaus will show the hidden items
    plauses.forEach((item) => {
      if (item === e.target) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  };

  return (
    <table className="w-full">
      <thead className="bg-[#E8F3FF] text-center">
        <tr className="text-left">
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-start">Worker Name</div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center"></div>
          </th>
          <th className=" px-4 py-3 ">
            <div className="flex items-center justify-center">Action</div>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {data?.map((item, index) => (
          <tr key={index} className="border-b border-[#F0F0F0]">
            <td className="px-4 py-3">
              <div className="flex items-center justify-start">
                <img
                  src={item.img}
                  alt=""
                  className="w-[50px] h-[50px] rounded mr-[10px]"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-[10px] text-[#707070]">
                    Work:{" "}
                    {item.work.map((item, index) => (
                      <span key={index} className="text-[#0F4C7D]">
                        {item}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center justify-center">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34.441"
                    height="34.694"
                    viewBox="0 0 34.441 34.694"
                  >
                    <path
                      id="Path_1408"
                      data-name="Path 1408"
                      d="M16.851,0h.674a17.163,17.163,0,0,1,7.547,1.909,17.356,17.356,0,0,1,8.145,9.014,17.62,17.62,0,0,1,1.224,6.05v.682a17.39,17.39,0,0,1-7.352,13.9,17.14,17.14,0,0,1-9.562,3.135h-.675a17.168,17.168,0,0,1-9.5-3.136A17.387,17.387,0,0,1,0,17.656v-.678A17.513,17.513,0,0,1,1.9,9.434,17.213,17.213,0,0,1,16.851,0M12.517,9.8q0,7.546,0,15.09Q19,21.117,25.488,17.347,19,13.574,12.517,9.8Z"
                      fill="#51ff8b"
                    />
                  </svg>
                  Start
                </button>
              </div>
            </td>
            <td className="px-4 py-3">
              <div
                className="flex items-center justify-center text-xl plaus relative"
                onClick={handleShow}
              >
                <div className="hidden-items absolute right-[83%] top-[-80%] hidden">
                  <div className="border p-3 mr-2 absolute">
                    <Link
                      className="text-sm block text-center"
                      to="/personnel/worker-profile"
                    >
                      Transfer
                    </Link>
                    <Link
                      className="text-sm block text-center"
                      to="/personnel/worker-profile"
                    >
                      Terminate
                    </Link>
                  </div>
                </div>
                <FaPlus className="text-sm border-2 p-1 border-black w-[25px] h-[25px] flex justify-center items-center rounded-full" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RestoredTable;
