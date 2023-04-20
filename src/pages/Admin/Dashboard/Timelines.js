import React from 'react'
import img from "../../../assets/images/Admin/img.png"

const Timelines = () => {
    const timelines = [
        {
            chart: [
                {
                    remaining: 55,
                    worked: 20,
                    reserved: 5,
                    deficiet: 10,
                    lost: 10,
                }
            ],
            jobDetails: [
                {
                    img: img,
                    jobNumber: 2342,
                    jobName: "Hemingway, Palm Beach Construction",
                    siteManager: "John Smith",
                    areas: 10,
                    workers: 200,
                    projectCost: 454263,
                    totalSpent: 154263,
                }
            ],
            productivity: [
                {
                    total: 67,
                    approved: 24,
                    active: 34,
                    remaining: 46
                }
            ]
        },
         {
            chart: [
                {
                    remaining: 55,
                    worked: 20,
                    reserved: 5,
                    deficiet: 10,
                    lost: 10,
                }
            ],
            jobDetails: [
                {
                    img: img,
                    jobNumber: 2342,
                    jobName: "Hemingway, Palm Beach Construction",
                    siteManager: "John Smith",
                    areas: 10,
                    workers: 200,
                    projectCost: 454263,
                    totalSpent: 154263,
                }
            ],
            productivity: [
                {
                    total: 67,
                    approved: 24,
                    active: 34,
                    remaining: 46
                }
            ]
        },
         {
            chart: [
                {
                    remaining: 55,
                    worked: 20,
                    reserved: 5,
                    deficiet: 10,
                    lost: 10,
                }
            ],
            jobDetails: [
                {
                    img: img,
                    jobNumber: 2342,
                    jobName: "Hemingway, Palm Beach Construction",
                    siteManager: "John Smith",
                    areas: 10,
                    workers: 200,
                    projectCost: 454263,
                    totalSpent: 154263,
                }
            ],
            productivity: [
                {
                    total: 67,
                    approved: 24,
                    active: 34,
                    remaining: 46
                }
            ]
        },
         {
            chart: [
                {
                    remaining: 55,
                    worked: 20,
                    reserved: 5,
                    deficiet: 10,
                    lost: 10,
                }
            ],
            jobDetails: [
                {
                    img: img,
                    jobNumber: 2342,
                    jobName: "Hemingway, Palm Beach Construction",
                    siteManager: "John Smith",
                    areas: 10,
                    workers: 200,
                    projectCost: 454263,
                    totalSpent: 154263,
                }
            ],
            productivity: [
                {
                    total: 67,
                    approved: 24,
                    active: 34,
                    remaining: 46
                }
            ]
        },
         {
            chart: [
                {
                    remaining: 55,
                    worked: 20,
                    reserved: 5,
                    deficiet: 10,
                    lost: 10,
                }
            ],
            jobDetails: [
                {
                    img: img,
                    jobNumber: 2342,
                    jobName: "Hemingway, Palm Beach Construction",
                    siteManager: "John Smith",
                    areas: 10,
                    workers: 200,
                    projectCost: 454263,
                    totalSpent: 154263,
                }
            ],
            productivity: [
                {
                    total: 67,
                    approved: 24,
                    active: 34,
                    remaining: 46
                }
            ]
        },
         {
            chart: [
                {
                    remaining: 55,
                    worked: 20,
                    reserved: 5,
                    deficiet: 10,
                    lost: 10,
                }
            ],
            jobDetails: [
                {
                    img: img,
                    jobNumber: 2342,
                    jobName: "Hemingway, Palm Beach Construction",
                    siteManager: "John Smith",
                    areas: 10,
                    workers: 200,
                    projectCost: 454263,
                    totalSpent: 154263,
                }
            ],
            productivity: [
                {
                    total: 67,
                    approved: 24,
                    active: 34,
                    remaining: 46
                }
            ]
        }
    ]
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-6'>
            {
                timelines.map((item, index) => (
                    <div className='bg-white rounded-lg' key={index}>
                        <div className='stat d-flex'>
                            {
                                item.chart.map((chart, index) => (
                                    <div className='chart flex items-center' key={index}>
                                        <div style={{ width: chart.remaining + "%" }} className={`chart__item p-2 bg-[#FF922B] text-white`}>
                                            {
                                                chart.remaining
                                            }
                                        </div>
                                        <div style={{ width: chart.worked + "%" }} className={`chart__item p-2 bg-[#40C057] text-white`}>
                                            {
                                                chart.worked
                                            }
                                        </div>
                                        <div style={{ width: chart.reserved + "%" }} className={`chart__item p-2 bg-[#748FFC] text-white`}>
                                            {
                                                chart.reserved
                                            }
                                        </div>
                                        <div style={{ width: chart.deficiet + "%" }} className={`chart__item p-2 bg-[#FFD43B] text-white`}>
                                            {
                                                chart.deficiet
                                            }
                                        </div>
                                        <div style={{ width: chart.lost + "%" }} className={`chart__item p-2 bg-[#F03E3E] text-white`}>
                                            {
                                                chart.lost
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className='chart-details flex mt-3 text-sm justify-center items-center'>
                            <div className='item mx-3 flex justify-center items-center text-sm'>
                                <div className='w-4 h-4 bg-[#FF922B] rounded-full mr-2'></div>
                                <p className='text-gray-500'>
                                    Remaining
                                </p>
                            </div>

                            <div className='item mx-3 flex justify-center items-center text-sm'>
                                <div className='w-4 h-4 bg-[#40C057] rounded-full mr-2'></div>
                                <p className='text-gray-500'>
                                    Worked
                                </p>
                            </div>

                            <div className='item mx-3 flex justify-center items-center text-sm'>
                                <div className='w-4 h-4 bg-[#748FFC] rounded-full mr-2'></div>
                                <p className='text-gray-500'>
                                    Reserved
                                </p>
                            </div>

                            <div className='item mx-3 flex justify-center items-center text-sm'>
                                <div className='w-4 h-4 bg-[#FFD43B] rounded-full mr-2'></div>
                                <p className='text-gray-500'>
                                    Deficiet
                                </p>
                            </div>

                            <div className='item mx-3 flex justify-center items-center text-sm'>
                                <div className='w-4 h-4 bg-[#F03E3E] rounded-full mr-2'></div>
                                <p className='text-gray-500'>
                                    Lost
                                </p>
                            </div>


                        </div>

                        <div className='job-deails flex justify-start items-center my-4'>
                            {
                                item.jobDetails.map((job, index) => (
                                    <div className='job flex items-center' key={index}>
                                        <div className='job__img'>
                                            <img src={job.img} alt="" />
                                        </div>
                                        <div className='job__details pl-4'>
                                            <p>
                                                <span className='text-gray-500'>
                                                    Job Number:
                                                </span>
                                                <span>
                                                    {
                                                        job.jobNumber
                                                    }
                                                </span>
                                            </p>

                                            <p className='text-2xl mb-3'>
                                                {
                                                    job.jobName
                                                }
                                            </p>
                                            <p>
                                                <span className='text-gray-500'>
                                                    Site Manager:
                                                </span>
                                                <span>
                                                    {
                                                        job.siteManager
                                                    }
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>


                        <table className='w-full'>
                            {
                                item.jobDetails.map((job, index) => (
                                    <tbody key={index}>
                                        <tr>
                                            <td className='border w-full p-2'>
                                                <span className='tedxt-gray-500'>
                                                    Areas
                                                </span>
                                            </td>
                                            <td className='border w-full p-2 text-right'>
                                                <span>
                                                    {job.areas}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='border w-full p-2'>
                                                <span className='tedxt-gray-500'>
                                                    Workers
                                                </span>
                                            </td>
                                            <td className='border w-full p-2 text-right'>
                                                <span>
                                                    {job.workers}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='border w-full p-2'>
                                                <span className='tedxt-gray-500'>
                                                    Project Cost
                                                </span>
                                            </td>
                                            <td className='border w-full p-2 text-right'>
                                                <span>
                                                    ${job.projectCost}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='border w-full p-2'>
                                                <span className='tedxt-gray-500'>
                                                    TOtal Spent
                                                </span>
                                            </td>
                                            <td className='border w-full p-2 text-right'>
                                                <span>
                                                    ${job.totalSpent}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                ))
                            }
                        </table>


                        <div className='productivity p-2 text-center my-3'>
                            Productivity Order
                        </div>

                        <table className='w-full'>
                            {
                                item.productivity.map((productivity, index) => (
                                    <tbody key={index}>
                                        <tr>
                                            <td className='border p-2 w-1/4 text-center'>
                                                <span className='tedxt-gray-500'>
                                                    Total
                                                </span>
                                            </td>
                                            <td className='border w-1/4 p-2 text-center'>
                                                <span className='tedxt-gray-500'>
                                                    Approved
                                                </span>
                                            </td>
                                            <td className='border w-1/4 p-2 text-center'>
                                                <span className='tedxt-gray-500'>
                                                    Active
                                                </span>
                                            </td>
                                            <td className='border w-1/4 p-2 text-center'>
                                                <span className='tedxt-gray-500'>
                                                    Remaining
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='border w-1/4 p-2 text-center'>
                                                <span>
                                                    {productivity.total}
                                                </span>
                                            </td>
                                            <td className='border w-1/4 p-2 text-center'>
                                                <span>
                                                    {productivity.approved}
                                                </span>
                                            </td>
                                            <td className='border w-1/4 p-2 text-center'>
                                                <span>
                                                    {productivity.active}
                                                </span>
                                            </td>
                                            <td className='border w-1/4 p-2 text-center'>
                                                <span>
                                                    {productivity.remaining}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                ))
                            }
                        </table>
                    </div>
                ))
            }
        </div>
    )
}

export default Timelines