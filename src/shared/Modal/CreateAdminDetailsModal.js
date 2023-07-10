import { Button, Input } from "antd";
import React, { useState, useRef, useContext, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { ButtonSpinner } from "../../components/spinners";
import {
  GetAdministratorDetails,
  HandleAdministrator,
} from "../../helper/setup/user/administrator";
import { CreateAdminContext } from "../../layouts/SettingsLayout";

const CreateAdminDetailsModal = ({ setCreateAdmin }) => {
  //context
  const [createAdmincontext, setcreateAdminContext] =
    useContext(CreateAdminContext);

  //default state value
  const initialvalue = {
    name: "",
    email: "",
    employee_id: "",
    password: "",
    isSave: 1,
    confirmpassword: "",
    errors: {
      name: "",
      email: "",
      employee_id: "",
      password: "",
      confirmpassword: "",
    },
    isLoading: false,
  };

  //states
  const [adminDetails, setAdminDetails] = useState(initialvalue);

  //refs
  const name = useRef();
  const email = useRef();
  const employee_id = useRef();
  const password = useRef();
  const confirmpassword = useRef();

  //functions
  const handleAdminDetails = {
    getAdminDetails: (e) => {
      setAdminDetails({
        ...adminDetails,
        [e?.target?.name]: e?.target?.value,
      });
    },
    submitAdminDetails: async () => {
      console.log(adminDetails);
      if (adminDetails?.name == "") {
        setAdminDetails({
          ...adminDetails,
          errors: {
            name: "Enter name",
            email: "",
            password: "",
            confirmpassword: "",
          },
        });
        name.current.focus();
      } else if (adminDetails?.email === "") {
        setAdminDetails({
          ...adminDetails,
          errors: {
            name: "",
            email: "Enter username",
            password: "",
            confirmpassword: "",
          },
        });
        email.current.focus();
      } else if (adminDetails?.employee_id === "") {
        setAdminDetails({
          ...adminDetails,
          errors: {
            name: "",
            email: "",
            employee_id: "Enter employee id",
            password: "",
            confirmpassword: "",
          },
        });
        employee_id.current.focus();
      } else if (adminDetails?.password === "") {
        setAdminDetails({
          ...adminDetails,
          errors: {
            name: "",
            email: "",
            password: "Enter password",
            confirmpassword: "",
          },
        });
        password.current.focus();
      } else if (adminDetails?.confirmpassword === "") {
        setAdminDetails({
          ...adminDetails,
          errors: {
            name: "",
            email: "",
            password: "",
            confirmpassword: "Enter confirm password",
          },
        });
        confirmpassword.current.focus();
      } else if (adminDetails?.confirmpassword !== adminDetails?.password) {
        setAdminDetails({
          ...adminDetails,
          errors: {
            name: "",
            email: "",
            password: "",
            confirmpassword: "Confirm password does not match password",
          },
        });
        confirmpassword.current.focus();
      } else {
        setAdminDetails({
          ...adminDetails,
          errors: {
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
          },
          isLoading: true,
        });

        let adminDetailsData = await HandleAdministrator(adminDetails);

        if (adminDetailsData?.status) {
          setCreateAdmin(false);
          let getdata = await GetAdministratorDetails();
          setcreateAdminContext(true);
          setAdminDetails(initialvalue);
        } else {
          setAdminDetails(initialvalue);
        }
      }
    },
  };

  const closeModal = () => {
    setCreateAdmin(false);
  };

  useEffect(() => {
    name.current.focus();
  }, []);

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="text-right">
            <button className="close-modal" onClick={closeModal}>
              <FaTimes />
            </button>
          </div>

          <div className="modal-body mt-3">
            <h2 className="text-xl font-bold">
              Creating Administrator Details
            </h2>

            <form className="mt-4">
              <div className="item mt-5">
                <label htmlFor="name">Name</label>
                <Input
                  type="text"
                  id="name"
                  ref={name}
                  className={
                    adminDetails?.errors?.name
                      ? "mt-3 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                      : "mt-3"
                  }
                  name="name"
                  onChange={handleAdminDetails?.getAdminDetails}
                />
                {adminDetails?.errors?.name && (
                  <p className="pt-2 text-red-600 text-sm">
                    {adminDetails?.errors?.name}
                  </p>
                )}
              </div>
              <div className="item mt-5">
                <label htmlFor="name">Email</label>
                <Input
                  type="text"
                  id="email"
                  ref={email}
                  className={
                    adminDetails?.errors?.email
                      ? "mt-3 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                      : "mt-3"
                  }
                  name="email"
                  onChange={handleAdminDetails?.getAdminDetails}
                />
                {adminDetails?.errors?.email && (
                  <p className="pt-2 text-red-600 text-sm">
                    {adminDetails?.errors?.email}
                  </p>
                )}
              </div>
              <div className="item mt-5">
                <label htmlFor="name">Employee Id</label>
                <Input
                  type="text"
                  id="employee_id"
                  ref={employee_id}
                  className={
                    adminDetails?.errors?.employee_id
                      ? "mt-3 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                      : "mt-3"
                  }
                  name="employee_id"
                  onChange={handleAdminDetails?.getAdminDetails}
                />
                {adminDetails?.errors?.employee_id && (
                  <p className="pt-2 text-red-600 text-sm">
                    {adminDetails?.errors?.employee_id}
                  </p>
                )}
              </div>
              <div className="item mt-5">
                <label
                  htmlFor="name"
                  onChange={handleAdminDetails?.getAdminDetails}
                >
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  ref={password}
                  className={
                    adminDetails?.errors?.password
                      ? "mt-3 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                      : "mt-3"
                  }
                  name="password"
                  onChange={handleAdminDetails?.getAdminDetails}
                />
                {adminDetails?.errors?.password && (
                  <p className="pt-2 text-red-600 text-sm">
                    {adminDetails?.errors?.password}
                  </p>
                )}
              </div>
              <div className="item mt-5">
                <label htmlFor="name">Confirm Password</label>
                <Input
                  type="password"
                  id="confirmpassword"
                  ref={confirmpassword}
                  className={
                    adminDetails?.errors?.confirmpassword
                      ? "mt-3 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                      : "mt-3"
                  }
                  name="confirmpassword"
                  onChange={handleAdminDetails?.getAdminDetails}
                  onKeyPress={(e) =>
                    e?.key == "Enter" &&
                    handleAdminDetails?.submitAdminDetails()
                  }
                />
                {adminDetails?.errors?.confirmpassword && (
                  <p className="pt-2 text-red-600 text-sm">
                    {adminDetails?.errors?.confirmpassword}
                  </p>
                )}
              </div>
              <div className="item mt-5 text-center">
                <Button
                  className="btn btn-blue w-1/5 bg-blue-disable"
                  onClick={handleAdminDetails?.submitAdminDetails}
                  disabled={adminDetails?.isLoading}
                >
                  {adminDetails?.isLoading ? <ButtonSpinner /> : "Create"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAdminDetailsModal;
