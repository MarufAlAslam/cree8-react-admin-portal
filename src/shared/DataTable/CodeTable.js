import React from 'react';

const CodeTable = () => {
    const data = [
        {
            id: 1,
            code: "PC-L",
            task: "Partition OR Ceiling Lining Including Bulkheads",
            hours: 97
        },
        {
            id: 2,
            code: "PC-L",
            task: "Partition OR Ceiling Lining Including Bulkheads",
            hours: 97
        },
        {
            id: 3,
            code: "PC-L",
            task: "Partition OR Ceiling Lining Including Bulkheads",
            hours: 97
        },
        {
            id: 4,
            code: "PC-L",
            task: "Partition OR Ceiling Lining Including Bulkheads",
            hours: 97
        },
        {
            id: 5,
            code: "PC-L",
            task: "Partition OR Ceiling Lining Including Bulkheads",
            hours: 97
        },
        {
            id: 6,
            code: "PC-L",
            task: "Partition OR Ceiling Lining Including Bulkheads",
            hours: 97
        },
        {
            id: 7,
            code: "PC-L",
            task: "Partition OR Ceiling Lining Including Bulkheads",
            hours: 97
        },

    ]
    return (
        <table className='w-full'>
            <thead className='bg-[#E8F3FF] text-center'>
                <tr className='text-left'>
                    <th className=' px-4 py-3 '>
                        <div className='flex items-center justify-start'>
                            Code
                        </div>
                    </th>
                    <th className=' px-4 py-3 '>
                        <div className='flex items-center justify-center'>
                            Task
                        </div>
                    </th>
                    <th className=' px-4 py-3 '>
                        <div className='flex items-center justify-center'>
                            Hours
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
                                    {item.code}
                                </div>
                            </td>
                            <td className='px-4 py-3'>
                                <div className='flex items-center justify-center'>
                                    {item.task}
                                </div>
                            </td>
                            <td className='px-4 py-3'>
                                <div className='flex items-center justify-center'>
                                    {item.hours}
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default CodeTable;