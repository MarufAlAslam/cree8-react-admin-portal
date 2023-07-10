import { Card, Select } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Productivity = () => {
  return (
    <div className="p-6">
      <Card className="lg:w-8/12 mx-auto">
        <p>Worksite</p>
        <Select className="mt-4 w-full">
          <Select.Option value="jack">Jack</Select.Option>
        </Select>
        <Link className="mt-5 text-black block">Surplus Achieved</Link>
        <Link className="text-black block">Surplus Not Achieved</Link>
      </Card>
    </div>
  );
};

export default Productivity;
