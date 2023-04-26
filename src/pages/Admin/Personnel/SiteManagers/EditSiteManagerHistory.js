import { Button, Input, Select } from "antd";
import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const EditSiteManagerHistory = () => {
  return (
    <form className="py-10">
      <div className="lg:w-1/2 w-full mx-auto bg-white p-5 shadow-sm">
        <p className="fs-18 font-bold mb-5">Editing Shift Details</p>

        <p className="font-semibold">Last Modified By</p>
        <p className="font-normal text-[#545454]">John Smith </p>

        <div className="mt-8 flex justify-between items-center">
          <p className="fs-18 font-bold">Shift Date</p>
          <p className="fs-12">Assigned Time: 08h 00m</p>
        </div>
        <div className="mt-5">
          <label className="block font-normal">South City - Cinema</label>
          <Select className="w-full mt-4">
            <Select.Option value="1">Cinema 1</Select.Option>
          </Select>
        </div>
        <div className="mt-5">
          <label className="block font-normal">Job Number</label>
          <Input className="w-full mt-4" />
        </div>
        <div className="mt-5">
          <p className="font-semibold">Worker</p>
          <p className="font-normal text-[#545454]">John Smith </p>
          <div className="mt-5 flex justify-between items-center gap-4">
            <div className="lg:w-1/2 w-full">
              <label className="block font-normal">Status</label>
              <Select className="w-full mt-4">
                <Select.Option value="1">Active</Select.Option>
                <Select.Option value="2">Inactive</Select.Option>
              </Select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block font-normal">Completion Type</label>
              <Select className="w-full mt-4">
                <Select.Option value="1">Active</Select.Option>
                <Select.Option value="2">Inactive</Select.Option>
              </Select>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <label className="block font-normal">Shift Length</label>
          <div className="flex justify-between items-center gap-3">
            <div className="lg:w-1/3 w-full">
              <label className="block font-normal text-[12px] mt-3">
                Started
              </label>
              <Input className="mt-2" type="time" />
            </div>
            <div className="lg:w-1/3 w-full">
              <label className="block font-normal text-[12px] mt-3">
                Break
              </label>
              <Input className="mt-2" type="time" />
            </div>
            <div className="lg:w-1/3 w-full">
              <label className="block font-normal text-[12px] mt-3">
                Finished
              </label>
              <Input className="mt-2" type="time" />
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-between items-center">
          <label className="block font-normal">Payroll Notes</label>
          <Button className="text-[#0F4C7D] border-none pr-0">+Add</Button>
        </div>

        <div className="mt-5">
          <label className="block font-normal">Payroll Category</label>
          <Select className="w-full mt-4">
            <Select.Option value="1">Category 1</Select.Option>
          </Select>
        </div>

        <div className="mt-5">
          <label className="block font-normal">Work Done</label>
        </div>

        <div className="mt-5">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border-b border-[#DBE4EC] py-3">Area</th>
                <th className="border-b border-[#DBE4EC] py-3">Task</th>
                <th className="border-b border-[#DBE4EC] py-3">Spent</th>
                <th className="border-b border-[#DBE4EC] py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-[#DBE4EC] p-3">
                  <Select className="w-full">
                    <Select.Option value="1">Area 1</Select.Option>
                  </Select>
                </td>
                <td className="border-b border-[#DBE4EC] p-3">
                  <Select className="w-full">
                    <Select.Option value="1">Task 1</Select.Option>
                  </Select>
                </td>
                <td className="border-b border-[#DBE4EC] p-3">
                  <Input className="w-full" />
                </td>
                <td className="border-b border-[#DBE4EC] py-3">
                  <div className="flex justify-center items-center">
                    <Button className="text-[#0F4C7D] border-none pr-0">
                      <FaTrash />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-end mt-4">
            <Button className="flex justify-center items-center py-3 border border-[#111111] h-[42px]">
              Add{" "}
              <div className="bg-orange-500 p-2 rounded-md text-white ml-3">
                <FaPlus />
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 mt-5 w-full mx-auto bg-transparent py-5">
        <div className="text-right">
          <Button className="btn-blue text-white h-[40px] ml-auto flex justify-center items-center">
            Save Changes
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EditSiteManagerHistory;
