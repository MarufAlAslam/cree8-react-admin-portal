import React from "react";
import SingleWorkersProfile from "../Admin/Personnel/Workers/SingleWorkerProfile";
import WorkersAccordion from "./WorkersAccordion";

const WorkersDashboard = () => {
  const data = {
    id: 1,
    name: "John Work",
    email: "John@cree8.com",
    employment: "Casual",
    cardId: "123",
    joined: "12/12/2020",
    shiftworked: "564",
    hoursWorked: "16452 hrs",
    productivityAvrgarage: "9.56 over",
    hourlyAvetage: "9.56 over",
    induction: "company handbook",
    status: "Active",
  };
  const noTerminateBtn = true;
  return (
    <div className="p-5">
      <div className="bg-white p-4">
        <div className="w-3/4">
          <SingleWorkersProfile noTerminateBtn={noTerminateBtn} data={data} />
        </div>

        <div className="mt-5">
            <WorkersAccordion/>
        </div>
      </div>
    </div>
  );
};

export default WorkersDashboard;
