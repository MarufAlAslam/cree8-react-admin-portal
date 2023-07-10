import { Button, Input } from "antd";
import React from "react";
import { FaTimes } from "react-icons/fa";

const DeleteInspection = ({setVisibleDelete}) => {
    const closeModal = () => {
        setVisibleDelete(false)
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
          <h2 className="text-xl font-bold">Deleting New Inspection</h2>

          <form className="mt-4">
            <div className="item">
                <label htmlFor="val">Inspection Name</label>
                <Input type="text" className="mt-3" defaultValue={"Carpentry with Polishing"}  name="name" id="name" readOnly />
            </div>
            <div className="item mt-5 text-center">
                <Button className="btn btn-blue">Delete</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteInspection;
