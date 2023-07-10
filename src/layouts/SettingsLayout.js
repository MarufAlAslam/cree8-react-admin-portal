import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { GetAdministratorDetails } from "../helper/setup/user/administrator";
import SettingsSidebar from "../pages/Admin/Settings/SettingsSidebar/SettingsSidebar";
import SettingsTopBar from "../pages/Admin/Settings/SettingsTopBar/SettingsTopBar";

export const CreateAdminContext = createContext("");

const SettingsLaout = () => {
  const [createAdmincontext, setcreateAdminContext] = useState(true);

  return (
    <CreateAdminContext.Provider
      value={[createAdmincontext, setcreateAdminContext]}
    >
      <div>
        <SettingsTopBar />
        <div className="lg:flex">
          <div className="lg:w-1/6">
            <SettingsSidebar />
          </div>
          <div className="lg:w-5/6 content-holder">
            <Outlet />
          </div>
        </div>
      </div>
    </CreateAdminContext.Provider>
  );
};

export default SettingsLaout;
