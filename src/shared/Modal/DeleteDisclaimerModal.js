import { Button } from "antd";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { ButtonSpinner } from "../../components/spinners";

const DeleteDisclaimerModal = ({ setVisibleDelete, data, handle }) => {
  const closeModal = () => {
    setVisibleDelete(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="text-right">
          <button className="close-modal" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>

        <div className="modal-body mt-3">
          <h2 className="text-xl font-bold">
            Are You Sure You Wish To Delete This Disclaimer?{" "}
          </h2>

          <form className="mt-4">
            <div className="item mt-8">
              <table>
                <tbody>
                  <tr>
                    <td className="font-bold">Name</td>
                    <td className="pl-5">{data?.selectedData?.name}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="item mt-8 text-center">
              <Button
                onClick={handle?.deleteData}
                className="btn btn-blue bg-blue-disable w-1/5"
                disabled={data?.isLoading}
              >
                {data?.isLoading ? <ButtonSpinner /> : "Delete"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteDisclaimerModal;
