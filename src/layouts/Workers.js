import React from "react";
import TopBar from "../shared/TopBar/TopBar";
import { Outlet } from "react-router-dom";

const WorkersLayout = () => {
  return (
    <div>
      <TopBar />
      <div className="content-holder">
        <Outlet />
      </div>
    </div>
  );
};

export default WorkersLayout;
