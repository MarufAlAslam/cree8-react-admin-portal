import { Checkbox, Input } from "antd";
import React from "react";

const AbsenceForm = () => {
  return (
    <div>
      <form>
        <div className="">
          <label className="block font-normal">Name</label>
          <Input className="mt-4" />
        </div>
        <div className="mt-5">
          <label className="block font-normal">Absence Accrued Name</label>
          <Input className="mt-4" />
        </div>
        <div className="mt-5">
          <label className="block font-normal">Absence Taken Name</label>
          <Input className="mt-4" />
        </div>
        <div className="mt-5">
          <label className="block font-normal">Default Duration</label>
          <Input className="mt-4" />
        </div>
        <div className="mt-5">
          <label className="block font-normal">Accrual Method</label>
          <Input className="mt-4" />
        </div>
        <div className="mt-5">
          <label className="block font-normal">Required Weekday Hours</label>
          <Input className="mt-4" />
        </div>
        <div className="mt-5">
          <label className="block font-normal">Required Weekend Hours</label>
          <Input className="mt-4" />
        </div>
        <div className="mt-5">
          <label className="block font-normal">Daily Accrual</label>
          <Input className="mt-4" />
        </div>
        <div className="mt-5">
          <label className="block font-normal">Summary Column</label>
          <Input className="mt-4" />
        </div>
        <div className="mt-5">
          <div className="flex mb-2 justify-start items-center">
            <Checkbox id="c1" />
            <label className="ml-2" htmlFor="c1">
              Export Taken
            </label>
          </div>
          <div className="flex mb-2 justify-start items-center">
            <Checkbox id="c2" />
            <label className="ml-2" htmlFor="c2">
              Export Accrued
            </label>
          </div>
          <div className="flex mb-2 justify-start items-center">
            <Checkbox id="c3" />
            <label className="ml-2" htmlFor="c3">
              Track As Entitlement
            </label>
          </div>
          <div className="flex mb-2 justify-start items-center">
            <Checkbox id="c4" />
            <label className="ml-2" htmlFor="c4">
              Exclude From Shift Cost
            </label>
          </div>
          <div className="flex mb-2 justify-start items-center">
            <Checkbox id="c5" />
            <label className="ml-2" htmlFor="c5">
              Accrue When Absent
            </label>
          </div>
          <div className="flex mb-2 justify-start items-center">
            <Checkbox id="c6" />
            <label className="ml-2" htmlFor="c6">
              Export Without Job Number
            </label>
          </div>
        </div>

        <div className="mt-8 text-right">
            <button className="py-2 btn-blue rounded px-8">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AbsenceForm;
