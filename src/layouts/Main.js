import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from '../utils/routes/Main.routes'

const Main = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default Main