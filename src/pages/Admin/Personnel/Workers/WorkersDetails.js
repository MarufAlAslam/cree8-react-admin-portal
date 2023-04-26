import React from "react";
import TopSearchBar from "../../../../shared/Workers/TopSearchBar";

import { useLocation } from "react-router-dom";

import TabBtns from "../../../../shared/Workers/TabBtns";
import ActiveProfile from "./WorkerProfiles/ActiveProfile";
import TerminatedProfile from "./WorkerProfiles/TerminatedProfile";

const WorkersDetails = () => {
  const location = useLocation();

  const data = location.state.data;
  console.log(data);
  const [tabClass, setTabClass] = React.useState("tab-active");

  const toggleActiveClass = (e) => {
    const btns = document.querySelectorAll(".tab-buttons button span");
    btns.forEach((btn) => {
      btn.classList.remove("btn-blue");
    });
    e.target.classList.add("btn-blue");
  };
  return (
    <div className="p-6">
      <TopSearchBar />

      <div className="data-card py-3 my-3">
        <TabBtns
          setTabClass={setTabClass}
          toggleActiveClass={toggleActiveClass}
        />

        <div className="tab-contents">
          {tabClass === "tab-active" ? (
            <ActiveProfile data={data}/>
          ) : tabClass === "tab-terminated" ? (
            <TerminatedProfile data={data}/>
          ) : (
            "all"
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkersDetails;
