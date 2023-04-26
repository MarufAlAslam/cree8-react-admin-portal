import React from 'react'
import { Button } from 'antd'
import { FaEdit, FaPlus } from 'react-icons/fa'
import dp from "../../../../../assets/images/Personnel/dp.png";
import TerminatedProfileTable from '../../../../../shared/DataTable/TerminatedProfileTable'

const TerminatedProfile = ({data}) => {
    data.status = "Terminated"
    return (
        <div>
            <>
              <div className="details mt-5 bg-white p-4">
                <div className="profile pb-4 border-b-2 border-[#E9E9E9]">
                  <div className="flex justify-start items-center">
                    <div className="dp">
                      <img src={dp} className="mr-10" alt="" />
                    </div>
                    <div className="contents p-5 pl-10">
                      <div className="flex w-full justify-between items-center">
                        <div className="profile-details w-full">
                          <div className="flex justify-start items-center">
                            <p className="fs-22 mr-5">{data.name}</p>
                            {data.status === "Active" ? (
                              <span className="fs-10 ml-3 text-[#41C700] border rounded-md px-2 py-1 border-[#41C700] bg-[#42c70033]">
                                Active
                              </span>
                            ) : (
                              <span className="fs-10 ml-3 text-[#FF0000] border rounded-md px-2 py-1 border-[#FF0000] bg-[#FF000033]">
                                Terminated
                              </span>
                            )}
                            <button className="px-3">
                              <FaEdit />
                            </button>
                          </div>

                          <div className="flex justify-between lg:w-1/2 items-center mt-3">
                            <div className="lg:w-1/4 md:w-1/2 w-full text-left">
                              <p className="fs-14 text-[#A1A1A1]">Email</p>
                              <p className="fs-18">{data.email}</p>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full text-left">
                              <p className="fs-14 text-[#A1A1A1]">Employee Number</p>
                              <p className="fs-18">{data.cardId}</p>
                            </div>
                          </div>
                        </div>

                        <Button className="flex justify-center items-center py-3 border border-[#111111] h-[42px]">
                          Revoke{" "}
                          <div className="bg-orange-500 p-2 rounded-md text-white ml-3">
                            <FaPlus />
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Worker Full Details */}
                <div className="worker-full-details mt-5">
                 

                  {/* payroll */}
                  <div className="payroll mt-8">
                    

                    <div className="mt-8 lg:overflow-hidden overflow-x-auto">
                      <TerminatedProfileTable />
                    </div>
                  </div>
                </div>
              </div>
            </>
        </div>
    )
}

export default TerminatedProfile