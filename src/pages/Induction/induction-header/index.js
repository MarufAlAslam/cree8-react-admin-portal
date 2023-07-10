import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/Admin/logo.png'

const InductionHeader = () => {
    return (
        <div className="topbar py-3">
        <div className="px-8">
          <div className="flex justify-start items-center">
            <Link to="/admin/dashboard">
              <div>
                <img src={logo} alt="" />
              </div>
            </Link>

            <h2 className='text-xl ml-20 text-white'>
                Cree8 Online Safety Induction 2022
            </h2>
           
          </div>
        </div>
      </div>
    )
}

export default InductionHeader