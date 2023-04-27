import { Button } from "antd";
import React from "react";
import { FaCog, FaPlus } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";

const SettingsTopBar = () => {
  return (
    <div className="topbar py-3">
      <div className="px-8">
        <div className="flex justify-between items-center">
          <span className="flex justify-start items-center text-xl">
            <FaCog className="mr-2" />
            Setup
          </span>

          <div className="actions flex justi items-center">
            <Button className="flex text-white justify-center items-center py-3 border border-white h-[42px]">
              Create New{" "}
              <div className="bg-orange-500 p-2 rounded-md text-white ml-3">
                <FaPlus />
              </div>
            </Button>

            <Link to="/admin/dashboard">
            <TfiClose className="text-2xl ml-5"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default SettingsTopBar;
