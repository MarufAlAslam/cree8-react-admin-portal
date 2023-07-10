import { Checkbox, List } from "antd";
import React from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const AvailableSiteManagerModal = ({ setVisibleAvailable }) => {
  const closeModal = () => {
    setVisibleAvailable(false);
  };
  const data = [
    "Cree8 Management",
    "Administration (Administration)",
    "Cree8 Management",
    "Administration (Administration)",
    "Cree8 Management",
    "Administration (Administration)",
  ];
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
            Available Site Manager
          </h2>

          <div className="mt-5">
            {/* <CustomTreeSelect /> */}
            <div className="mb-5">
              <div className="border border-[#111111] flex items-center p-1 rounded-md w-full  my-2 bg-white">
                <FaSearch className="ml-2" />{" "}
                <input
                  placeholder="Search by Disclaimer Configuration Name "
                  className="h-[31px] bg-transparent text-sm w-full px-2"
                />
              </div>
            </div>
            <List
              bordered
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <div className="flex w-full justify-between items-center">
                    <label className="w-full" htmlFor={`item${index}`}>
                      {item}
                    </label>
                    <Checkbox id={`item${index}`} className="ml-auto" />
                  </div>
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableSiteManagerModal;
