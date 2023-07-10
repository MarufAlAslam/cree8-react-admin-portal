import { Button, Checkbox, Input, Select } from "antd";
import React from "react";

const PayrollCategoryForm = () => {
  return (
    <form className="mt-4">
      <div className="lg:flex justify-between gap-4 items-center">
        <div className="lg:w-1/2 w-full">
          <label className="mb-2">Name</label>
          <Input type="text" className="mt-3" name="name" id="name" />
        </div>
        <div className="lg:w-1/2 w-full">
          <label className="mb-2">Employement Status</label>
          <Select className="w-full mt-3">
            <Select.Option value="1">Salary</Select.Option>
          </Select>
        </div>
      </div>
      <div className="lg:flex mt-3 justify-between gap-4 items-center">
        <div className="lg:w-1/2 w-full">
          <label className="mb-2">Hourly Rate Name</label>
          <Input type="text" className="mt-3" name="name" id="name" />
        </div>
        <div className="lg:w-1/2 w-full">
          <label className="mb-2">Hourly Rate</label>
          <Input type="text" className="mt-3" name="name" id="name" />
        </div>
      </div>
      <div className="lg:flex mt-3 justify-between gap-4 items-center">
        <div className="lg:w-1/2 w-full">
          <label className="mb-2">Overtime Rate Name</label>
          <Input type="text" className="mt-3" name="name" id="name" />
        </div>
        <div className="lg:w-1/2 w-full">
          <label className="mb-2">Overtime Rate</label>
          <Input type="text" className="mt-3" name="name" id="name" />
        </div>
      </div>
      <div className="lg:flex mt-3 justify-between gap-4 items-center">
        <div className="lg:w-1/2 w-full">
          <label className="mb-2">Double Time Rate Name</label>
          <Input type="text" className="mt-3" name="name" id="name" />
        </div>
        <div className="lg:w-1/2 w-full">
          <label className="mb-2">Double Time Rate</label>
          <Input type="text" className="mt-3" name="name" id="name" />
        </div>
      </div>

      <div className="flex justify-start items-center mt-4">
        <Checkbox id="cost"/>
        <label className="ml-2 text-sm text-blue" htmlFor="cost">Cost work as All Inclusive</label>
      </div>

      <div className="w-full mt-5">
          <label className="mb-2">Select Agreement</label>
          <Select className="w-full mt-3">
            <Select.Option value="1">Agrement</Select.Option>
          </Select>
        </div>

      <div className="item mt-5 text-center">
        <Button className="btn btn-blue">Save</Button>
      </div>
    </form>
  );
};

export default PayrollCategoryForm;
