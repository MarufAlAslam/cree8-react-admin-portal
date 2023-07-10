import React from "react";
import { Outlet } from "react-router-dom";
import SiteManagerSidebar from "../components/siteManagerSidebar";

const SiteManagerDashboard = () => {
  return (
    <div className="flex justify-between items-start md:flex-row flex-col">
      <div className="w-[160px] p-[15px] md:min-h-screen h-0">
        <SiteManagerSidebar />
      </div>
      <div className="dashboard-contents sitemanager-dashboard w-full p-[15px] h-screen overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default SiteManagerDashboard;
