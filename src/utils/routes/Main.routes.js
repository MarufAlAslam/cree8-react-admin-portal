import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Admin/Login/Login";
import AdminLayout from "../../layouts/Admin";
import Dashboard from "../../pages/Admin/Dashboard/Dashboard";
import Worksite from "../../pages/Admin/Worksite/Worksite";
import CreateNewWorksite from "../../pages/Admin/Worksite/CreateNewWorksite/CreateNewWorksite";
import WorksiteDetails from "../../pages/Admin/Worksite/WorksiteDetails/WorksiteDetails";
import EditWorksite from "../../pages/Admin/Worksite/EditWorksite/EditWorksite";
import Workers from "../../pages/Admin/Personnel/Workers/Workers";
import WorkersDetails from "../../pages/Admin/Personnel/Workers/WorkersDetails";
import SiteManagers from "../../pages/Admin/Personnel/SiteManagers/SiteManagers";
import SiteManagerHistory from "../../pages/Admin/Personnel/SiteManagers/SiteManagerHistory";
import EditSiteManagerHistory from "../../pages/Admin/Personnel/SiteManagers/EditSiteManagerHistory";
import Settings from "../../pages/Admin/Settings/Settings";
import SettingsLaout from "../../layouts/SettingsLayout";
import WorkersLayout from "../../layouts/Workers";
import WorkersDashboard from "../../pages/Workers/WorkersDashboard";
import Companies from "../../pages/Admin/Companies/Companies";
import Emails from "../../pages/Admin/Emails/Emails";
// import EditEmail from "../../pages/Admin/Emails/EditEmail";
import DisclaimerConfigurations from "../../pages/Admin/DisclaimerConfigurations/DisclaimerConfigurations";
import EditDisclaimer from "../../pages/Admin/DisclaimerConfigurations/EditDisclaimer";
import Categories from "../../pages/Admin/Settings/Categories/Categories";
import CreateNewEmail from "../../pages/Admin/Emails/CreateNewEmail";
import AdminAccount from "../../pages/Admin/Settings/AdministratorAccounts/AdminAccount";
import AdminHistory from "../../pages/Admin/Settings/AdministratorAccounts/AdminHistory";
import EditAdminHistory from "../../pages/Admin/Settings/AdministratorAccounts/EditAdminHistory";
import Payroll from "../../pages/Admin/Settings/Payroll/Agreements/Agreements";
import CreateAgreement from "../../pages/Admin/Settings/Payroll/Agreements/CreateAgreement";
import EmployementStatus from "../../pages/Admin/Settings/Payroll/EmployementStatus/EmployementStatus";
import ForgetPassword from "../../pages/Admin/Login/ForgetPassword";
import Search from "../../pages/Admin/Search/Search";
import Absences from "../../pages/Admin/Settings/Payroll/Absences/Absences";
import CreateAbsence from "../../pages/Admin/Settings/Payroll/Absences/CreateAbsence";
import EditAbsence from "../../pages/Admin/Settings/Payroll/Absences/EditAbsence";
import PayrollCategories from "../../pages/Admin/Settings/Payroll/Categories/Categories";
import OTP from "../../pages/Admin/Login/OTP";
import SetNewPasword from "../../pages/Admin/Login/SetNewPassword";
import AdminPayroll from "../../pages/Admin/Payroll/Payroll";
import Productivity from "../../pages/Admin/Payroll/Productivity";
import Notes from "../../pages/Admin/Payroll/Notes";
import Allowences from "../../pages/Admin/Payroll/Allowences/Allowences";
import AreaCardDetails from "../../components/areaCardDetails/AareaCardDetails";
import SiteManagerLayout from "../../layouts/SiteManagerLayout";
import SiteManagerDashboard from "../../layouts/SiteManagerDashboard";
import Timeline from "../../pages/Site-manager/dashboard";
import SiteManagerWorksites from "../../pages/Site-manager/worksites";
import SiteManagerWorkers from "../../pages/Site-manager/workers";
import WorksiteTimehseets from "../../pages/Site-manager/worksites/worksite-timesheets";
import Induction from "../../pages/Induction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: 'induction',
    element: <Induction/>
  },
  {
    path: "/reset-password",
    element: <ForgetPassword />,
  },
  {
    path: "/reset-password/otp",
    element: <OTP />,
  },
  {
    path: "/reset-password/new",
    element: <SetNewPasword />,
  },
  // search page
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },

      // worksite
      {
        path: "/admin/worksite",
        element: <Worksite />,
      },
      {
        path: "/admin/worksite/details",
        element: <WorksiteDetails />,
      },
      {
        path: "/admin/worksite/details/card",
        element: <AreaCardDetails />,
      },
      {
        path: "/admin/worksite/create",
        element: <CreateNewWorksite />,
      },
      {
        path: "/admin/worksite/edit",
        element: <EditWorksite />,
      },

      // admin payroll
      {
        path: "/admin/payroll",
        element: <AdminPayroll />,
      },
      {
        path: "/admin/productivity",
        element: <Productivity />,
      },
      {
        path: "/admin/allowances",
        element: <Allowences />,
      },
      {
        path: "/admin/timesheets",
        element: <PayrollCategories />,
      },
      {
        path: "/admin/notes",
        element: <Notes />,
      },

      // personnel - workers
      {
        path: "/admin/personnel/workers",
        element: <Workers />,
      },
      {
        path: "/admin/personnel/workers/details",
        element: <WorkersDetails />,
      },

      // personnel - site managers
      {
        path: "/admin/personnel/site-managers",
        element: <SiteManagers />,
      },
      {
        path: "/admin/personnel/site-managers/history",
        element: <SiteManagerHistory />,
      },
      {
        path: "/admin/personnel/site-managers/edit-history",
        element: <EditSiteManagerHistory />,
      },
    ],
  },

  // admin settings
  {
    path: "/admin/settings",
    element: <SettingsLaout />,
    children: [
      {
        path: "/admin/settings",
        element: <Settings />,
      },
      {
        path: "/admin/settings/hourly-rate-tasks",
        element: <Settings />,
      },
      {
        path: "/admin/settings/categories",
        element: <Categories />,
      },

      // induction - companies
      {
        path: "/admin/settings/induction/companies",
        element: <Companies />,
      },

      // induction - emails
      {
        path: "/admin/settings/induction/emails",
        element: <Emails />,
      },
      {
        path: "/admin/settings/induction/emails/edit/:id",
        element: <CreateNewEmail />,
      },
      {
        path: "/admin/settings/induction/emails/create",
        element: <CreateNewEmail />,
      },

      // induction - disclaimer
      {
        path: "/admin/settings/induction/disclaimer",
        element: <DisclaimerConfigurations />,
      },
      {
        path: "/admin/settings/induction/disclaimer/create",
        element: <EditDisclaimer />,
      },
      {
        path: "/admin/settings/induction/disclaimer/edit/:id",
        element: <EditDisclaimer />,
      },

      // user accounts - admin
      {
        path: "/admin/settings/users/admin",
        element: <AdminAccount />,
      },
      {
        path: "/admin/settings/users/admin/history",
        element: <AdminHistory />,
      },
      {
        path: "/admin/settings/users/admin/history/edit",
        element: <EditAdminHistory />,
      },

      // payroll - agreements
      {
        path: "/admin/settings/payroll/agreements",
        element: <Payroll />,
      },
      {
        path: "/admin/settings/payroll/agreements/create",
        element: <CreateAgreement />,
      },
      {
        path: "/admin/settings/payroll/agreements/edit",
        element: <CreateAgreement />,
      },

      // payroll - employement status
      {
        path: "/admin/settings/payroll/employment-status",
        element: <EmployementStatus />,
      },

      // payroll - absence
      {
        path: "/admin/settings/payroll/absences",
        element: <Absences />,
      },
      {
        path: "/admin/settings/payroll/absences/create",
        element: <CreateAbsence />,
      },
      {
        path: "/admin/settings/payroll/absences/edit",
        element: <EditAbsence />,
      },

      // payroll - categories
      {
        path: "/admin/settings/payroll/categories",
        element: <PayrollCategories />,
      },

      // user accounts - admin
      {
        path: "/admin/settings/users/admin",
        element: <AdminAccount />,
      },
      {
        path: "/admin/settings/users/admin/history",
        element: <AdminHistory />,
      },
      {
        path: "/admin/settings/users/admin/history/edit",
        element: <EditAdminHistory />,
      },

      // payroll - agreements
      {
        path: "/admin/settings/payroll/agreements",
        element: <Payroll />,
      },
      {
        path: "/admin/settings/payroll/agreements/create",
        element: <CreateAgreement />,
      },
      {
        path: "/admin/settings/payroll/agreements/edit",
        element: <CreateAgreement />,
      },

      // payroll - employement status
      {
        path: "/admin/settings/payroll/employment-status",
        element: <EmployementStatus />,
      },

      // payroll - absence
      {
        path: "/admin/settings/payroll/absences",
        element: <Absences />,
      },
      {
        path: "/admin/settings/payroll/absences/create",
        element: <CreateAbsence />,
      },
      {
        path: "/admin/settings/payroll/absences/edit",
        element: <EditAbsence />,
      },

      // payroll - categories
      {
        path: "/admin/settings/payroll/categories",
        element: <PayrollCategories />,
      },
    ],
  },

  // workers dashboard
  {
    path: "/workers",
    element: <WorkersLayout />,
    children: [
      {
        path: "/workers",
        element: <WorkersDashboard />,
      },
      {
        path: "/workers/dashboard",
        element: <WorkersDashboard />,
      },
    ],
  },

  // site manager panel
  {
    path: "/site-manager/login",
    element: <SiteManagerLayout />,
  },
  {
    path: "/site-manager",
    element: <SiteManagerDashboard />,
    children: [
      {
        path: "/site-manager",
        element: <Timeline />,
      },
      {
        path: "/site-manager/dashboard",
        element: <Timeline />,
      },
      {
        path: "/site-manager/worksite",
        element: <SiteManagerWorksites />,
      },
      {
        path: "/site-manager/worksite/details",
        element: <WorksiteTimehseets />,
      },
      {
        path: "/site-manager/workers",
        element: <SiteManagerWorkers />,
      },
      {
        path: "/site-manager/account",
        element: <WorkersDashboard />,
      }
    ],
  },
  {
    path: "*",
    element: "404 Not Found",
  },
]);

export default router;
