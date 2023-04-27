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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "/admin",
                element: <Dashboard />
            },
            {
                path: "/admin/dashboard",
                element: <Dashboard />
            },


            // worksite
            {
                path: "/admin/worksite",
                element: <Worksite />
            },
            {
                path: "/admin/worksite/details",
                element: <WorksiteDetails />
            },
            {
                path: "/admin/worksite/create",
                element: <CreateNewWorksite />
            },
            {
                path: "/admin/worksite/edit",
                element: <EditWorksite />
            },


            // personnel - workers
            {
                path: "/admin/personnel/workers",
                element: <Workers />
            },
            {
                path: "/admin/personnel/workers/details",
                element: <WorkersDetails />
            },


            // personnel - site managers
            {
                path: "/admin/personnel/site-managers",
                element: <SiteManagers />
            },
            {
                path: "/admin/personnel/site-managers/history",
                element: <SiteManagerHistory />
            },
            {
                path: "/admin/personnel/site-managers/edit-history",
                element: <EditSiteManagerHistory />
            },
        ]
    },

    // admin settings
    {
        path: "/admin/settings",
        element: <SettingsLaout/>,
        children: [
            {
                path: "/admin/settings",
                element: <Settings />
            }
        ]
    },
    

    // workers dashboard
    {
        path: "/workers",
        element: <WorkersLayout/>,
        children: [
            {
                path: "/workers",
                element: <WorkersDashboard />
            },
            {
                path: "/workers/dashboard",
                element: <WorkersDashboard />
            }
        ]
    },
    {
        path: "*",
        element: "404 Not Found"
    }
])

export default router;