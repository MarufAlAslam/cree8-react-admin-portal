import { Button, Tabs } from "antd";
import AreaDetails1 from "../../../../../../shared/DataTable/areaDetails1Table";
import Stacked from "../../../../../Admin/Worksite/WorksiteDetails/Charts/stackedChart";
import OverflowTable from "../../../../../../shared/DataTable/OverflowTable";
import { BiError } from "react-icons/bi";
import Productivity from "./productivity";
import { useState } from "react";
import ErrorTable from "../../../../../../shared/DataTable/ErrorTable";
import { FaPlus, FaTimes } from "react-icons/fa";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Tasks",
    children: <AreaDetails1 />,
  },
  {
    key: "2",
    label: "Productivity  Order",
    children: <Productivity />,
  },
  {
    key: "3",
    label: "Tasks Overflow",
    children: (
      <>
        <Stacked />
        <div className="mt-5">
          <OverflowTable />
        </div>
      </>
    ),
  },
];

const AreaDetails = () => {
  const [showErrors, setShowErrors] = useState(false);

  const errorsHandler = () => {
    setShowErrors(!showErrors);
  };

  return (
    <div className="bg-white p-5 relative">
      <div
        className={`text-right ${
          !showErrors
            ? "absolute right-[15px] top-[10px] z-20"
            : "relative right-[-5px] top-[-5px]"
        }`}
      >
        {showErrors && (
          <div className="flex justify-between items-center mb-5">
            <div className="text-left">
              <h3 className="text-2xl font-bold">Issues</h3>
              <p className="text-gray-400">
                This Area had <span className="text-black">15</span> Unloggged
                Issues
              </p>
            </div>
            <Button
              // onClick={availableToggler}
              className="flex justify-center items-center py-3 border border-[#111111] h-[42px]"
            >
              Add Issue{" "}
              <div className="bg-orange-500 p-2 rounded-md text-white ml-3">
                <FaPlus />
              </div>
            </Button>
          </div>
        )}
        {!showErrors && (
          <button
            onClick={errorsHandler}
            className="btn border border-gray-200 rounded p-3 relative"
          >
            {!showErrors && (
              <span className="value absolute bg-red-500 text-xs inline-flex w-[20px] h-[20px] justify-center items-center text-white p-1 rounded-full top-[-5px] right-[-5px]">
                31
              </span>
            )}
            {showErrors ? (
              <FaTimes className="text-2xl text-red-500" />
            ) : (
              <>
                {" "}
                <BiError className="text-2xl text-gray-300" />{" "}
              </>
            )}
          </button>
        )}
      </div>

      {!showErrors ? (
        <Tabs
          className="details-tab areaTab"
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
      ) : (
        <ErrorTable />
      )}
    </div>
  );
};
export default AreaDetails;
