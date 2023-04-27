import React from 'react'
import { Outlet } from 'react-router-dom'
import SettingsSidebar from '../pages/Admin/Settings/SettingsSidebar/SettingsSidebar'
import SettingsTopBar from '../pages/Admin/Settings/SettingsTopBar/SettingsTopBar'

const SettingsLaout = () => {
    return (
        <div>
            <SettingsTopBar/>
            <div className='lg:flex'>
                <div className='lg:w-1/6'>
                    <SettingsSidebar/>
                </div>
                <div className='lg:w-5/6 content-holder'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default SettingsLaout