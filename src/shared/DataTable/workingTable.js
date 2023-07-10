import React from "react";
import dp from "../../assets/images/Personnel/dp.png";
import { FaPlus } from "react-icons/fa";
import { Button, Select } from "antd";
import { Link } from "react-router-dom";

const WorkingTable = () => {
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
    <div className="relative">
      <div className="absolute top-[-65px] w-1/2 right-0 flex justify-end items-center gap-4">
        <Select defaultValue="Mass Options" className="border-black">
          <Select.Option value="Mass Options">Mass Options</Select.Option>
        </Select>
        <Button className="flex justify-center items-center p-1 pl-3 border border-[#d4d3d3]">
          Roaster Worker{" "}
          <div className="bg-orange-500 p-1 rounded-md text-white ml-3">
            <FaPlus />
          </div>
        </Button>
      </div>
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
                  <div className="text-center mx-5">
                    <p className="text-lg">Started</p>
                    <p className="text-lg text-[#A1A1A1]">6:30</p>
                  </div>
                  <div className="text-center mx-5 flex flex-col justify-center items-center">
                    <svg
                      id="_000000ff"
                      data-name="#000000ff"
                      xmlns="http://www.w3.org/2000/svg"
                      width="34.441"
                      height="34.441"
                      viewBox="0 0 34.441 34.441"
                    >
                      <path
                        id="Path_1407"
                        data-name="Path 1407"
                        d="M16.775,0h.885a17.182,17.182,0,0,1,7.367,1.877,17.252,17.252,0,0,1,9.413,14.839v.946A17.276,17.276,0,0,1,20.852,34.054a18.1,18.1,0,0,1-3.189.387h-.88A17.269,17.269,0,0,1,0,17.727V16.721A18.827,18.827,0,0,1,.3,14,17.121,17.121,0,0,1,3.548,6.768,17.231,17.231,0,0,1,16.775,0M10.763,10.763V23.678h4.305V10.763H10.763m8.61,0V23.678h4.305V10.763Z"
                        fill="#ffe097"
                      />
                    </svg>

                    <p className="text-[#000]">Resume</p>
                  </div>
                  <div className="text-center mx-5 flex flex-col justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34.441"
                      height="34.441"
                      viewBox="0 0 34.441 34.441"
                    >
                      <g
                        id="Group_74214"
                        data-name="Group 74214"
                        transform="translate(0 -0.344)"
                      >
                        <circle
                          id="Ellipse_27"
                          data-name="Ellipse 27"
                          cx="17.221"
                          cy="17.221"
                          r="17.221"
                          transform="translate(0 0.344)"
                          fill="#ff9595"
                        />
                        <rect
                          id="Rectangle_1869"
                          data-name="Rectangle 1869"
                          width="12.101"
                          height="12.101"
                          rx="2"
                          transform="translate(11.17 11.344)"
                          fill="#fff"
                        />
                      </g>
                    </svg>

                    <p className="text-[#000]">Finished</p>
                  </div>
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
    </div>
  );
};

export default WorkingTable;
