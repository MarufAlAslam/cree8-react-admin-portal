import React from "react";
import { FaTimes } from "react-icons/fa";
import EmployeStatusModalForm from "../EmployeStatusModalForm/EmployeStatusModalForm";

const EditEmployementStatusModal = ({setEditModalVisible}) => {
    const closeModal = () => {
      setEditModalVisible(false)
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
          <h2 className="text-xl font-bold">Editing Employment Status</h2>
          <EmployeStatusModalForm/>
        </div>
      </div>
    </div>
  );
};

export default EditEmployementStatusModal;
