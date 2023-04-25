import { Switch } from 'antd'
import React from 'react'
import { FaCircle, FaInfoCircle } from 'react-icons/fa'
import img from '../../../assets/images/Admin/immg.png'
import { Link } from 'react-router-dom'

const WorksiteCards = () => {
    const data = [
        {
            ontime: true,
            img: img,
            title: "Hemingway, Palm Beach",
            siteManager: "John Smith",
            cost: "$2008934",
            jobNumber: 2453,
            restored: 10,
            working: 200,
            finished: 12,
            absent: 3
        },
        {
            ontime: true,
            img: img,
            title: "Hemingway, Palm Beach",
            siteManager: "John Smith",
            cost: "$2008934",
            jobNumber: 2453,
            restored: 10,
            working: 200,
            finished: 12,
            absent: 3
        },
        {
            ontime: true,
            img: img,
            title: "Hemingway, Palm Beach",
            siteManager: "John Smith",
            cost: "$2008934",
            jobNumber: 2453,
            restored: 10,
            working: 200,
            finished: 12,
            absent: 3
        },
        {
            ontime: true,
            img: img,
            title: "Hemingway, Palm Beach",
            siteManager: "John Smith",
            cost: "$2008934",
            jobNumber: 2453,
            restored: 10,
            working: 200,
            finished: 12,
            absent: 3
        },
        {
            ontime: true,
            img: img,
            title: "Hemingway, Palm Beach",
            siteManager: "John Smith",
            cost: "$2008934",
            jobNumber: 2453,
            restored: 10,
            working: 200,
            finished: 12,
            absent: 3
        },
        {
            ontime: true,
            img: img,
            title: "Hemingway, Palm Beach",
            siteManager: "John Smith",
            cost: "$2008934",
            jobNumber: 2453,
            restored: 10,
            working: 200,
            finished: 12,
            absent: 3
        },
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {
                data.map((item, index) => (
                    <div className='bg-white p-3 rounded-lg border border-gray-200' key={index}>
                        <div className='flex justify-between items-center'>
                            <button className='flex justify-center items-center border px-3 py-2 rounded-md border-green-500'>
                                {
                                    item.ontime ? <span className='text-green-500 flex items-center'> <FaCircle className='mr-2' /> On Time</span> : <span className='text-red-500 flex items-center'> <FaCircle className='mr-2' /> Delayed</span>
                                } <FaInfoCircle className='ml-2 text-xs' />
                            </button>

                            <Switch style={{ background: '#1BBC8D' }} />
                        </div>

                        <div className='text-center my-4'>
                            <img src={item.img} className="block mx-auto mb-3" alt='' />
                            <Link to={`/admin/worksite/details`} state={
                                { data: item }
                            } className='text-xl'>
                                {
                                    item.title
                                }
                            </Link>

                            <table className='mt-5 w-full'>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className='text-gray-500 text-sm'>Site Manager</p>
                                        </td>
                                        <td>
                                            <p className='text-gray-500 text-sm'>Cost</p>
                                        </td>
                                        <td>
                                            <p className='text-gray-500 text-sm'>Job Number</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className=''>
                                                {
                                                    item.siteManager
                                                }
                                            </p>
                                        </td>
                                        <td>
                                            <p className=''>{
                                                item.cost
                                            }</p>
                                        </td>
                                        <td>
                                            <p className=''>{
                                                item.jobNumber
                                            }</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <hr className='my-4' />

                            <table className='w-full tttable'>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className='text-gray-500 text-sm'>Rostered</p>
                                        </td>
                                        <td>
                                            <p className='text-gray-500 text-sm'>Working</p>
                                        </td>
                                        <td>
                                            <p className='text-gray-500 text-sm'>Finished</p>
                                        </td>
                                        <td>
                                            <p className='text-gray-500 text-sm'>Absent</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className=''>
                                                {
                                                    item.restored
                                                }
                                            </p>
                                        </td>
                                        <td>
                                            <p className=''>{
                                                item.working
                                            }</p>
                                        </td>
                                        <td>
                                            <p className=''>{
                                                item.finished
                                            }</p>
                                        </td>
                                        <td>
                                            <p className=''>{
                                                item.absent
                                            }</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default WorksiteCards