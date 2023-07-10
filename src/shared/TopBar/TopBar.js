import React, { useEffect, useState } from "react";
import logo from "../../assets/images/Admin/logo.png";
import avatar from "../../assets/images/Admin/avatar.png";
import { Dropdown } from "antd";

import dp from "../../assets/images/Personnel/dp.png";
import { FaSearch, FaTimes } from "react-icons/fa";
import { FaCog } from "react-icons/fa";

import { Link } from "react-router-dom";
import { Logout } from "../../helper/user/auth";
import TopSearch from "../../components/TopSearch/TopSearch";
import { Authuser } from "../../auth/appAuth";

const TopBar = () => {
  const [load, setLoad] = React.useState(false);
  const [visibleSearch, setVisibleSearch] = React.useState(false);

  const initialvalue = {
    id: "",
    name: "",
    email: "",
    employee_id: "",
    mobile: "",
    role: "",
    verified: "",
    last_login: "",
    status: "",
  };
  const [user, setUser] = useState(initialvalue);

  const search = () => {
    setVisibleSearch(!visibleSearch);
  };

  const handleTopbar = {
    logout: () => {
      Logout();
    },
  };

  useEffect(() => {
    let data = Authuser();
    console.log(data);
    setUser({
      ...data,
    });
  }, []);

  const menu = (
    <div className="bg-white p-4 max-w-full w-[300px] rounded-md shadow-md">
      <div className="text-center">
        <img src={dp} className="mx-auto mb-4" alt="" />
      </div>

      {!load && (
        <div className="unload text-center">
          <h2 className="text-xl font-bold">
            {user?.name ? user?.name : "N/A"}
          </h2>
          <p className="text-black mb-4">#234</p>

          <p className="text-gray-400 mb-4">
            {user?.email ? user?.email : "N/A"}
          </p>

          <div className="flex justify-center items-center mt-5">
            <Link
              className="font-bold"
              onClick={() => {
                setLoad(true);
              }}
            >
              Details
            </Link>
            <span className="inline-block mx-4">|</span>
            <Link to="/" onClick={handleTopbar?.logout}>
              Sign Out
            </Link>
          </div>
        </div>
      )}

      {load && (
        <div className="loaded">
          <h2 className="text-xl font-bold">
            {user?.name ? user?.name : "N/A"}
          </h2>
          <p className="text-gray-400 mb-4">
            {" "}
            {user?.email ? user?.email : "N/A"}
          </p>

          <p className="text-gray-400">Card ID</p>
          <p className="text-black mb-4">
            {user?.employee_id ? user?.employee_id : "N/A"}
          </p>

          <p className="text-gray-400">Employed As</p>
          <p className="text-black mb-4">Administrator</p>

          <p className="text-gray-400">Phone Number</p>
          <p className="text-black mb-4">1800 400 800</p>

          <p className="text-gray-400">Address</p>
          <p className="text-black mb-4">
            Unit 5/47 Newheath Dr, Arundel QLD 4214
          </p>

          <div className="flex justify-center items-center mt-5">
            <Link className="font-bold" to={"/workers/dashboard"}>
              Edit
            </Link>
            <span className="inline-block mx-4">|</span>
            <Link to="/" onClick={handleTopbar?.logout}>
              Sign Out
            </Link>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <div className="topbar py-3">
        <div className="px-8">
          <div className="flex justify-between items-center">
            <Link to="/admin/dashboard">
              <div onClick={handleTopbar?.logout}>
                <img src={logo} alt="" />
              </div>
            </Link>
            <div className="flex w-1/2 ml-auto justify-end items-center">
              {visibleSearch && (
                <TopSearch setVisibleSearch={setVisibleSearch} />
              )}

              {!visibleSearch && (
                <button onClick={search}>
                  <FaSearch className="ml-5 text-2xl" />
                </button>
              )}
              <Link to="/admin/settings">
                <FaCog className="ml-5 text-2xl" />
              </Link>
              <Dropdown
                overlay={menu}
                trigger={["click"]}
                placement="bottomRight"
              >
                <div className="flex items-center cursor-pointer">
                  <img
                    src={avatar}
                    className="ml-5"
                    alt=""
                    onClick={() => {
                      setLoad(false);
                    }}
                  />
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
