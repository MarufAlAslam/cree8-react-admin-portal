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
        ]
    },
    {
        path: "*",
        element: "404 Not Found"
    }
])

export default router;