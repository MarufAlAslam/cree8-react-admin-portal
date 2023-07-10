import React, { useEffect, useRef, useState } from "react";
import { Form, Input, Row, Col } from "antd";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../layouts/Main";

import logo from "../../../assets/images/Login/logo.png";
import { ForgetPasswordOtp } from "../../../helper/user/auth";
import { ButtonSpinner } from "../../../components/spinners";

const OtpForm = () => {
  const onFinish = (values) => {};

  //navigate
  let navigate = useNavigate();

  //get context
  const [data, setData] = useContext(AppContext);

  //default state values
  const initialvalue = {
    otp_1: "",
    otp_2: "",
    otp_3: "",
    otp_4: "",
    errors: {
      otp: "",
    },
    isLoading: false,
  };

  //states
  const [otp, setOtp] = useState(initialvalue);

  //refs
  const otp_1 = useRef();

  //switch to next input field on entering a value
  const handleKeyUp = (e) => {
    const input = e.target;
    const inputLength = input.value.length;
    const maxLength = input.attributes.maxLength.value;

    setOtp({
      ...otp,
      [e?.target?.name]: e?.target?.value,
    });
    if (inputLength >= maxLength) {
      const nextSibling = input.nextElementSibling;
      if (nextSibling === null) {
        return;
      } else {
        nextSibling.focus();
      }
    } else {
      if (input.previousElementSibling) {
        input.previousElementSibling.focus();
      }
    }
  };

  //functions
  const handleOtp = {
    submitOtp: async () => {
      if (!data?.hashed_otp) {
        navigate("/reset-password");
      } else if (!data?.customer_id) {
        navigate("/reset-password");
      } else if (
        otp?.otp_1 == "" ||
        otp?.otp_2 == "" ||
        otp?.otp_3 == "" ||
        otp?.otp_4 == ""
      ) {
        setOtp({
          ...otp,
          errors: {
            otp: "Enter otp",
          },
        });
      } else {
        setOtp({
          ...otp,
          errors: {
            otp: "",
          },
          isLoading: true,
        });

        let getData = await ForgetPasswordOtp({
          otp: otp?.otp_1 + otp?.otp_2 + otp?.otp_3 + otp?.otp_4,
          ...data,
        });
        if (getData?.status) {
          navigate("/reset-password/new");
          setOtp({
            ...otp,
            isLoading: false,
          });
        } else {
          setOtp({
            ...otp,
            errors: {
              otp: getData?.message,
            },
            isLoading: false,
          });
        }
      }
    },
  };

  useEffect(() => {
    otp_1.current.focus();
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
          <h1 className="text-center text-2xl font-semibold mb-1">
            OTP Verification
          </h1>
          <p className="text-center text-sm text-[#787878] mb-6">
            Enter the OTP that we have sent to your E-mail
          </p>
          <Form
            name="forget-password-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <div className="flex justify-between items-center">
              <Input
                onKeyUp={handleKeyUp}
                name="otp_1"
                ref={otp_1}
                maxLength={1}
                required
                className="py-3 w-1/4 my-4 mx-4 text-lg placeholder:text-black text-center font-bold"
                placeholder=""
              />
              <Input
                onKeyUp={handleKeyUp}
                name="otp_2"
                maxLength={1}
                required
                className="py-3 w-1/4 my-4 mx-4 text-lg placeholder:text-black text-center font-bold"
                placeholder=""
              />
              <Input
                onKeyUp={handleKeyUp}
                name="otp_3"
                maxLength={1}
                required
                className="py-3 w-1/4 my-4 mx-4 text-lg placeholder:text-black text-center font-bold"
                placeholder=""
              />
              <Input
                onKeyUp={handleKeyUp}
                name="otp_4"
                maxLength={1}
                required
                className="py-3 w-1/4 my-4 mx-4 text-lg placeholder:text-black text-center font-bold"
                placeholder=""
                onKeyPress={(e) => e?.key == "Enter" && handleOtp?.submitOtp()}
              />
            </div>

            {otp?.errors?.otp && (
              <p className="pt-2 text-red-600 text-sm">{otp?.errors?.otp}</p>
            )}

            <button
              onClick={handleOtp?.submitOtp}
              className={
                otp?.isLoading
                  ? "font-semibold bg-blue-500 w-full text-white font-bold  mt-5 py-3 px-4 rounded opacity-50 cursor-not-allowed  w-full block p-3 mt-6  text-center rounded-md"
                  : "font-semibold btn hover:bg-orange-600 hover:text-white btn-blue w-full block p-3 mt-6  text-center rounded-md"
              }
            >
              {otp?.isLoading ? <ButtonSpinner /> : "Continue"}
            </button>
          </Form>

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

export default OtpForm;
