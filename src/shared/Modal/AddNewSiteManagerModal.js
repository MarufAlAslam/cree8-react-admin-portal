import { Button, Input } from "antd";
import React from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

const AddNewSiteManagerModal = ({ setVisible }) => {
  const closeModal = () => {
    setVisible(false);
  };

  const [type, setType] = React.useState("password");

  const passwordVisible = (e) => {
    e.preventDefault();
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
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
          <h2 className="text-xl font-bold">Creating New Site Manager</h2>

          <form className="mt-4">
            <div className="item mt-5">
              <div className="flex justify-between items-center">
                <label htmlFor="name">Name</label>
              </div>
              <Input type="text" className="mt-3" name="name" id="name" />
            </div>
            <div className="item mt-5">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="mt-3"
                name="username"
                id="username"
              />
            </div>
            <div className="item mt-5">
              <label htmlFor="pass">Password</label>
              <div className="border rounded-md mt-3 flex justify-between items-center">
                <Input
                  type={type}
                  className="border-none"
                  name="password"
                  id="pass"
                />
                <button className="mr-2" onClick={passwordVisible}>
                  {type === "password" ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>
            <div className="item mt-5">
              <label htmlFor="confirm">Confirm Password</label>
              <div className="border rounded-md mt-3 flex justify-between items-center">
                <Input
                  type={type}
                  className="border-none"
                  name="password"
                  id="confirm"
                />
                <button className="mr-2" onClick={passwordVisible}>
                  {type === "password" ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
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

export default AddNewSiteManagerModal;
