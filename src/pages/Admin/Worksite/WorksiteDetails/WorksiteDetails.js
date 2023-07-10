import React from "react";
// import { Link } from 'react-router-dom';
import DetailsTop from "./DetailsTop";
import WorksiteTabs from "./WorksiteTabs";

const WorksiteDetails = () => {
  return (
    <div className="p-6">
      <div className="bg-white p-4">
        <DetailsTop />
      </div>
      <div className="mt-5 bg-white p-4">
        <WorksiteTabs />
      </div>
    </div>
  );
};

export default WorksiteDetails;
