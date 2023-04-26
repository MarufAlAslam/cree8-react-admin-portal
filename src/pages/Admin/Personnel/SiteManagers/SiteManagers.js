import React from "react";
import TopSearchBarManagers from "../../../../shared/Workers/TopSearchBarManagers";
import SiteManagerTable from "../../../../shared/DataTable/SiteManagersTable";

const SiteManagers = () => {
  return (
    <div className="p-6">
      <TopSearchBarManagers />

      <div className="bg-white">
        <div className="text-right text-sm px-6 py-4">
          <span>Total Number of Site Managers:</span>
          &nbsp; 234
        </div>
        <SiteManagerTable />
      </div>
    </div>
  );
};

export default SiteManagers;
