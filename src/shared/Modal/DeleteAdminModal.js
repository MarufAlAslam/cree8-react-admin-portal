import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TextShimmer } from "../../components/shimmer/shimmer";
import { ButtonSpinner } from "../../components/spinners";

const DeleteAdminModal = ({ setVisibleDelete, data, handle }) => {
  //defaule value
  const initialvalue = {
    isShimmer: true,
  };

  //states
  const [deleteAdmin, setDeleteAdmin] = useState();

  const closeModal = () => {
    setVisibleDelete(false);
  };

  useEffect(() => {
    if (data?.name) {
      setDeleteAdmin({
        ...deleteAdmin,
        isShimmer: false,
      });
    }
  }, [data?.name]);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="text-right">
          <button className="close-modal" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>

        {deleteAdmin?.isShimmer ? (
          <TextShimmer data={{ line: 8 }} />
        ) : (
          <>
            <div className="modal-body mt-3">
              <h2 className="text-xl font-bold">
                Are You Sure You Wish To Delete This Administrator
              </h2>

              <form className="mt-4">
                <div className="item mt-8">
                  <table>
                    <tbody>
                      <tr>
                        <td className="font-bold">Name</td>
                        <td className="pl-5">{data?.name}</td>
                      </tr>
                      <tr>
                        <td className="font-bold">Username</td>
                        <td className="pl-5">{data?.email}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="item mt-8 text-center">
                  <Button
                    onClick={handle?.submitEditDeleteAdmin}
                    className="btn btn-blue bg-blue-disable w-1/5"
                    disabled={data?.isEditModal}
                  >
                    {data?.isEditModal ? <ButtonSpinner /> : "Delete"}
                  </Button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DeleteAdminModal;
