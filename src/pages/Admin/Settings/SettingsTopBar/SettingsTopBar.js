import { Button } from "antd";
import React, { useEffect } from "react";
import { FaCog, FaPlus } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CreateNewTaskModal from "../../../../shared/Modal/CreateNewTaskModal";
import CreateNewCategoryModal from "../../../../shared/Modal/CreateNewCategoryModal";
import CreateNewCompanyModal from "../../../../shared/Modal/CreateNewCompanyModal";
import CreateAdminDetailsModal from "../../../../shared/Modal/CreateAdminDetailsModal";
import CreateEmployementStatusModal from "../../../../shared/Modal/CreateEmpoyementStatusModal";
import CreatePayrollCategoryModal from "../../../../shared/Modal/CreatePayrollCategory";

const SettingsTopBar = ({ setPageName }) => {
  const [pagePath, setPagePath] = React.useState("");

  const location = useLocation();
  console.log("router location", location.pathname);
  const Navigator = useNavigate();

  useEffect(() => {
    setPagePath(location.pathname);
    console.log(pagePath);
  }, [location.pathname, pagePath]);

  const [visibleCreate, setVisibleCreate] = React.useState(false);
  const [CreatePayrollCategory, setCreatePayrollCategory] =
    React.useState(false);
  const [createCategory, setCreateCategory] = React.useState(false);
  const [createCompany, setCreateCompany] = React.useState(false);
  const [createAdmin, setCreateAdmin] = React.useState(false);
  const [createEmployementStatus, setCreateEmployementStatus] =
    React.useState(false);
  const createNewTask = () => {
    if (
      pagePath === "/admin/settings" ||
      pagePath === "/admin/settings/hourly-rate-tasks"
    ) {
      setVisibleCreate(true);
    } else if (pagePath === "/admin/settings/categories") {
      setCreateCategory(true);
    } else if (pagePath === "/admin/settings/induction/disclaimer") {
      Navigator("/admin/settings/induction/disclaimer/create");
    } else if (pagePath === "/admin/settings/induction/companies") {
      setCreateCompany(true);
    } else if (
      pagePath === "/admin/settings/induction/emails" ||
      pagePath === "/admin/settings/induction/emails/edit/:id"
    ) {
      Navigator("/admin/settings/induction/emails/create");
    } else if (
      pagePath === "/admin/settings/users/admin" ||
      pagePath === "/admin/settings/users/admin/history"
    ) {
      setCreateAdmin(true);
    } else if (
      pagePath === "/admin/settings/payroll/agreements" ||
      pagePath === "/admin/settings/payroll/agreements/edit"
    ) {
      Navigator("/admin/settings/payroll/agreements/create");
    } else if (pagePath === "/admin/settings/payroll/employment-status") {
      setCreateEmployementStatus(true);
    } else if (
      pagePath === "/admin/settings/payroll/absences" ||
      pagePath === "/admin/settings/payroll/absences/edit"
    ) {
      Navigator("/admin/settings/payroll/absences/create");
    } else if (pagePath === "/admin/settings/payroll/categories") {
      setCreatePayrollCategory(true);
    }
  };

  return (
    <>
      {visibleCreate && (
        <CreateNewTaskModal setVisibleCreate={setVisibleCreate} />
      )}

      {createCategory && (
        <CreateNewCategoryModal setCreateCategory={setCreateCategory} />
      )}

      {createCompany && (
        <CreateNewCompanyModal setCreateCompany={setCreateCompany} />
      )}

      {createAdmin && (
        <CreateAdminDetailsModal setCreateAdmin={setCreateAdmin} />
      )}

      {createEmployementStatus && (
        <CreateEmployementStatusModal
          setCreateEmployementStatus={setCreateEmployementStatus}
        />
      )}

      {CreatePayrollCategory && (
        <CreatePayrollCategoryModal
          setCreatePayrollCategory={setCreatePayrollCategory}
        />
      )}

      <div className="topbar py-3">
        <div className="px-8">
          <div className="flex justify-between items-center">
            <span className="flex justify-start items-center text-xl">
              <FaCog className="mr-2" />
              Setup
            </span>

            <div className="actions flex justi items-center">
              <Button
                onClick={createNewTask}
                className="flex text-white justify-center items-center py-3 border border-white h-[42px]"
              >
                Create New{" "}
                <div className="bg-orange-500 p-2 rounded-md text-white ml-3">
                  <FaPlus />
                </div>
              </Button>

              <Link to="/admin/dashboard">
                <TfiClose className="text-2xl ml-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsTopBar;
