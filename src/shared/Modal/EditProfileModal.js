import { Button, Input } from "antd";
import React from "react";
import { FaTimes } from "react-icons/fa";

const EditProfileModal = ({setModalVisible}) => {
    const closeModal = () => {
        setModalVisible(false)
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
          <h2 className="text-xl font-bold">Editing Workers Details</h2>

          <form className="mt-4">
            <div className="item">
                <label htmlFor="val">MYOB Employee Card ID</label>
                <Input type="text" className="mt-3 border-none p-0" defaultValue={"13315"} name="val" id="val" readOnly />
            </div>
            <div className="item mt-5">
                <label htmlFor="name">Name</label>
                <Input type="text" className="mt-3"  name="name" id="name" />
            </div>
            <div className="item mt-5">
                <label htmlFor="email">Email</label>
                <Input type="email" className="mt-3"  name="email" id="email" />
            </div>
            <div className="item mt-5">
                <label htmlFor="shift">Shift Receipts</label>
                <div className="flex justify-start items-center mt-3">
                    <input type="checkbox" id="sh"/>
                    <label htmlFor="sh" className="ml-2">Send Shift Receipts to Worker</label>
                </div>
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

export default EditProfileModal;
