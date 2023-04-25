import React from 'react';
import TopSearchBar from '../../../../shared/Workers/TopSearchBar';
import { Button } from 'antd';

import dp from "../../../../assets/images/Personnel/dp.png"
import { FaEdit, FaPlus } from 'react-icons/fa';

const WorkersDetails = () => {
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
                                <img src={dp} className='mr-5' alt="" />
                            </div>
                            <div className='contents p-5 pl-10'>
                                <div className='flex w-full justify-between items-center'>
                                    <div className='flex justify-start items-center'>
                                        <p className='fs-22 mr-5'>
                                            Smith Brown
                                        </p>
                                        <span className='fs-10 ml-3 text-[#41C700] border rounded-md px-2 py-1 border-[#41C700] bg-[#42c70033]'>
                                            Active
                                        </span>
                                        <button className='px-3'>
                                            <FaEdit />
                                        </button>
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
                </div>
            </div>
        </div>
    );
};

export default WorkersDetails;