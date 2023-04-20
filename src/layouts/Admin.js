import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../shared/Sidebar/Sidebar'
import TopBar from '../shared/TopBar/TopBar'

const AdminLayout = () => {
    return (
        <div>
            <TopBar/>
            <div className='lg:flex'>
                <div className='lg:w-1/6'>
                    <Sidebar/>
                </div>
                <div className='lg:w-5/6'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout