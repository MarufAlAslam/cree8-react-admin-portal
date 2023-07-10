import React from "react";
import NotesTable from "../../../shared/DataTable/NotesTable";
import { FaSearch } from "react-icons/fa";

const Notes = () => {
  return (
    <div className="p-6">
      <div className="topsearch text-right">
        <div className="border ml-auto mb-5 border-[#111111] flex items-center p-1 rounded-md w-full lg:w-1/3 my-2 bg-white">
          <FaSearch className="ml-2" />{" "}
          <input
            placeholder="Search by Date, Worker, Site"
            className="h-[31px] bg-transparent text-sm w-full px-2"
          />
        </div>
      </div>
      <NotesTable />
    </div>
  );
};

export default Notes;
