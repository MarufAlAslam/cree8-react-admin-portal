import { Button } from "antd";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import HourlyRateTaskTable from "../../../shared/DataTable/HourlyRateTaskTable";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";
import ProductivityOrdersTable from "../../../shared/DataTable/ProductivityOrders";
import AvailableRateTaskModal from "../../../shared/Modal/AvailableRateTaskModal";
import DetailsTop from "../../../pages/Admin/Worksite/WorksiteDetails/DetailsTop";

const HourlyRateTaskEstimations = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const [visibleAvailable, setVisibleAvailable] = useState(false);

  const availableToggler = () => {
    setVisibleAvailable(!visibleAvailable);
  };
  const hrteToggler = () => {
    setVisible1(!visible1);
  };

  const productivityToggler = () => {
    setVisible2(!visible2);
  };
  return (
    <>
      {visibleAvailable && (
        <AvailableRateTaskModal setVisibleAvailable={setVisibleAvailable} />
      )}
      <div className="bg-white p-4 mb-6">
        <DetailsTop />
      </div>
      <div className="bg-white">
        <div
          className="flex justify-between items-center border-b p-4 mb-4"
          onClick={hrteToggler}
        >
          <h3 className="text-2xl font-bold">Hourly Rate Task Estimations</h3>
          <div className="flex justify-end items-center">
            <Button
              onClick={availableToggler}
              className="flex justify-center items-center py-3 border border-[#111111] h-[42px]"
            >
              Add New{" "}
              <div className="bg-orange-500 p-2 rounded-md text-white ml-3">
                <FaPlus />
              </div>
            </Button>

            <button className="ml-4">
              {visible1 ? (
                <TfiAngleUp className="text-3xl" />
              ) : (
                <TfiAngleDown className="text-3xl" />
              )}
              {/* <TfiAngleDown className="text-3xl" /> */}
            </button>
          </div>
        </div>

        {visible1 && (
          <div className="p-4">
            <HourlyRateTaskTable />
          </div>
        )}
      </div>

      <div className="bg-white mt-6">
        <div
          className="flex justify-between items-center border-b p-4 mb-4"
          onClick={productivityToggler}
        >
          <h3 className="text-2xl font-bold">Productivity Orders</h3>
          <div className="flex justify-end items-center">
            <Button className="flex justify-center mr-4 items-center py-3 border border-[#111111] h-[42px]">
              Merge
            </Button>
            <Button className="flex justify-center items-center py-3 border border-[#111111] h-[42px]">
              Add New{" "}
              <div className="bg-orange-500 p-2 rounded-md text-white ml-3">
                <FaPlus />
              </div>
            </Button>

            <button className="ml-4">
              {visible2 ? (
                <TfiAngleUp className="text-3xl" />
              ) : (
                <TfiAngleDown className="text-3xl" />
              )}
              {/* <TfiAngleDown className="text-3xl" /> */}
            </button>
          </div>
        </div>

        {visible2 && (
          <div className="p-4">
            <ProductivityOrdersTable />
          </div>
        )}
      </div>
    </>
  );
};

export default HourlyRateTaskEstimations;
