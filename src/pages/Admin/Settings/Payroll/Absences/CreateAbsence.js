import React from "react";
import AbsenceForm from "./AbsenceForm";

const CreateAbsence = () => {
  return (
    <div className="p-6 lg:w-1/2 w-full mx-auto my-4 bg-white">
      <h2 className="text-lg font-bold mb-6">Creating Absence RDO-Salary</h2>

      <AbsenceForm/>
    </div>
  );
};

export default CreateAbsence;
