import { Button, Input, Select, Tooltip } from 'antd';
import React from 'react';
import { FaCheckCircle, FaQuestionCircle, FaTimesCircle } from 'react-icons/fa';

const WorksiteForm = () => {
    const checks = [
        {
            id: 1,
            title: 'Admin Salary',
            status: 'completed',
        },
        {
            id: 2,
            title: 'AP1-CP50',
            status: 'completed',
        },
        {
            id: 3,
            title: 'AP5-CP56',
            status: 'completed',
        }
    ]
    return (
        <form className=''>
            <div className='lg:w-1/2 w-full mx-auto bg-white p-5 shadow-sm'>
                <p className='fs-18 font-bold'>Worksite</p>

                <div className='mt-5'>
                    <label className='block font-normal'>
                        Company
                    </label>
                    <Select className='w-full mt-4'>
                        <Select.Option value='1'>Company 1</Select.Option>
                    </Select>
                </div>
                <div className='mt-5'>
                    <label className='block font-normal'>
                        Job Number
                    </label>
                    <Input className='w-full mt-4' />
                </div>
                <div className='mt-5'>
                    <label className='block font-normal'>
                        Worksite Name
                    </label>
                    <Input className='w-full mt-4' />
                </div>
                <div className='mt-5'>
                    <label className='block font-normal'>
                        Address
                    </label>
                    <Input className='w-full mt-4' />
                </div>
                <div className='mt-5'>
                    <label className='block font-normal'>
                        Builder
                    </label>
                    <Input className='w-full mt-4' />
                </div>
                <div className='mt-5'>
                    <label className='block font-normal'>
                        Builder Contact Email
                    </label>
                    <Input className='w-full mt-4' />
                </div>
            </div>


            <div className='lg:w-1/2 mt-5 w-full mx-auto bg-white p-5 shadow-sm'>
                <p className='fs-18 font-bold'>Timeline</p>

                <div className='mt-5 flex justify-between items-center gap-4'>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block font-normal'>
                            Start Date
                        </label>
                        <Input className='mt-4' type='date' />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <label className='block font-normal'>
                            Finish Date
                        </label>
                        <Input className='mt-4' type='date' />
                    </div>
                </div>
                <div className='mt-5'>
                    <label className='block font-normal'>
                        Standard Start Time
                    </label>
                    <Input type='time' className='w-full mt-4' />
                </div>
                <div className='mt-5'>
                    <label className='block font-normal'>
                        Standard End Time
                    </label>
                    <div className='flex justify-between items-center gap-3'>
                        <div className='lg:w-1/3 w-full'>
                            <label className='block font-normal text-[12px] mt-3'>
                                Week Day
                            </label>
                            <Input className='mt-2' type='time' />
                        </div>
                        <div className='lg:w-1/3 w-full'>
                            <label className='block font-normal text-[12px] mt-3'>
                                Friday
                            </label>
                            <Input className='mt-2' type='time' />
                        </div>
                        <div className='lg:w-1/3 w-full'>
                            <label className='block font-normal text-[12px] mt-3'>
                                Weekend
                            </label>
                            <Input className='mt-2' type='time' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:w-1/2 mt-5 w-full mx-auto bg-white p-5 shadow-sm'>
                <p className='fs-18 font-bold'>Payroll </p>



                <div className='mt-5'>
                    <label className='block font-normal'>
                        Allowed Task Deviation
                    </label>
                    <div className='flex justify-between items-center gap-3'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block font-normal text-[12px] mt-3'>
                                Upper Control
                            </label>
                            <Input className='mt-2' type='time' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block font-normal text-[12px] mt-3'>
                                Lower Control
                            </label>
                            <Input className='mt-2' type='time' />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <div className='flex justify-between items-center'>
                        <label className='block font-normal'>
                            Productivity Payroll Category
                        </label>

                        {/* icon with tooltip */}
                        <Tooltip title='Something Here'>
                            <FaQuestionCircle className='text-[12px]' />
                        </Tooltip>


                    </div>
                    <Input className='w-full mt-4' />
                </div>
                <div className='mt-5'>
                    <div className='flex justify-between items-center'>
                        <label className='block font-normal'>
                            Productivity Surplus Rate
                        </label>
                        <Tooltip title='Something Here'>
                            <FaQuestionCircle className='text-[12px]' />
                        </Tooltip>
                    </div>
                    <Input className='w-full mt-4' />
                </div>
            </div>


            <div className='lg:w-1/2 mt-5 w-full mx-auto bg-white p-5 shadow-sm'>
                <p className='fs-18 font-bold'>Payroll Categories </p>

                <div className='mt-5'>
                    <label className='block font-normal'>
                        Select Payroll Categories
                    </label>
                    <Select className='w-full mt-4'>
                        <Select.Option value='1'>Category 1</Select.Option>
                    </Select>
                </div>

                <div className='mt-5'>
                    {
                        checks.map((check, index) => {
                            return (
                                <div key={index} className='flex justify-between items-center mt-3 py-3 border-b-2 border-gray-200'>
                                    <label className='block font-normal'>
                                        {check.title}
                                    </label>
                                    {
                                        check.status === "completed" ? (
                                            <FaCheckCircle className='text-[12px] text-[#41C700]' />
                                        ) : (
                                            <FaTimesCircle className='text-[12px] text-[red]' />
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <div className='lg:w-1/2 mt-5 w-full mx-auto bg-transparent py-5'>
                <div className='text-right'>
                    <Button className='btn-blue text-white h-[40px] ml-auto flex justify-center items-center'>
                        Save Changes
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default WorksiteForm;