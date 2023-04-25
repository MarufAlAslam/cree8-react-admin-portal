import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import Timelines from './Timelines'

const Dashboard = () => {
    const companyData = [
        {
            name: "Worksites",
            value: "05",
            details: "Active worksites",
            linkto: "/admin/worksite"
        },
        {
            name: "Companies ",
            value: "04",
            details: "Total companies",
            linkto: "/admin/companies"
        },
    ]
    return (
        <div className='py-14 px-20'>
            <div className='top-row mb-6'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    {companyData.map((item, index) => (
                        <div className='bg-[#E5E5E5] px-8 py-12 rounded-lg hover:bg-[#D5E9FE]' key={index}>
                            <div className='flex justify-between items-center'>
                                <div className='flex flex-col w-full'>
                                    <h1 className='text-xl font-semibold'>{item.name}</h1>
                                    <h2 className='text-6xl text-blue my-4 font-bold'>
                                        {
                                            item.value
                                        }
                                    </h2>
                                    <div className='flex w-full justify-between items-center'>
                                        <p className='text-gray-500'>{item.details}</p>
                                        <Link to={item.linkto} className='text-blue rounded-md btn bg-white px-4 py-2'>
                                            <FaAngleRight />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                    ))}
                </div>

                <div className='flex justify-between items-center my-5'>
                    <p>
                        Active Worksite Timelines
                    </p>
                    <input type="date" />
                </div>

                <Timelines />
            </div>
        </div>

    )
}

export default Dashboard