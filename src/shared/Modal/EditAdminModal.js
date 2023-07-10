import { Button, Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TextShimmer } from "../../components/shimmer/shimmer";
import { ButtonSpinner } from "../../components/spinners";

const EditAdminModal = ({ setVisibleEdit, data, handle }) => {
  //defaule value
  const initialvalue = {
    isShimmer: true,
  };

  //states
  const [editAdminModal, setEditAdminModal] = useState(initialvalue);

  const closeModal = () => {
    setVisibleEdit(false);
  };

  useEffect(() => {
    if (data?.name) {
      setEditAdminModal({
        ...editAdminModal,
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

        {editAdminModal?.isShimmer ? (
          <TextShimmer data={{ line: 12 }} />
        ) : (
          <>
            <div className="modal-body mt-3">
              <h2 className="text-xl font-bold">
                Editing Administrator Details
              </h2>

              <form className="mt-4">
                <div className="item mt-5">
                  <label htmlFor="name">Name</label>
                  <Input
                    type="text"
                    id="name"
                    className={
                      data?.errors?.name
                        ? "mt-3 border-1 border-rose-600 hover:border-rose-600"
                        : "mt-3"
                    }
                    name="name"
                    value={data?.name}
                    onChange={handle?.getAdminEdit}
                  />
                  {data?.errors?.name && (
                    <p className="pt-2 text-red-600 text-sm">
                      {data?.errors?.name}
                    </p>
                  )}
                </div>
                <div className="item mt-5">
                  <label htmlFor="email">Username</label>
                  <Input
                    type="username"
                    id="email"
                    className={
                      data?.errors?.email
                        ? "mt-3 border-1 border-rose-600 hover:border-rose-600"
                        : "mt-3"
                    }
                    name="email"
                    value={data?.email}
                    onChange={handle?.getAdminEdit}
                    onKeyPress={(e) =>
                      e?.key == "Enter" && handle?.submitEditDeleteAdmin()
                    }
                  />
                  {data?.errors?.email && (
                    <p className="pt-2 text-red-600 text-sm">
                      {data?.errors?.email}
                    </p>
                  )}
                </div>
                <div className="item mt-5 text-center">
                  <Button
                    className="btn btn-blue w-1/5 bg-blue-disable"
                    onClick={handle?.submitEditDeleteAdmin}
                    disabled={data?.isEditModal}
                  >
                    {data?.isEditModal ? <ButtonSpinner /> : "Update"}
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

export default EditAdminModal;
