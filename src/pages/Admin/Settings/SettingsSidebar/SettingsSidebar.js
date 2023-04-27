import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const SettingsSidebar = () => {
    const data = [
        {
            id: 1,
            isActive: true,
            name: "Tasks Settings",
            child: [
                {
                    id: 1,
                    name: "Hourly Rate Tasks",
                    path: "",
                },
                {
                    id: 2,
                    name: "Categories ",
                    path: "",
                }
            ]
        },
        {
            id: 2,
            isActive: true,
            name: "Induction",
            child: [
                {
                    id: 1,
                    name: "Disclaimer Configuration ",
                    path: "",
                },
                {
                    id: 2,
                    name: "Companies",
                    path: "",
                }
            ]
        },
        {
            id: 3,
            isActive: true,
            name: "Induction",
            child: [
                {
                    id: 1,
                    name: "Disclaimer Configuration ",
                    path: "",
                },
                {
                    id: 2,
                    name: "Companies",
                    path: "",
                },
                {
                    id: 3,
                    name: "Emails ",
                    path: "",
                },

            ]
        },
        {
            id: 4,
            isActive: true,
            name: "User Account",
            child: [
                {
                    id: 1,
                    name: "Administrators ",
                    path: "",
                },
            ]
        },
        {
            id: 5,
            isActive: true,
            name: "Payroll Settings",
            child: [
                {
                    id: 1,
                    name: "Agreements",
                    path: "",
                },
                {
                    id: 2,
                    name: "Employment Status",
                    path: "",
                },
                {
                    id: 3,
                    name: "Absences",
                    path: "",
                },
                {
                    id: 4,
                    name: "Payroll Categories ",
                    path: "",
                },
                {
                    id: 5,
                    name: "Allowance",
                    path: "",
                },
                {
                    id: 1,
                    name: "Entitlements",
                    path: "",
                },
                {
                    id: 1,
                    name: "Employer Expenses",
                    path: "",
                },
            ]
        },
    ]


    const handleSubmenu = (id, e) => {
        const menuItems = document.querySelectorAll('.menu-item')
        menuItems.forEach((item) => {
            item.classList.remove('active')
        })
        const menu = document.querySelector(`.menu-${id}`)
        menu.classList.add('active')
    }
    return (
        <div className='sidebar min-h-screen bg-[#F6FAFF]'>
            <ul>
                {data.map((item, index) => (
                    <li className={`py-3 px-8 menu-item menu-${item.id}`} onClick={()=>handleSubmenu(item.id)} key={index}>
                        {
                            item.child ? (
                                <>
                                    <div className={`flex justify-between items-center`}>
                                        <button className='flex justify-start items-center'>
                                            {item.name}
                                        </button>
                                        <FaAngleDown className='angle' />
                                    </div>
                                    <ul className={`mt-3 hidden`}>
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

export default SettingsSidebar