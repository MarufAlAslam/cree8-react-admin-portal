import React from 'react'
import { FaAngleDown, FaUserAlt } from 'react-icons/fa'
import { GrHomeRounded } from "react-icons/gr"
import { RiBuildingLine } from "react-icons/ri"
import { BiWallet } from "react-icons/bi"
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    const data = [
        {
            name: "Dashboard",
            path: "/admin/dashboard",
            icon: <GrHomeRounded className='mr-2' />
        },
        {
            name: "Worksite",
            path: "/admin/worksite",
            icon: <RiBuildingLine className='mr-2' />
        },
        {
            name: "Personnel",
            icon: <FaUserAlt className='mr-2' />,
            child: [
                {
                    id: 1,
                    name: "Workers",
                    path: "/admin/personnel/workers",
                },
                {
                    id: 2,
                    name: "Site Managers",
                    path: "/admin/personnel/site-managers",
                }
            ]
        },
        {
            name: "Payroll",
            path: "/admin/payroll",
            icon: <BiWallet className='mr-2' />
        },
    ]

    const [submenu, setSubmenu] = React.useState('hidden')
    const [active, setActive] = React.useState('')
    return (
        <div className='sidebar min-h-screen bg-[#F6FAFF]'>
            <ul>
                {data.map((item, index) => (
                    <li className='py-3 px-8' key={index}>
                        {
                            item.child ? (
                                <>
                                    <div className={`flex justify-between items-center ${active}`} onClick={() => {
                                        setSubmenu(submenu === 'hidden' ? 'block' : 'hidden')
                                        setActive(active === '' ? 'active' : '')
                                    }}>
                                        <button className='flex justify-start items-center'>
                                            {item.icon}
                                            {item.name}
                                        </button>
                                        <FaAngleDown className='angle' />
                                    </div>
                                    <ul className={`mt-3 ${submenu}`}>
                                        {item.child.map((item, index) => (
                                            <li className='py-1 px-5' key={index}>
                                                <NavLink to={item.path} className='flex justify-start items-center text-sm'>
                                                    {item.icon}
                                                    {item.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <NavLink to={item.path} className='flex justify-start items-center'>
                                    {item.icon}
                                    {item.name}
                                </NavLink>
                            )
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar