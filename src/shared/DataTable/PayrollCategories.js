import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const PayrollCategories = () => {
    const data = [
        {
            id: 1,
            company: "Cree8 Commercial ",
            worksite: "Cinema Worksite",
            payrollCategories: "SM - Salary (CML) 40",
        },
        {
            id: 2,
            company: "Cree8 Commercial ",
            worksite: "Cinema Worksite",
            payrollCategories: "SM - Salary (CML) 40",
        },
        {
            id: 3,
            company: "Cree8 Commercial ",
            worksite: "Cinema Worksite",
            payrollCategories: "SM - Salary (CML) 40",
        },
        {
            id: 4,
            company: "Cree8 Commercial ",
            worksite: "Cinema Worksite",
            payrollCategories: "SM - Salary (CML) 40",
        },
        {
            id: 5,
            company: "Cree8 Commercial ",
            worksite: "Cinema Worksite",
            payrollCategories: "SM - Salary (CML) 40",
        },
        {
            id: 6,
            company: "Cree8 Commercial ",
            worksite: "Cinema Worksite",
            payrollCategories: "SM - Salary (CML) 40",
        },
        {
            id: 7,
            company: "Cree8 Commercial ",
            worksite: "Cinema Worksite",
            payrollCategories: "SM - Salary (CML) 40",
        },
        {
            id: 8,
            company: "Cree8 Commercial ",
            worksite: "Cinema Worksite",
            payrollCategories: "SM - Salary (CML) 40",
        },
        {
            id: 9,
            company: "Cree8 Commercial ",
            worksite: "Cinema Worksite",
            payrollCategories: "SM - Salary (CML) 40",
        },
        {
            id: 10,
            company: "Cree8 Commercial ",
            worksite: "Cinema Worksite",
            payrollCategories: "SM - Salary (CML) 40",
        },
        {
            id: 11,
            company: "Cree8 Commercial ",
            worksite: "Cinema Worksite",
            payrollCategories: "SM - Salary (CML) 40",
        },

    ]
    return (
        <table className='w-full'>
            <thead className='bg-[#E8F3FF] text-center'>
                <tr className='text-left'>
                    <th className=' px-4 py-3 '>
                        <div className='flex items-center justify-start'>
                            Company
                        </div>
                    </th>
                    <th className=' px-4 py-3 '>
                        <div className='flex items-center justify-start'>
                            Worksite
                        </div>
                    </th>
                    <th className=' px-4 py-3 '>
                        <div className='flex items-center justify-start'>
                            Payroll Categories
                        </div>
                    </th>
                    <th className=' px-4 py-3 '>
                        <div className='flex items-center justify-center'>
                            Action
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody className='bg-white'>
                {
                    data.map((item, index) => (
                        <tr key={index} className='border-b border-[#F0F0F0]'>
                            <td className='px-4 py-3'>
                                <div className='flex items-center justify-start'>
                                    {item.company}
                                </div>
                            </td>
                            <td className='px-4 py-3'>
                                <div className='flex items-center justify-start'>
                                    {item.worksite}
                                </div>
                            </td>
                            <td className='px-4 py-3'>
                                <div className='flex items-center justify-start'>
                                    {item.payrollCategories}
                                </div>
                            </td>
                            <td className='px-4 py-3'>
                                <div className='flex items-center justify-center'>
                                    <button className='mx-2'>
                                        <FaEdit />
                                    </button>
                                    <button className='mx-2'>
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default PayrollCategories;