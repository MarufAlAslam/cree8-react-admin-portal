import React from "react";

import WorkersTable from "../../../../shared/DataTable/WorkersTable";
import TopSearchBar from "../../../../shared/Workers/TopSearchBar";
import TabBtns from "../../../../shared/Workers/TabBtns";

const Workers = () => {
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
       
       <TabBtns setTabClass={setTabClass} toggleActiveClass={toggleActiveClass} />

        <div className="table-data p-5 bg-white mt-5">
          <div className={`${tabClass}`}>
            <div className="text-right">
              <p className="text-[14px]">
                <span className="text-[14px] text-[#a1a1a1]">
                  Total Number of {
                    tabClass === "tab-active" ? "Active" : tabClass === "tab-terminated" ? "Terminated" : "All"
                  } Workers:
                </span>{" "}
                {
                    tabClass === "tab-active" ? "1234" : tabClass === "tab-terminated" ? "123" : "12345"
                }
              </p>
            </div>
            <div className="lg:overflow-hidden overflow-x-scroll mt-4">
              <WorkersTable setTabClass={setTabClass} toggleActiveClass={toggleActiveClass}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workers;
