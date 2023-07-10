import React from "react";
import SingleWorkersWorksiteTable from "../../../shared/DataTable/SingleWorkersWorksiteTable";
import { DatePicker, Select } from "antd";

const AccordionOption3 = () => {
  return (
    <div>
      <div className="lg:flex my-6 gap-4">
        <div className="lg:w-1/2">
            <div className="item">
                <label>
                    Worksite
                </label>
                <Select className="w-full block mt-4">
                    <option value="1">All</option>
                </Select>
            </div>
        </div>
        <div className="lg:w-1/2">
            <div className="flex w-full gap-4 justify-between items-end">
            <div className="item w-full">
                <label>
                    Worksite
                </label>
                <Select className="w-full block mt-4">
                    <option value="1">All</option>
                </Select>
            </div>
            <DatePicker/>
            </div>
        </div>
      </div>
      <SingleWorkersWorksiteTable />
    </div>
  );
};

export default AccordionOption3;
