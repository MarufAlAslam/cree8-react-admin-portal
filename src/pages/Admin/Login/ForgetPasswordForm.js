import React, { useContext, useEffect } from "react";
import { Input, Row, Col } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/Login/logo.png";
import { useRef, useState } from "react";
import { ForgetPassword } from "../../../helper/user/auth";
import { ButtonSpinner } from "../../../components/spinners";
import { AppContext } from "../../../layouts/Main";

const ForgetPasswordForm = () => {
  //navigate
  let navigate = useNavigate();

  //get context
  const [data, setData] = useContext(AppContext);

  //ref
  const email = useRef();

  //default state
  const initialvalues = {
    email: "",
    errors: {
      email: "",
    },
    customer_id: "",
    hashed_otp: "",
    isLoading: false,
  };

  //states
  const [forgetPassoword, setForgetPassword] = useState(initialvalues);

  //functions
  const handleForgetPassword = {
    getForgetPassword: (e) => {
      setForgetPassword({
        ...forgetPassoword,
        [e?.target?.name]: e?.target?.value,
      });
    },
    forgetPassword: async () => {
      if (forgetPassoword?.email == "") {
        setForgetPassword({
          ...forgetPassoword,
          errors: {
            email: "Enter email",
          },
        });
        email.current.focus();
      } else {
        setForgetPassword({
          ...forgetPassoword,
          isLoading: true,
        });

        let data = await ForgetPassword(forgetPassoword);
        if (data?.status) {
          setForgetPassword({
            ...forgetPassoword,
            customer_id: data?.data?.data?.customer_id,
            hashed_otp: data?.data?.data?.hashed_otp,
            isLoading: false,
          });
          setData({
            customer_id: data?.data?.data?.customer_id,
            hashed_otp: data?.data?.data?.hashed_otp,
          });
          navigate("/reset-password/otp");
        } else {
          setForgetPassword({
            ...forgetPassoword,
            errors: {
              email: data?.message,
            },
            isLoading: false,
          });
        }
      }
    },
  };

  useEffect(() => {
    email.current.focus();
  }, []);

  return (
    <>
      <Row
        justify="center"
        className="p-20 text-black bg-white w-[550px] max-w-full rounded-md"
      >
        <Col className="w-full">
          <div className="text-center">
            <img
              src={logo}
              alt="logo"
              className="mx-auto  mb-4 object-contain"
            />
          </div>
          <h1 className="text-center text-2xl font-semibold mb-2">
            Enter Email Address
          </h1>
          <p className="text-sm text-center text-[#787878] mb-6">
            Enter your registered email address to receive an OTP
          </p>
          <label className="text-sm mb-2 block">Email</label>
          <Input
            prefix={<MailOutlined />}
            placeholder="Email"
            ref={email}
            className={
              forgetPassoword?.errors?.email
                ? "py-3  border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                : "py-3"
            }
            name="email"
            onChange={handleForgetPassword?.getForgetPassword}
            onKeyPress={(e) =>
              e?.key == "Enter" && handleForgetPassword?.forgetPassword()
            }
          />
          {forgetPassoword?.errors?.email && (
            <p className="pt-2 text-red-600 text-sm">
              {forgetPassoword?.errors?.email}
            </p>
          )}
          <button
            onClick={handleForgetPassword?.forgetPassword}
            className={
              forgetPassoword?.isLoading
                ? "font-semibold  bg-blue-500 w-full text-white font-bold  mt-5 py-3 px-4 rounded opacity-50 cursor-not-allowed"
                : "font-semibold 	mt-5 btn hover:bg-orange-600 hover:text-white btn-blue w-full block p-3 text-center rounded-md"
            }
          >
            {forgetPassoword?.isLoading ? <ButtonSpinner /> : "Continue"}
          </button>

          <div className="flex justify-center items-center">
            <div className="pt-2">
              <p className="text-sm">
                Go Back to{" "}
                <Link
                  className="inline-block align-baseline text-sm text-orange-600 hover:text-orange-600"
                  to="/"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default ForgetPasswordForm;
