import { Button, Input, Select } from "antd";
import React from "react";
import { FaTimes } from "react-icons/fa";

const CreateNewSiteAllowance = ({setVisibleModal}) => {
    const closeModal = () => {
        setVisibleModal(false)
    }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="text-right">
          <button className="close-modal" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>

        <div className="modal-body mt-3">
          <h2 className="text-xl font-bold">Creating New Site Allowance</h2>

          <form className="mt-4">
            <div className="item mt-5">
                <label htmlFor="name">Payroll Cateory</label>
                <Input type="text" className="mt-3"  name="name" id="name" />
            </div>
            <div className="item mt-5">
                <label htmlFor="name">Summery Column</label>
                <Input type="text" className="mt-3"  name="name" id="name" />
            </div>
            <div className="item mt-5">
                <label htmlFor="name">Hourly Rate</label>
                <Input type="text" className="mt-3"  name="name" id="name" />
            </div>
            <div className="item mt-5">
                <label htmlFor="name">Display in Summery As</label>
                <Select className="mt-3 w-full">
                    <Select.Option value="1">1</Select.Option>
                </Select>
            </div>
            <div className="item mt-5 text-center">
                <Button className="btn btn-blue">Save Changes</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewSiteAllowance;
