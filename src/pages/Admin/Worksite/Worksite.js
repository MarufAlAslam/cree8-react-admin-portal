import { Button, DatePicker, Select } from 'antd'
import React from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'
import WorksiteCards from './WorksiteCards'
import { Link } from 'react-router-dom'

const Worksite = () => {
    const options = [
        {
            value: 'All',
            label: 'All',
        },
        {
            value: 'Active',
            label: 'Active',
        },
        {
            value: 'Inactive',
            label: 'Inactive',
        },
        {
            value: 'Archive',
            label: 'Archive',
        },
    ]
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    }
    return (
        <div className='py-14 px-20'>
            <div className='top flex justify-between items-center'>
                <Select
                    defaultValue="All"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={options}
                />

                <div className='right flex justify-end items-center'>
                    <DatePicker className='mr-2 p-2 h-[40px]' onChange={onChange} />
                    <div className='border flex items-center p-1 rounded-md w-full'>
                        <FaSearch className='ml-2' /> <input placeholder='Search by Worksite, Job Number' className='h-[31px] text-sm w-full px-2' />

                    </div>
                    <Button className='btn-blue text-white h-[40px] ml-3 flex justify-center items-center p-0'>
                        <Link to={'/admin/worksite/create'} className='flex justify-between items-center h-full w-full px-4'>
                            Create New <FaPlus className='ml-2' />
                        </Link>
                    </Button>
                </div>


            </div>


            <div className='data-card py-3 my-5'>
                <p>
                    <span className='text-gray-500'>Showing Data of :</span>
                    17 March 2023</p>
            </div>

            <WorksiteCards />
        </div>
    )
}

export default Worksite