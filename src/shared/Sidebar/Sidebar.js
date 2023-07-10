import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { GrHomeRounded } from "react-icons/gr";
import { RiBuildingLine } from "react-icons/ri";
import { BiWallet } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { Collapse } from "antd";

const Sidebar = () => {
  const data = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <GrHomeRounded className="mr-2" />,
    },
    {
      name: "Worksite",
      path: "/admin/worksite",
      icon: <RiBuildingLine className="mr-2" />,
    },
    {
      name: "Personnel",
      icon: <FaUserAlt className="mr-2" />,
      child: [
        {
          id: 1,
          name: "Workers",
          path: "/admin/personnel/workers",
        },
        {
          id: 2,
          name: "Site Managers",
          path: "/admin/personnel/site-managers",
        },
      ],
    },
    {
      name: "Payroll",
      // path: "/admin/payroll",
      icon: <BiWallet className="mr-2" />,
      child: [
        {
          id: 1,
          name: "Timesheets",
          path: "/admin/timesheets",
        },
        {
          id: 2,
          name: "Productivity",
          path: "/admin/productivity",
        },
        {
          id: 3,
          name: "Allowances",
          path: "/admin/allowances",
        },
        {
          id: 4,
          name: "Notes",
          path: "/admin/notes",
        }
      ],
    },
  ];

  const {Panel} = Collapse;

  // const [submenu, setSubmenu] = React.useState("hidden");
  // const [active, setActive] = React.useState("");
  return (
    <div className="sidebar min-h-screen bg-[#F6FAFF]">
     <Collapse accordion className="submenu-sidebar py-1 px-5">
        {data.map((item, index) => (
          item.child ? <Panel header={<div className="flex justify-start items-center text-sm">{item.icon}{item.name}</div>}  key={index}>
            <ul>
              {item?.child?.map((item, index) => (
                <li key={index} className="px-5 py-1">
                  <NavLink
                    to={item.path}
                    className="flex justify-start items-center text-sm"
                  >
                    {item.icon}
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Panel> : <NavLink
                to={item.path}
                className="flex justify-start items-center px-[16px] py-[12px]"
              >
                {item.icon}
                {item.name}
              </NavLink>
        ))}
      </Collapse>
      {/* <ul>
        {data?.map((item, index) => (
          <li className="py-3 px-8" key={index}>
            {item.child ? (
              <>
                <div
                  className={`flex justify-between items-center ${active}`}
                  onClick={() => {
                    setSubmenu(submenu === "hidden" ? "block" : "hidden");
                    setActive(active === "" ? "active" : "");
                  }}
                >
                  <button className="flex justify-start items-center">
                    {item.icon}
                    {item.name}
                  </button>
                  <FaAngleDown className="angle" />
                </div>
                <ul className={`mt-3 ${submenu}`}>
                  {item.child.map((item, index) => (
                    <li className="py-1 px-5" key={index}>
                      <NavLink
                        to={item.path}
                        className="flex justify-start items-center text-sm"
                      >
                        {item.icon}
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <NavLink
                to={item.path}
                className="flex justify-start items-center"
              >
                {item.icon}
                {item.name}
              </NavLink>
            )}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Sidebar;
