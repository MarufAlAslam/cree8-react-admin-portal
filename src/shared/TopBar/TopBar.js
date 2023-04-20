import React from 'react'
import logo from "../../assets/images/Admin/logo.png"
import avatar from "../../assets/images/Admin/avatar.png"

import { FaSearch } from 'react-icons/fa'
import { FaCog } from 'react-icons/fa'

const TopBar = () => {
    return (
        <div className='topbar py-3'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <img src={logo} alt='' />
                    <div className='flex ml-auto justify-end items-center'>
                        <a href='/'>
                            <FaSearch className='ml-5 text-2xl'/>
                        </a>
                        <a href='/'>
                            <FaCog className='ml-5 text-2xl'/>
                        </a>
                        <a href='/'>
                            <img src={avatar} className='ml-5' alt=''/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar