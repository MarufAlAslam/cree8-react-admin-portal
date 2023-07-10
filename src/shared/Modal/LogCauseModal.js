import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { FaTimes } from "react-icons/fa";

const LogCauseModal = ({setVisibleModal}) => {
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
          <h2 className="text-xl font-bold">Log Cause of Warning</h2>

          <form className="mt-4">
            <div className="item mt-5">
                <label htmlFor="name">Enter The Cause</label>
                <TextArea rows={4} className="mt-3"  name="name" id="name" />
            </div>
            <div className="item mt-5 text-center">
                <Button className="btn btn-blue">Save</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogCauseModal;
