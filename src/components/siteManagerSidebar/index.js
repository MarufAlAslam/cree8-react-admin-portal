import React from "react";
import logo from "../../assets/images/Site-Manager/sidebar-logo.png";

import dashboardLogo from "../../assets/images/Site-Manager/dashboard.png";
import worksiteLogo from "../../assets/images/Site-Manager/worksite.png";
import workersLogo from "../../assets/images/Site-Manager/workers.png";
import accountLogo from "../../assets/images/Site-Manager/accont.png";
import { NavLink } from "react-router-dom";

const SiteManagerSidebar = () => {
  const menuItems = [
    {
      id: 1,
      name: "Dashboard",
      logo: dashboardLogo,
      link: "/site-manager/dashboard",
    },
    {
      id: 2,
      name: "Worksite",
      logo: worksiteLogo,
      link: "/site-manager/worksite",
    },
    {
      id: 3,
      name: "Workers",
      logo: workersLogo,
      link: "/site-manager/workers",
    },
    {
      id: 4,
      name: "Account",
      logo: accountLogo,
      link: "/site-manager/account",
    },
  ];
  return (
    <div className="bg-[#0F4C7D] rounded-[10px] p-[20px] text-white text-center manager-sidebar relative flex flex-col justify-center items-center sitemanager-sidebar">
      <div className="logo-holder absolute z-20 top-0 left-0 w-full pt-[20px] text-center md:block hidden">
        <img src={logo} alt="logo" className="mx-auto mb-[10px] w-[38px]" />
        <p className="font-medium text-[17px]">AM8 Onsite</p>
      </div>

      {menuItems.map((item) => (
        <NavLink to={item.link} className="menu-item rounded-[10px] sidebar-menu-item relative block w-full md:mb-[20px] p-[10px]" key={item.id}>
          <img
            src={item.logo}
            alt="logo"
            className="mx-auto mb-[10px] w-[24px] relative z-20 mt-[5px]"
          />
          <p className="font-bold text-white text-[12px]">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default SiteManagerSidebar;
