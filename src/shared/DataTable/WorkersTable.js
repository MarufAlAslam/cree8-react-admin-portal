import React from 'react';
import { FaCaretDown, FaEdit, FaInfoCircle, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WorkersTable = () => {

    const data = [
        {
            id: 1,
            name: "John Work",
            email: "John@cree8.com",
            employment: "Casual",
            cardId: "123",
        },
        {
            id: 2,
            name: "John Work",
            email: "John@cree8.com",
            employment: "Salary",
            cardId: "456",
        },
        {
            id: 3,
            name: "John Work",
            email: "John@cree8.com",
            employment: "Casual",
            cardId: "789",
        },
        {
            id: 4,
            name: "John Work",
            email: "John@cree8.com",
            employment: "Casual",
            cardId: "123",
        },
        {
            id: 5,
            name: "John Work",
            email: "John@cree8.com",
            employment: "Casual",
            cardId: "456",
        },
        {
            id: 6,
            name: "John Work",
            email: "John@cree8.com",
            employment: "Casual",
            cardId: "789",
        },
        {
            id: 7,
            name: "John Work",
            email: "John@cree8.com",
            employment: "Casual",
            cardId: "123",
        },
        {
            id: 8,
            name: "John Work",
            email: "John@cree8.com",
            employment: "Casual",
            cardId: "456",
        },
        {
            id: 9,
            name: "John Work",
            email: "John@cree8.com",
            employment: "Casual",
            cardId: "789",
        },
        {
            id: 10,
            name: "John Work",
            email: "John@cree8.com",
            employment: "Casual",
            cardId: "123",
        },
        {
            id: 1,
            name: "John Work",
            email: "John@cree8.com",
            employment: "Casual",
            cardId: "456",
        },
        {
            id: 11,
            name: "John Work",
            email: "John@cree8.com",
            employment: "Casual",
            cardId: "789",
        },
        {
            id: 12,
            name: "John Work",
            email: "John@cree8.com",
            employment: "Casual",
            cardId: "123",
        },
        {
            id: 13,
            name: "John Work",
            email: "John@cree8.com",
            employment: "Casual",
            cardId: "123",
        },

    ]
    return (
        <table className='table-auto w-full'>
            <thead className='bg-[#E8F3FF]'>
                <tr>
                    <th className='px-4 py-3'>
                        <div className='flex items-center justify-center'>
                            Worker Name <FaCaretDown />
                        </div>
                    </th>
                    <th className='px-4 py-3'>
                        <div className='flex items-center justify-center'>
                            Email <FaCaretDown />
                        </div>
                    </th>
                    <th className='px-4 py-3'>
                        <div className='flex items-center justify-center'>
                            Employment <FaCaretDown />
                        </div>
                    </th>
                    <th className='px-4 py-3'>
                        <div className='flex items-center justify-center'>
                            Card Id <FaCaretDown />
                        </div>
                    </th>
                    <th className='px-4 py-3'>
                        <div className='flex items-center justify-center'>
                            Action <FaCaretDown />
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody className='bg-white'>
                {
                    data.map((item, index) => (
                        <tr key={index} className='border-b border-[#F0F0F0]'>
                            <td className='px-4 py-3'>
                                <Link to={'/admin/personnel/workers/details'} className='flex items-center justify-center'>
                                    {item.name}
                                </Link>
                            </td>
                            <td className='px-4 py-3'>
                                <div className='flex items-center justify-center'>
                                    {item.email}
                                </div>
                            </td>
                            <td className='px-4 py-3'>
                                <div className='flex items-center justify-center'>
                                    {item.employment}
                                </div>
                            </td>
                            <td className='px-4 py-3'>
                                <div className='flex items-center justify-center'>
                                    {item.cardId}
                                </div>
                            </td>
                            <td className='px-4 py-3'>
                                <div className='flex items-center justify-center'>
                                    <button className='mx-2'>
                                        <FaEdit />
                                    </button>
                                    <button className='mx-2'>
                                        <FaInfoCircle />
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

export default WorkersTable;