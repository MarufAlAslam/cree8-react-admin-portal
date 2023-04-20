import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Admin/Login/Login";
import AdminLayout from "../../layouts/Admin";
import Dashboard from "../../pages/Admin/Dashboard/Dashboard";
import Worksite from "../../pages/Admin/Worksite/Worksite";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/admin",
        element: <AdminLayout/>,
        children: [
            {
                path: "/admin/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/admin/worksite",
                element: <Worksite/>
            }
        ]
    },
    {
        path: "*",
        element: "404 Not Found"
    }
])

export default router;