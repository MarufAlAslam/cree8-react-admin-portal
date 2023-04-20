import { createBrowserRouter } from "react-router-dom";
import Login from "../../pages/Admin/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "*",
        element: "404 Not Found"
    }
])

export default router;