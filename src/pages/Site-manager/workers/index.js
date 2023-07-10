import React from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { Input } from "antd";

import userIcon from "../../../assets/images/Site-Manager/user.svg";
import SiteManagerWorkersTable from "../../../shared/DataTable/SiteManagerWorkers";
import WorkersTableSiteManager from "../../../shared/DataTable/mobileTables/WorkersTableSiteManager";

const SiteManagerWorkers = () => {
  const [screenSize, setScreenSize] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-[20px] header-flex">
        <FaArrowLeft className="text-3xl mr-2" />
        <p className="text-[24px] w-full">Workers</p>
        <div className="flex justify-end items-center w-full">
          <div className="border py-1 px-4 rounded-md flex w-full justify-between items-center">
            <FaSearch />
            <Input
              placeholder="Search by woksite Name"
              className="border-none outline-none bg-transparent p-0 ml-3"
            />
          </div>
          <button className="min-w-[40px] min-h-[40px] bg-[#F6FAFF] rounded-full ml-10 md:block hidden">
            <img
              src={userIcon}
              alt="user"
              className="w-[15px] h-[15px] rounded-full ml-[12px]"
            />
          </button>
        </div>
      </div>
      {screenSize < 768 ? (
        <WorkersTableSiteManager />
      ) : (
        <SiteManagerWorkersTable />
      )}
    </div>
  );
};

export default SiteManagerWorkers;
