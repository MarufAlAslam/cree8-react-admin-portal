import React from "react";
import { FaCalendar, FaClock, FaDollarSign } from "react-icons/fa";

const LineChartInfo = () => {
  const info = {
    overallCost: 4542634,
    rate: 129.7,
    finishDate: "4/3/2023",
  };
  return (
    <div>
      {
        <>

          <p className="my-8">
            <span className="text-lg text-[#A1A1A1] flex items-center">
            <FaDollarSign className="mr-2"/>
            Overall Cost: </span>
            <span className="text-4xl font-semibold">{info.overallCost}</span>
          </p>

          <p className="my-8">
            <span className="text-lg text-[#A1A1A1] flex items-center">
            <FaClock className="mr-2"/>
            Rate: </span>
            <span className="text-4xl font-semibold">{info.rate}</span>
          </p>

          <p className="my-8">
            <span className="text-lg text-[#A1A1A1] flex items-center">
            <FaCalendar className="mr-2"/>
            Finish Date: </span>
            <span className="text-4xl font-semibold">{info.finishDate}</span>
          </p>
        </>
      }
    </div>
  );
};

export default LineChartInfo;
