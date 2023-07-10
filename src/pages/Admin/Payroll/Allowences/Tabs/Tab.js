import { Button, Card } from "antd";
import React, { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import CreateNewSiteAllowance from "../../../../../shared/Modal/CreateNewSiteAllowanceModal";
import SiteAllowanceTable from "../../../../../shared/DataTable/SiteAllowanceTable";

const Tab = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  const openModal = () => {
    setVisibleModal(true);
  };
  return (
    <div>
      {visibleModal && (
        <CreateNewSiteAllowance setVisibleModal={setVisibleModal} />
      )}
      <Card>
        <div className="flex justify-between items-center">
          <div className="border border-[#111111] flex items-center p-1 rounded-md w-full lg:w-1/3 my-2 bg-white">
            <FaSearch className="ml-2" />{" "}
            <input
              placeholder="Search by Task or Site Allowance"
              className="h-[31px] bg-transparent text-sm w-full px-2"
            />
          </div>
          <Button
            onClick={openModal}
            className="flex justify-center items-center py-3 border border-[#111111] h-[42px]"
          >
            Create New{" "}
            <div className="bg-orange-500 p-2 rounded-md text-white ml-3">
              <FaPlus />
            </div>
          </Button>
        </div>

        <div className="pt-10">
          <SiteAllowanceTable />
        </div>
      </Card>
    </div>
  );
};

export default Tab;
