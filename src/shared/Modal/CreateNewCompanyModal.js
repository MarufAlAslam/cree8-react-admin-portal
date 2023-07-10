import { Button, Input } from "antd";
import React, { useState, useRef, useEffect, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { ButtonSpinner } from "../../components/spinners";
import { CreateCompany } from "../../helper/setup/induction/company";
import { CreateAdminContext } from "../../layouts/SettingsLayout";

const CreateNewCompanyModal = ({ setCreateCompany }) => {
  //context
  const [createAdmincontext, setcreateAdminContext] =
    useContext(CreateAdminContext);

  //default state values
  const initialvalue = {
    name: "",
    email: "",
    errors: {
      name: "",
      email: "",
    },
    isLoading: false,
  };

  //states
  const [company, setCompany] = useState(initialvalue);

  //refs
  const name = useRef();
  const email = useRef();

  //functions
  const handleCompany = {
    getCompany: (e) => {
      setCompany({
        ...company,
        [e?.target?.name]: e?.target?.value,
      });
    },
    submitCompany: async () => {
      if (company?.name == "") {
        setCompany({
          ...company,
          errors: {
            name: "Enter name",
            email: "",
          },
        });
        name.current.focus();
      } else if (company?.email == "") {
        setCompany({
          ...company,
          errors: {
            name: "",
            email: "Enter email",
          },
        });
        email.current.focus();
      } else {
        setCompany({
          ...company,
          errors: {
            name: "",
            email: "",
          },
          isLoading: true,
        });

        let data = await CreateCompany(company);
        if (data?.status) {
          setcreateAdminContext(true);
          setCompany(initialvalue);
          setCreateCompany(false);
        } else {
          setCompany({
            ...company,
            isLoading: false,
          });
        }
      }
    },
  };

  useEffect(() => {
    setTimeout(() => {
      name.current.focus();
    }, 100);
  }, []);

  const closeModal = () => {
    setCreateCompany(false);
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
          <h2 className="text-xl font-bold">Creating a New Company</h2>

          <div className="item mt-5">
            <label htmlFor="name">Company Name</label>
            <Input
              type="text"
              className={
                company?.errors?.name
                  ? "mt-3 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                  : "mt-3"
              }
              name="name"
              id="name"
              value={company?.name}
              ref={name}
              onChange={handleCompany?.getCompany}
            />
            {company?.errors?.name && (
              <p className="pt-2 text-red-600 text-sm">
                {company?.errors?.name}
              </p>
            )}
          </div>
          <div className="item mt-5">
            <label htmlFor="name">Mail Address</label>
            <Input
              type="email"
              className={
                company?.errors?.email
                  ? "mt-3 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                  : "mt-3"
              }
              name="email"
              id="email"
              value={company?.email}
              ref={email}
              onChange={handleCompany?.getCompany}
              onKeyPress={(e) =>
                e?.key == "Enter" && handleCompany?.submitCompany()
              }
            />
            {company?.errors?.email && (
              <p className="pt-2 text-red-600 text-sm">
                {company?.errors?.email}
              </p>
            )}
          </div>
          <div className="item mt-5 text-center">
            <Button
              onClick={handleCompany?.submitCompany}
              className="btn btn-blue w-1/4 bg-blue-disable"
              disabled={company?.isLoading}
            >
              {company?.isLoading ? <ButtonSpinner /> : "Create"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewCompanyModal;
