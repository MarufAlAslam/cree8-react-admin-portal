import React from "react";
import logo from "../../assets/images/Admin/logo.png";
import avatar from "../../assets/images/Admin/avatar.png";

import { FaSearch } from "react-icons/fa";
import { FaCog } from "react-icons/fa";

import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="topbar py-3">
      <div className="px-8">
        <div className="flex justify-between items-center">
          <Link to="/admin/dashboard">
            <img src={logo} alt="" />
          </Link>
          <div className="flex ml-auto justify-end items-center">
            <a href="/">
              <FaSearch className="ml-5 text-2xl" />
            </a>
            <Link to="/admin/settings">
              <FaCog className="ml-5 text-2xl" />
            </Link>
            <Link to="/workers/dashboard">
              <img src={avatar} className="ml-5" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
