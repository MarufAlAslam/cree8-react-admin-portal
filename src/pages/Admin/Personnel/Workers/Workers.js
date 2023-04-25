import { Button } from 'antd';
import React from 'react';

import WorkersTable from '../../../../shared/DataTable/WorkersTable';
import TopSearchBar from '../../../../shared/Workers/TopSearchBar';

const Workers = () => {
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

                <div className='table-data p-5 bg-white mt-5'>
                    <div className='text-right'>
                        <p className='text-[14px]'>
                            <span className='text-[14px] text-[#a1a1a1]'>Total Number of Active Workers:</span> 1234
                        </p>
                    </div>
                    <div className='lg:overflow-hidden overflow-x-scroll mt-4'>
                        <WorkersTable />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Workers;
