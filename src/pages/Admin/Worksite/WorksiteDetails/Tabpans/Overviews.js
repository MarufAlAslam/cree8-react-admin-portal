import React from "react";
import { FaDotCircle, FaInfoCircle } from "react-icons/fa";
import Line from "../Charts/line";
import { Button, Card } from "antd";
import NewPieChart from "../Charts/pie";
import WeeklyBar from "../Charts/weeklyBar";

import { AiOutlineDollarCircle, AiOutlineProfile } from "react-icons/ai";
import { GrUserWorker } from "react-icons/gr";

const OverViews = () => {
  return (
    <div>
      <Card>
        <div className="flex justify-between items-center">
          <h2 className="tex-3xl font-bold">Overview Timeline</h2>

          <button className="bg-[#F3FFEE] border-[#52C41A] flex justify-center items-center text-black px-4 py-2 rounded-md">
            <FaDotCircle className="mr-3 text-[#52C41A]" /> On Time{" "}
            <FaInfoCircle className="ml-3" />
          </button>
        </div>
        <Line />
      </Card>

      <div className="lg:flex justify-between items-start gap-5 mt-5">
        <div className="lg:w-1/2">
          <Card className="w-full">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-medium">Task Summery</h2>
                <p className="text-gray-400 text-sm">45 Overdue Tasks</p>
              </div>
              <Button className="bg-gray-200 border-none">View Tasks</Button>
            </div>

            <NewPieChart />
          </Card>
        </div>
        <div className="lg:w-1/2">
          <Card className="w-full h-full">
            <div className="flex justify-between items-start">
              <div className="w-[40%]">
                <div>
                  <h2 className="text-xl font-medium">Timesheets Reports</h2>
                  <p className="text-gray-400 text-sm">Weekly Overview</p>
                </div>
                <div className="mt-10 flex justify-start items-center">
                  <div>
                    <h2 className="text-3xl font-bold">463</h2>
                    <p className="text-gray-400">Work Hours</p>
                  </div>
                  <div className="ml-5 bg-[#CBEFB9] border-2 border-[#41C700] text-xs px-2 py-1 rounded-md">
                    +4.63%
                  </div>
                </div>
              </div>
              <div className="w-[60%]">
                <WeeklyBar />
              </div>
            </div>

            <hr className="my-3" />

            <div className="lg:flex justify-between items-center">
              <div className="lg:w-1/3 w-full lg:border-r text-center">
                <div className="flex justify-center items-center text-[#A1A1A1] text-xl">
                  <AiOutlineDollarCircle className="mr-2" /> Cost
                </div>
                <h2 className="text-2xl mt-1 font-bold">$12675</h2>
              </div>
              <div className="lg:w-1/3 w-full lg:border-r text-center">
                <div className="flex justify-center items-center text-[#A1A1A1] text-xl">
                  <AiOutlineProfile className="mr-2" /> Tasks
                </div>
                <h2 className="text-2xl mt-1 font-bold">463</h2>
              </div>
              <div className="lg:w-1/3 w-full text-center">
                <div className="flex justify-center items-center text-[#A1A1A1] text-xl">
                  <GrUserWorker className="mr-2" /> Avg Workers
                </div>
                <h2 className="text-2xl mt-1 font-bold">463</h2>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OverViews;
