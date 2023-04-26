import React from "react";
import WorkersTable from "../../../../../shared/DataTable/WorkersTable";

const AllProfiles = () => {
    const hasStatus = true;
  return (
    <>
    <div className="mt-5 bg-white p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl">Active Employments</h3>
        <p className="text-[14px] text-right">
          <span className="text-[14px] text-[#a1a1a1]">
            Total Number of Active Workers:
          </span>
          &nbsp; 1234
        </p>
      </div>

      <div className="mt-5">
        <WorkersTable />
      </div>
    </div>

    <div className="mt-5 bg-white p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl">Terminated Employments</h3>
        <p className="text-[14px] text-right">
          <span className="text-[14px] text-[#a1a1a1]">
          Total Number of Terminated Workers: 
          </span>
          &nbsp; 434
        </p>
      </div>

      <div className="mt-5">
        <WorkersTable hasStatus = {hasStatus}/>
      </div>
    </div>
    </>
  );
};

export default AllProfiles;
