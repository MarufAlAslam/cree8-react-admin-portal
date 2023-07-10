import React from 'react'
import CodeTable from '../../../../../shared/DataTable/CodeTable'
import { Button, Select } from 'antd'
import AccuralTable from '../../../../../shared/DataTable/AccuralTable'
import PayrollCategories from '../../../../../shared/DataTable/PayrollCategories'
import {FaPlus } from 'react-icons/fa'

import SingleWorkersProfile from '../SingleWorkerProfile'

const ActiveProfile = ({data}) => {
    data.status = "Active"
    const noTerminateBtn = false;
    return (
        <div>
            <>
              <div className="details mt-5 bg-white p-4">
                <SingleWorkersProfile noTerminateBtn={noTerminateBtn} data={data}/>

                
                  {/* payroll */}
                  <div className="payroll mt-8">
                    <div className="flex justify-between items-center">
                      <p className="fs-18">Payroll Categories</p>
                      <Button className="flex justify-center items-center py-3 border border-[#111111] h-[42px]">
                        Add New{" "}
                        <div className="bg-orange-500 p-2 rounded-md text-white ml-3">
                          <FaPlus />
                        </div>
                      </Button>
                    </div>

                    <div className="mt-8 lg:overflow-hidden overflow-x-auto">
                      <PayrollCategories />
                    </div>
                    <div className="mt-8 lg:overflow-hidden overflow-x-auto">
                      <AccuralTable />
                    </div>
                  </div>
              </div>

              {/* breakdown */}
              <div className="breakdown mt-5 bg-white p-4">
                <p className="fs-18 mb-5">Task Breakdown</p>

                <label>Worksite</label>
                <Select className="lg:w-3/5 w-full block mt-4">
                  <option value="1">All</option>
                </Select>

                {/* codetable */}
                <div className="mt-8 lg:overflow-hidden overflow-x-auto">
                  <CodeTable />
                </div>
              </div>
            </>
        </div>
    )
}

export default ActiveProfile