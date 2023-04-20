import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import {GrHomeRounded} from "react-icons/gr"
import {RiBuildingLine} from "react-icons/ri"
import {BiWallet} from "react-icons/bi"
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const data = [
        {
            name: "Dashboard",
            path: "/admin/dashboard",
            icon: <GrHomeRounded className='mr-2'/>
        },
        {
            name: "Worksite",
            path: "/admin/worksite",
            icon: <RiBuildingLine className='mr-2'/>
        },
        {
            name: "Personnel",
            path: "/admin/personnel",
            icon: <FaUserAlt className='mr-2'/>
        },
        {
            name: "Payroll",
            path: "/admin/payroll",
            icon: <BiWallet className='mr-2'/>
        },
    ]
    return (
        <div className='sidebar min-h-screen bg-[#F6FAFF]'>
            <ul>
                {data.map((item, index) => (
                    <li className='py-3 px-8' key={index}>
                        <NavLink to={item.path} className='flex justify-start items-center'>
                            {item.icon}
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar