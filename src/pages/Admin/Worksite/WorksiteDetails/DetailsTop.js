import React from "react";

import worksite from "../../../../assets/images/worksite/worksite.png";
import { Link } from "react-router-dom";
import { FaEdit, FaPlusSquare } from "react-icons/fa";
import { Card, DatePicker } from "antd";
import AvailableSiteManagerModal from "../../../../shared/Modal/AvailableSiteManagerModal";

const DetailsTop = () => {
  const [visibleAvailable, setVisibleAvailable] = React.useState(false);
  const worksiteData = {
    worksiteName: "Worksite Name",
    status: "Active",
    jobNumber: 2453,
    siteManager: "Site Manager",
    workedHours: 7514.2,
    workedHoursPercentage: 60,
    requiredHours: 12524.2,
    requiredHoursPercentage: 15,
    lostHours: 5010,
    lostHoursPercentage: 25,
    remainingHours: 5010,
    remainingHoursPercentage: 25,
    deficitHours: 5010,
    deficitHoursPercentage: 25,
  };

  const visibleAvailableHandler = () => {
    setVisibleAvailable(true);
  };

  return (
    <>
    {
        visibleAvailable && (<AvailableSiteManagerModal setVisibleAvailable={setVisibleAvailable}/>)
    }
      <div>
        <div className="flex justify-start items-start">
          <img src={worksite} alt="" className="" />
          <div className="ml-5 w-full">
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center">
                <h1 className="text-2xl font-bold">
                  {worksiteData.worksiteName}
                </h1>
                <div className="ml-16 flex items-center">
                  <span className="text-xs text-white bg-green-500 px-2 py-1 rounded-md">
                    {worksiteData.status}
                  </span>
                  <Link className="ml-3" to={"/admin/worksite/edit"}>
                    <FaEdit />
                  </Link>
                </div>
              </div>
              <DatePicker />
            </div>
            <p className="text-lg fw-[500] mt-2 w-full flex">
              Site Manager{" "}
              <button
                onClick={visibleAvailableHandler}
                className="text-orange-600 flex items-center ml-4"
              >
                Assign <FaPlusSquare />
              </button>
            </p>

            <div className="flex mt-5 justify-between items-center w-full gap-5">
              <Card className="border-l-8 w-full p-2 border-[#FFD43B]">
                <p className="text-xs">Worked</p>
                <div className="flex mt-2 justify-between items-center">
                  <p className="text-sm">
                    {worksiteData.workedHours}{" "}
                    <span className="text-xs">Hours</span>
                  </p>
                  <p className="text-sm">
                    {worksiteData.workedHoursPercentage}{" "}
                    <span className="text-xs">%</span>
                  </p>
                </div>
              </Card>
              <Card className="border-l-8 w-full p-2 border-[#748FFC]">
                <p className="text-xs">Worked</p>
                <div className="flex mt-2 justify-between items-center">
                  <p className="text-sm">
                    {worksiteData.workedHours}{" "}
                    <span className="text-xs">Hours</span>
                  </p>
                  <p className="text-sm">
                    {worksiteData.workedHoursPercentage}{" "}
                    <span className="text-xs">%</span>
                  </p>
                </div>
              </Card>
              <Card className="border-l-8 w-full p-2 border-[#F03E3E]">
                <p className="text-xs">Worked</p>
                <div className="flex mt-2 justify-between items-center">
                  <p className="text-sm">
                    {worksiteData.workedHours}{" "}
                    <span className="text-xs">Hours</span>
                  </p>
                  <p className="text-sm">
                    {worksiteData.workedHoursPercentage}{" "}
                    <span className="text-xs">%</span>
                  </p>
                </div>
              </Card>
              <Card className="border-l-8 w-full p-2 border-[#40C057]">
                <p className="text-xs">Worked</p>
                <div className="flex mt-2 justify-between items-center">
                  <p className="text-sm">
                    {worksiteData.workedHours}{" "}
                    <span className="text-xs">Hours</span>
                  </p>
                  <p className="text-sm">
                    {worksiteData.workedHoursPercentage}{" "}
                    <span className="text-xs">%</span>
                  </p>
                </div>
              </Card>
              <Card className="border-l-8 w-full p-2 border-[#FF922B]">
                <p className="text-xs">Worked</p>
                <div className="flex mt-2 justify-between items-center">
                  <p className="text-sm">
                    {worksiteData.workedHours}{" "}
                    <span className="text-xs">Hours</span>
                  </p>
                  <p className="text-sm">
                    {worksiteData.workedHoursPercentage}{" "}
                    <span className="text-xs">%</span>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsTop;
