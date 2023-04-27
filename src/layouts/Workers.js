import React from 'react'
import TopBar from '../shared/TopBar/TopBar'
import { Outlet } from 'react-router-dom'

const WorkersLayout = () => {
    return (
        <div>
           <TopBar/>
           <Outlet/>
        </div>
    )
}

export default WorkersLayout