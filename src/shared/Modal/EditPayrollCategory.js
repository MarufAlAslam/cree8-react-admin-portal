import React from "react";
import {FaTimes } from "react-icons/fa";
import PayrollCategoryForm from "../../pages/Admin/Settings/Payroll/Categories/PayrollCategoryForm";

const EditPayrollCategory = ({ setVisibleEditPayroll }) => {
    const closeModal = () => {
        setVisibleEditPayroll(false)
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
                    <h2 className="text-xl font-bold">Editting Payroll Category</h2>

                    <PayrollCategoryForm/>
                </div>
            </div>
        </div>
    );
};

export default EditPayrollCategory;
