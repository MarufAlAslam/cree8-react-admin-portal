import React from "react";
import SettingsSearchBar from "./SettingsSearchBar/SettingsSearchBar";
import SettingsTable from "../../../shared/DataTable/SettingsTable";

const Settings = () => {
  return (
    <div className="p-6">
      <div className="pt-4 bg-white">
        <SettingsSearchBar />
      </div>

      <div className="pt-4 bg-white">
        <SettingsTable />
      </div>
    </div>
  );
};

export default Settings;
