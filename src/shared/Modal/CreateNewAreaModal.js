import { Button, Input } from "antd";
import React from "react";
import { FaTimes } from "react-icons/fa";

const CreateNewAreaModal = ({setVisibleModal}) => {
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
          <h2 className="text-xl font-bold">Creating New Area</h2>

          <form className="mt-4">
            <div className="item mt-5">
                <label htmlFor="name">Area Name</label>
                <Input type="text" className="mt-3"  name="name" id="name" />
            </div>
            <div className="item mt-5">
                <label htmlFor="name">Area Abbraviation</label>
                <Input type="text" className="mt-3"  name="name" id="name" />
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

export default CreateNewAreaModal;
