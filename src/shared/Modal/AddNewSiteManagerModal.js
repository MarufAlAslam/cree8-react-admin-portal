import { Button, Input } from "antd";
import React, { useState, useRef, useEffect } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { ButtonSpinner } from "../../components/spinners";
import {
  CreateEditSiteManager,
  GetSiteManager,
} from "../../helper/personnel/sitemanger";

const AddNewSiteManagerModal = ({ setVisible, data, setData }) => {
  //default state values
  const initialvalues = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
    employee_id: "",
    role: "",
    isSave: 1,
    errors: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
    isLoading: false,
  };

  //states
  const [siteManager, setSiteManager] = useState(initialvalues);
  const [type, setType] = React.useState("password");

  //refs
  let name = useRef();
  let email = useRef();
  let password = useRef();
  let cpassword = useRef();

  //functions
  const handleSiteManager = {
    getSiteManager: (e) => {
      setSiteManager({
        ...siteManager,
        [e?.target?.name]: e?.target?.value,
      });
    },
    submitSiteManager: async (e) => {
      if (!siteManager?.name) {
        setSiteManager({
          ...siteManager,
          errors: {
            name: "Enter name",
            email: "",
            password: "",
            cpassword: "",
          },
        });
        name.current.focus();
      } else if (!siteManager?.email) {
        setSiteManager({
          ...siteManager,
          errors: {
            name: "",
            email: "Enter username",
            password: "",
            cpassword: "",
          },
        });
        email.current.focus();
      } else if (!siteManager?.password) {
        setSiteManager({
          ...siteManager,
          errors: {
            name: "",
            email: "",
            password: "Enter password",
            cpassword: "",
          },
        });
        password.current.focus();
      } else if (!siteManager?.cpassword) {
        setSiteManager({
          ...siteManager,
          errors: {
            name: "",
            email: "",
            password: "",
            cpassword: "Enter confirm password",
          },
        });
        cpassword.current.focus();
      } else if (siteManager?.cpassword != siteManager?.password) {
        setSiteManager({
          ...siteManager,
          errors: {
            name: "",
            email: "",
            password: "",
            cpassword: "Password doesn't match confirm password",
          },
        });
        cpassword.current.focus();
      } else {
        setSiteManager({
          ...siteManager,
          errors: {
            name: "",
            email: "",
            password: "",
            cpassword: "",
          },
          isLoading: true,
        });

        let getdata = await CreateEditSiteManager(siteManager);
        if (getdata?.status) {
          let tableData = await GetSiteManager();
          if (tableData?.status) {
            setData({
              ...data,
              data: [...tableData?.data?.data],
              extra: { ...tableData?.extra },
            });
            setVisible(false);
            setSiteManager(initialvalues);
          }
        } else {
          setSiteManager({
            ...siteManager,
            isLoading: false,
          });
        }
      }
    },
  };

  const closeModal = () => {
    setVisible(false);
  };

  const passwordVisible = (e) => {
    e.preventDefault();
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      name.current.focus();
    }, 100);
  }, []);

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
              <Input
                type="text"
                id="name"
                ref={name}
                className={
                  siteManager?.errors?.name
                    ? "mt-3 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                    : "mt-3"
                }
                name="name"
                value={siteManager?.name}
                onChange={handleSiteManager?.getSiteManager}
              />
              {siteManager?.errors?.name && (
                <p className="pt-2 text-red-600 text-sm">
                  {siteManager?.errors?.name}
                </p>
              )}
            </div>
            <div className="item mt-5">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                id="username"
                ref={email}
                className={
                  siteManager?.errors?.email
                    ? "mt-3 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                    : "mt-3"
                }
                value={siteManager?.email}
                name="email"
                onChange={handleSiteManager?.getSiteManager}
              />
              {siteManager?.errors?.email && (
                <p className="pt-2 text-red-600 text-sm">
                  {siteManager?.errors?.email}
                </p>
              )}
            </div>
            <div className="item mt-5">
              <label htmlFor="pass">Password</label>
              <div
                className={
                  siteManager?.errors?.password
                    ? "mt-3 flex justify-between items-center border rounded-md border-rose-600 hover:border-rose-600 focus:border-rose-600"
                    : "border rounded-md mt-3 flex justify-between items-center"
                }
              >
                <Input
                  type={type}
                  id="pass"
                  className="border-none"
                  ref={password}
                  name="password"
                  value={siteManager?.password}
                  onChange={handleSiteManager?.getSiteManager}
                />
                <button className="mr-2" onClick={passwordVisible}>
                  {type === "password" ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              {siteManager?.errors?.password && (
                <p className="pt-2 text-red-600 text-sm">
                  {siteManager?.errors?.password}
                </p>
              )}
            </div>
            <div className="item mt-5">
              <label htmlFor="confirm">Confirm Password</label>
              <Input
                type={"password"}
                id="confirm"
                ref={cpassword}
                className={
                  siteManager?.errors?.cpassword
                    ? "mt-3 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                    : "mt-3"
                }
                name="cpassword"
                value={siteManager?.cpassword}
                onChange={handleSiteManager?.getSiteManager}
                onKeyPress={(e) =>
                  e?.key == "Enter" && handleSiteManager?.submitSiteManager()
                }
              />
              {siteManager?.errors?.cpassword && (
                <p className="pt-2 text-red-600 text-sm">
                  {siteManager?.errors?.cpassword}
                </p>
              )}
            </div>
            <div className="item mt-5 text-center">
              <Button
                className="btn btn-blue w-1/5 bg-blue-disable"
                disabled={siteManager?.isLoading}
                onClick={handleSiteManager?.submitSiteManager}
              >
                {siteManager?.isLoading ? <ButtonSpinner /> : "Create"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewSiteManagerModal;
