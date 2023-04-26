import { Button, Input, Select } from "antd";
import React from "react";
import { FaQuestionCircle, FaTimes } from "react-icons/fa";

const AddNewWorkerModal = ({setVisible}) => {
    const closeModal = () => {
      setVisible(false)
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
          <h2 className="text-xl font-bold">Creating New Worker</h2>

          <form className="mt-4">
            <div className="item">
                <label htmlFor="stat">Employement Status</label>
                <Select className="mt-3 block w-full" defaultValue="Full Time" name="stat" id="stat">
                    <Select.Option value="Full Time">Full Time</Select.Option>
                    <Select.Option value="Part Time">Part Time</Select.Option>
                    <Select.Option value="Casual">Casual</Select.Option>
                </Select>
            </div>
            <div className="item">
                <label htmlFor="site">Worksite</label>
                <Select className="mt-3 block w-full" defaultValue="Full Time" name="site" id="site">
                    <Select.Option value="Full Time">Cree8</Select.Option>
                </Select>
            </div>
           
            <div className="item mt-5">
                <div className="flex justify-between items-center">
                <label htmlFor="name">Name</label>
                <FaQuestionCircle className="fs-10"/>
                </div>
                <Input type="text" className="mt-3"  name="name" id="name" />
            </div>
            <div className="item mt-5">
                <label htmlFor="name">Email</label>
                <Input type="text" className="mt-3"  name="name" id="name" />
                <p className="fs-14 mt-2">*Workers without an email address will not be inducted </p>
            </div>
            <div className="item mt-5">
                <label htmlFor="shift">Shift Receipts</label>
                <div className="flex justify-start items-center mt-3">
                    <input type="checkbox" id="sh"/>
                    <label htmlFor="sh" className="ml-2">Send Shift Receipts to Worker</label>
                </div>
            </div>
            <div className="item mt-5 text-center">
                <Button className="btn btn-blue">Create</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewWorkerModal;
