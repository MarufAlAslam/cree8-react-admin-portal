import React from 'react';
import TopSearchBar from '../../../../shared/Workers/TopSearchBar';
import { Button, Select } from 'antd';

import dp from "../../../../assets/images/Personnel/dp.png"
import { FaEdit, FaPlus } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import PayrollCategories from '../../../../shared/DataTable/PayrollCategories';
import AccuralTable from '../../../../shared/DataTable/AccuralTable';
import CodeTable from '../../../../shared/DataTable/CodeTable';

const WorkersDetails = () => {
    const location = useLocation();

    const data = location.state.data;
    console.log(data);
    return (
        <div className='p-6'>
            <TopSearchBar />

            <div className='data-card py-3 my-3'>
                <div className='tab-buttons flex justify-start items-center'>
                    <Button className='flex justify-center items-center py-3 mr-3 btn-blue h-[42px] lg:px-5'>
                        Active
                    </Button>
                    <Button className='flex justify-center items-center py-3 mr-3 h-[42px] lg:px-5'>
                        Terminated
                    </Button>
                    <Button className='flex justify-center items-center py-3 mr-3 h-[42px] lg:px-5'>
                        All
                    </Button>
                </div>

                <div className='details mt-5 bg-white p-4'>
                    <div className='profile pb-4 border-b-2 border-[#E9E9E9]'>
                        <div className='flex justify-start items-center'>
                            <div className='dp'>
                                <img src={dp} className='mr-10' alt="" />
                            </div>
                            <div className='contents p-5 pl-10'>
                                <div className='flex w-full justify-between items-center'>

                                    <div className='profile-details w-full'>
                                        <div className='flex justify-start items-center'>
                                            <p className='fs-22 mr-5'>
                                                {data.name}
                                            </p>
                                            {
                                                data.status === "Active" ? (
                                                    <span className='fs-10 ml-3 text-[#41C700] border rounded-md px-2 py-1 border-[#41C700] bg-[#42c70033]'>
                                                        Active
                                                    </span>
                                                )
                                                    : (
                                                        <span className='fs-10 ml-3 text-[#FF0000] border rounded-md px-2 py-1 border-[#FF0000] bg-[#FF000033]'>
                                                            Terminated
                                                        </span>
                                                    )
                                            }
                                            <button className='px-3'>
                                                <FaEdit />
                                            </button>
                                        </div>

                                        <div className='flex justify-between w-full items-center mt-3'>
                                            <div className='lg:w-1/4 md:w-1/2 w-full text-left'>
                                                <p className='fs-14 text-[#A1A1A1]'>
                                                    Email
                                                </p>
                                                <p className='fs-18'>
                                                    {data.email}
                                                </p>
                                            </div>
                                            <div className='lg:w-1/4 md:w-1/2 w-full text-left'>
                                                <p className='fs-14 text-[#A1A1A1]'>
                                                    Card ID
                                                </p>
                                                <p className='fs-18'>
                                                    {data.cardId}
                                                </p>
                                            </div>
                                            <div className='lg:w-1/4 md:w-1/2 w-full text-left'>
                                                <p className='fs-14 text-[#A1A1A1]'>
                                                    Joined Date
                                                </p>
                                                <p className='fs-18'>
                                                    {data.joined}
                                                </p>
                                            </div>
                                            <div className='lg:w-1/4 md:w-1/2 w-full text-left'>
                                                <p className='fs-14 text-[#A1A1A1]'>
                                                    Employed As
                                                </p>
                                                <p className='fs-18'>
                                                    {data.employment}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <Button className='flex justify-center items-center py-3 border border-[#111111] h-[42px]'>
                                        Terminate <div className='bg-orange-500 p-2 rounded-md text-white ml-3'>
                                            <FaPlus />
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Worker Full Details */}
                    <div className='worker-full-details mt-5'>
                        <p className='fs-18'>
                            Worker Full Details
                        </p>

                        <div className='flex justify-between w-full items-center mt-3'>
                            <div className='lg:w-1/5 md:w-1/2 w-full text-left'>
                                <p className='fs-14 text-[#A1A1A1]'>
                                    Shift Worked
                                </p>
                                <p className='fs-18'>
                                    {data.shiftworked}
                                </p>
                            </div>
                            <div className='lg:w-1/5 md:w-1/2 w-full text-left'>
                                <p className='fs-14 text-[#A1A1A1]'>
                                    Hours Worked
                                </p>
                                <p className='fs-18'>
                                    {data.hoursWorked}
                                </p>
                            </div>
                            <div className='lg:w-1/5 md:w-1/2 w-full text-left'>
                                <p className='fs-14 text-[#A1A1A1]'>
                                    Productivity Average
                                </p>
                                <p className='fs-18'>
                                    {data.productivityAvrgarage}
                                </p>
                            </div>
                            <div className='lg:w-1/5 md:w-1/2 w-full text-left'>
                                <p className='fs-14 text-[#A1A1A1]'>
                                    Hourly Average
                                </p>
                                <p className='fs-18'>
                                    {data.hourlyAvetage}
                                </p>
                            </div>
                            <div className='lg:w-1/5 md:w-1/2 w-full text-left'>
                                <p className='fs-14 text-[#A1A1A1] flex items-center'>
                                    Induction <FaEdit className='ml-3' />
                                </p>
                                <p className='fs-18'>
                                    {data.induction}
                                </p>
                            </div>
                        </div>

                        {/* payroll */}
                        <div className='payroll mt-8'>
                            <div className='flex justify-between items-center'>
                                <p className='fs-18'>
                                    Payroll Categories
                                </p>
                                <Button className='flex justify-center items-center py-3 border border-[#111111] h-[42px]'>
                                    Add New <div className='bg-orange-500 p-2 rounded-md text-white ml-3'>
                                        <FaPlus />
                                    </div>
                                </Button>
                            </div>

                            <div className='mt-8 lg:overflow-hidden overflow-x-auto'>
                                <PayrollCategories />
                            </div>
                            <div className='mt-8 lg:overflow-hidden overflow-x-auto'>
                                <AccuralTable />
                            </div>
                        </div>
                    </div>
                </div>

                {/* breakdown */}
                <div className='breakdown mt-5 bg-white p-4'>
                    <p className='fs-18 mb-5'>Task Breakdown</p>

                    <label>
                        Worksite
                    </label>
                    <Select className='lg:w-3/5 w-full block mt-4'>
                        <option value="1">All</option>
                    </Select>

                    {/* codetable */}
                    <div className='mt-8 lg:overflow-hidden overflow-x-auto'>
                        <CodeTable />
                    </div>

                </div>


            </div>
        </div>
    );
};

export default WorkersDetails;