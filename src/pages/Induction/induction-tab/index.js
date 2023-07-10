import React from "react";
import TabHeader from "./tab-header";
import TabBody from "./tab-body";

const InductionTab = () => {
  const [activeTab, setActiveTab] = React.useState(1);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    };
  return (
    <div>
      <TabHeader handleTabChange={handleTabChange} />
      <div className="h-[800px] overflow-y-scroll">
        <TabBody activeTab={activeTab} />
      </div>
    </div>
  );
};

export default InductionTab;
