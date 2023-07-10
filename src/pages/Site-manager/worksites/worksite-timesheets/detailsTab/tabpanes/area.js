import { Card } from "antd";
import React from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { Link } from "react-router-dom";
import AreaDetails from "./areaDetails";

const Areas = () => {
  const [details, setDetails] = React.useState(false);
  const data = [
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
    {
      id: 1,
      title: "0VAR",
      name: "Common Fire Walls",
      tasks: 23,
      wans: 8,
      hours: 56,
      total: 67,
      approved: 23,
      active: 34,
      remaining: 46,
      worked: 1334,
      rem: 334,
      allocated: 1424,
    },
  ];

  const handleDetails = () => {
    setDetails(true);
  };

  return (
    <>
      <div>
        {details ? (
          <AreaDetails />
        ) : (
          <div className="pt-10">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
              {data.map((item) => (
                <Link
                  to={"/site-manager/worksite/details"}
                  key={item.id}
                  onClick={handleDetails}
                >
                  <Card className="rounded-md border-[#E8E8E8]">
                    <p className="text-sm">{item.title}</p>
                    <p className="text-xl mt-2 mb-4">{item.name}</p>
                    <p>{item.tasks} Tasks</p>
                    <p className="my-2 text-[#FE0C0C] flex justify-start items-center text-xs">
                      <AiOutlineWarning /> {item.wans} Tasks Without Allocation
                    </p>
                    <p>{item.hours} Hours</p>
                    <p className="text-xs text-[#A1A1A1]">{item.hours} Hours</p>

                    <div className="grid lg:grid-cols-3 gap-4 mt-5">
                      <div className="text-center">
                        <p className="text-xs text-[#A1A1A1]">Worked</p>
                        <p className="text-sm">{item.worked}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-[#A1A1A1]">Remaining</p>
                        <p className="text-sm">{item.rem}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-[#A1A1A1]">Allocated</p>
                        <p className="text-sm">{item.allocated}</p>
                      </div>
                    </div>

                    <div className="text-center p-2 w-full bg-[#D5E9FE] mt-5 mb-3">
                      <p className="text-xs">Productivity Order</p>
                    </div>

                    <div className="grid grid-cols-4">
                      <div className="text-center">
                        <p className="text-xs text-[#A1A1A1]">Total</p>
                        <p className="text-sm">{item.total}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-[#A1A1A1]">Approved</p>
                        <p className="text-sm">{item.approved}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-[#A1A1A1]">Active</p>
                        <p className="text-sm">{item.active}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-[#A1A1A1]">Remaining</p>
                        <p className="text-sm">{item.remaining}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Areas;
