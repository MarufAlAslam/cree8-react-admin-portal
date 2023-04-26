import { Button, Dropdown } from "antd";
import React from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import FilterTabs from "./FilterTabs";
import AddNewWorkerModal from "../Modal/AddNewWorkerModal";

const TopSearchBar = () => {
  const [visible, setVisible] = React.useState(false);
  const handleAddNew = () => {
    setVisible(true);
    console.log("Add New");
  }
  const items = [
    {
      key: "3",
      label: (
        <FilterTabs/>
      ),
    }
  ];
  return (
    <>
    {
      visible && (<AddNewWorkerModal setVisible={setVisible}/>)
    }
    <div className="bg-white p-5 flex justify-between items-center">
      <div className="border border-[#111111] flex items-center p-1 rounded-md w-full lg:w-1/4">
        <FaSearch className="ml-2" />{" "}
        <input
          placeholder="Search by Name, Worker Name, Email, Card ID"
          className="h-[31px] bg-transparent text-sm w-full px-2"
        />
      </div>

      <div className="actions flex justify-end items-center">
        <Dropdown
        placement="bottomRight"
        className="bg-white hover:bg-white"
          menu={{
            items,
          }}
        >
          <Button className="flex justify-center items-center py-3 mr-3 border border-[#111111] h-[42px]">
            <FaPlus className="mr-2" /> Add Filters
          </Button>
        </Dropdown>

        <Button className="flex justify-center items-center py-3 border border-[#111111] h-[42px]" onClick={handleAddNew}>
          Add New{" "}
          <div className="bg-orange-500 p-2 rounded-md text-white ml-3">
            <FaPlus />
          </div>
        </Button>
      </div>
    </div>
    </>
  );
};

export default TopSearchBar;
