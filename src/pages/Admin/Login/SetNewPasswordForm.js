import { Input, Row, Col } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { ResetPassword } from "../../../helper/user/auth";
import logo from "../../../assets/images/Login/logo.png";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../../layouts/Main";
import { ButtonSpinner } from "../../../components/spinners";

const SetNewPasswordForm = () => {
  //navigate
  let navigate = useNavigate();

  //get context
  const [data, setData] = useContext(AppContext);

  //default state values
  const initialvalues = {
    password: "",
    confirm_password: "",
    customer_id: data?.customer_id,
    error: {
      password: "",
      confirm_password: "",
    },
    isLoading: false,
  };

  //states
  const [resetPassword, setResetPassword] = useState(initialvalues);

  //refs
  let password = useRef();
  let confirm_password = useRef();

  //functions
  const handleResetPassword = {
    getResetPassword: (e) => {
      setResetPassword({
        ...resetPassword,
        [e?.target?.name]: e?.target?.value,
      });
    },
    submitResetPassword: async () => {
      console.log(resetPassword);
      if (!resetPassword?.customer_id) {
        navigate("/reset-password");
      } else if (resetPassword?.password == "") {
        setResetPassword({
          ...resetPassword,
          error: {
            password: "Enter password",
            confirm_password: "",
          },
        });
        password.current.focus();
      } else if (resetPassword?.confirm_password == "") {
        setResetPassword({
          ...resetPassword,
          error: {
            password: "",
            confirm_password: "Enter confirm password",
          },
        });
        confirm_password.current.focus();
      } else if (resetPassword?.confirm_password != resetPassword?.password) {
        setResetPassword({
          ...resetPassword,
          error: {
            password: "",
            confirm_password: "Confirm password doesn't match password",
          },
        });
        confirm_password.current.focus();
      } else {
        setResetPassword({
          ...resetPassword,
          error: {
            password: "",
            confirm_password: "",
          },
          isLoading: true,
        });

        let data = await ResetPassword(resetPassword);
        if (data?.status) {
          setResetPassword({
            ...resetPassword,
            isLoading: false,
          });
          navigate("/");
        } else {
          setResetPassword({
            ...resetPassword,
            error: {
              password: "",
              confirm_password: data?.message,
            },
            isLoading: false,
          });
          confirm_password.current.focus();
        }
      }
    },
  };

  useEffect(() => {
    password.current.focus();
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
            Set New Password
          </h1>
          <p className="text-sm text-center text-[#787878] mb-6">
            Set New Password for your account
          </p>
          <label className="text-sm mb-2 block">Password</label>
          <Input
            type="password"
            prefix={<LockOutlined />}
            placeholder="Password"
            ref={password}
            className={
              resetPassword?.error?.password
                ? "py-3 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                : "py-3"
            }
            name="password"
            value={resetPassword?.password}
            onChange={handleResetPassword?.getResetPassword}
          />
          {resetPassword?.error?.password && (
            <p className="pt-2 text-red-600 text-sm">
              {resetPassword?.error?.password}
            </p>
          )}

          <label className="text-sm mb-2 block mt-2">Confirm Password</label>
          <Input
            type="password"
            prefix={<LockOutlined />}
            placeholder="Confirm Password"
            ref={confirm_password}
            className={
              resetPassword?.error?.confirm_password
                ? "py-3 border-1 border-rose-600 hover:border-rose-600 focus:border-rose-600"
                : "py-3"
            }
            name="confirm_password"
            value={resetPassword?.confirm_password}
            onChange={handleResetPassword?.getResetPassword}
            onKeyPress={(e) =>
              e?.key == "Enter" && handleResetPassword?.submitResetPassword()
            }
          />
          {resetPassword?.error?.confirm_password && (
            <p className="pt-2 text-red-600 text-sm">
              {resetPassword?.error?.confirm_password}
            </p>
          )}

          <button
            onClick={handleResetPassword?.submitResetPassword}
            className={
              resetPassword?.isLoading
                ? "font-semibold bg-blue-500 w-full text-white font-bold  mt-5 py-3 px-4 rounded opacity-50 cursor-not-allowed  w-full block p-3 mt-6  text-center rounded-md"
                : "font-semibold btn hover:bg-orange-600 hover:text-white btn-blue w-full block p-3 mt-6  text-center rounded-md"
            }
          >
            {resetPassword?.isLoading ? <ButtonSpinner /> : "Change Password "}
          </button>

          <div className="flex justify-center items-center">
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
        </Col>
      </Row>
    </>
  );
};

export default SetNewPasswordForm;
