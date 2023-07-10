import { Collapse } from "antd";
import React from "react";
// import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SettingsSidebar = () => {
  const { Panel } = Collapse;
  const data = [
    {
      id: 1,
      isActive: true,
      name: "Tasks Settings",
      child: [
        {
          id: 1,
          name: "Hourly Rate Tasks",
          path: "/admin/settings/hourly-rate-tasks",
        },
        {
          id: 2,
          name: "Categories ",
          path: "/admin/settings/categories",
        },
      ],
    },
    {
      id: 2,
      isActive: true,
      name: "Induction",
      child: [
        {
          id: 1,
          name: "Disclaimer Configuration ",
          path: "/admin/settings/induction/disclaimer",
        },
        {
          id: 2,
          name: "Companies",
          path: "/admin/settings/induction/companies",
        },
        {
          id: 3,
          name: "Emails ",
          path: "/admin/settings/induction/emails",
        },
      ],
    },

    {
      id: 3,
      isActive: true,
      name: "User Account",
      child: [
        {
          id: 1,
          name: "Administrators ",
          path: "/admin/settings/users/admin",
        },
      ],
    },
    {
      id: 4,
      isActive: true,
      name: "Payroll Settings",
      child: [
        {
          id: 1,
          name: "Agreements",
          path: "/admin/settings/payroll/agreements",
        },
        {
          id: 2,
          name: "Employment Status",
          path: "/admin/settings/payroll/employment-status",
        },
        {
          id: 3,
          name: "Absences",
          path: "/admin/settings/payroll/absences",
        },
        {
          id: 4,
          name: "Payroll Categories ",
          path: "/admin/settings/payroll/categories",
        },
        // {
        //     id: 5,
        //     name: "Allowance",
        //     path: "",
        // },
        // {
        //     id: 1,
        //     name: "Entitlements",
        //     path: "",
        // },
        // {
        //     id: 1,
        //     name: "Employer Expenses",
        //     path: "",
        // },
      ],
    },
  ];

  // const handleSubmenu = (id, e) => {
  //   const menuItems = document.querySelectorAll(".menu-item");
  //   menuItems.forEach((item) => {
  //     item.classList.remove("active");
  //   });
  //   const menu = document.querySelector(`#menu-${id}`);

  //   // close submenu on click menu
  //   if (menu.classList.contains("active")) {
  //     menu.classList.remove("active");
  //   }
  //   // open submenu on click menu
  //   else {
  //     menu.classList.add("active");
  //   }
  // };

//   const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;
  return (
    <div className="sidebar min-h-screen bg-[#F6FAFF]">
      <Collapse accordion className="submenu-sidebar">
        {data?.map((item, index) => (
          <Panel header={item.name} className="py-1 px-5" key={index}>
            <ul>
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
          </Panel>
        ))}
      </Collapse>
      {/* <ul>
        {data?.map((item, index) => (
          <li
            className={`py-3 px-8 menu-item`}
            id={`menu-${item.id}`}
            onClick={() => handleSubmenu(item.id)}
            key={index}
          >
            {item.child ? (
              <>
                <div className={`flex justify-between items-center`}>
                  <button className="flex justify-start items-center">
                    {item.name}
                  </button>
                  <FaAngleDown className="angle" />
                </div>
                <ul className={`mt-3 hidden`}>
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

export default SettingsSidebar;
