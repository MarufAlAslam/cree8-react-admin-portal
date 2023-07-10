import React from "react";
import Stacked from "./stackedChart";
import LineChartInfo from "./LineChartInfo";

const Line = () => {
  return (
    <div className="lg:flex justify-between items-center">
      <div className="lg:w-9/12">
        <Stacked />
      </div>
      <div className="lg:w-3/12">
        <LineChartInfo />
      </div>
    </div>
  );
};

export default Line;
