import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Admin/Login/Login";
import AdminLayout from "../../layouts/Admin";
import Dashboard from "../../pages/Admin/Dashboard/Dashboard";
import Worksite from "../../pages/Admin/Worksite/Worksite";
import CreateNewWorksite from "../../pages/Admin/Worksite/CreateNewWorksite/CreateNewWorksite";

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
            {
                path: "/admin/worksite",
                element: <Worksite />
            },
            {
                path: "/admin/worksite/create",
                element: <CreateNewWorksite />
            }
        ]
    },
    {
        path: "*",
        element: "404 Not Found"
    }
])

export default router;